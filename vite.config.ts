import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Connect } from 'vite'

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
