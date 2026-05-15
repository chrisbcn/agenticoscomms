import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Connect } from 'vite'

// Proxy /api/chat → Anthropic API. API key stays in Node, never reaches the browser.
function claudeProxyPlugin() {
  return {
    name: 'claude-proxy',
    configureServer(server: { middlewares: Connect.Server }) {
      server.middlewares.use('/api/chat', (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method Not Allowed')
          return
        }
        let body = ''
        req.on('data', (chunk: Buffer) => { body += chunk.toString() })
        req.on('end', async () => {
          try {
            const apiKey = process.env.ANTHROPIC_API_KEY ?? ''
            const upstream = await fetch('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
              },
              body,
            })
            const data = await upstream.json()
            res.setHeader('content-type', 'application/json')
            res.statusCode = upstream.status
            res.end(JSON.stringify(data))
          } catch (err) {
            console.error('[claude-proxy]', err)
            res.statusCode = 500
            res.end(JSON.stringify({ error: 'Proxy error' }))
          }
        })
      })
    },
  }
}

// Middleware to handle HEAD requests for static files (Vite dev server returns 503 for HEAD by default)
function headRequestPlugin() {
  return {
    name: 'head-request-support',
    configureServer(server: { middlewares: Connect.Server }) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'HEAD') {
          req.method = 'GET'
          const originalEnd = res.end.bind(res)
          // @ts-ignore
          res.end = (...args) => {
            req.method = 'HEAD'
            // @ts-ignore
            res.end = originalEnd
            res.end()
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    headRequestPlugin(),
    claudeProxyPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
