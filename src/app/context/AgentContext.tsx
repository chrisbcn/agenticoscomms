import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSpeech } from "../../hooks/useSpeech";

interface AgentContextValue {
  isListening: boolean;
  isProcessing: boolean;
  transcript: string;
  interim: string;
  agentReply: string;
  toggleListening: () => void;
  error: string | null;
  supported: boolean;
}

const AgentContext = createContext<AgentContextValue | null>(null);

export function useAgent() {
  const ctx = useContext(AgentContext);
  if (!ctx) throw new Error("useAgent must be used within AgentProvider");
  return ctx;
}

const SYSTEM_PROMPT = `You are Maura, a Samsung AI OS assistant helping a user on Mother's Day (Sunday, May 10).

Story context:
The user is planning and experiencing a special dinner with their Mom and Aaron at Tasca Restaurant in New York. The story flows through these beats:
1. User asks Maura to find a cozy restaurant for the family
2. Maura recommends and books Tasca Restaurant (Sunday 7pm)
3. Maura books a Waymo autonomous car (pickup 6:00pm, dropoff 6:22pm, $12)
4. The Waymo arrives and takes them to dinner
5. After a wonderful dinner, Maura surfaces photos from the evening
6. The user wants to share the photos with a warm message to Mom and Aaron

Available screens (routes):
- /agentic → home / greeting ("How can I help?")
- /agentic/restaurant → user asking for a restaurant recommendation
- /agentic/booking → Maura showing Tasca restaurant (first option, "Recommended", 6:30pm)
- /agentic/booking-alt → Maura showing Olea restaurant (second option, "Near to you", 7:00pm)
- /agentic/messages → booking confirmed, family message thread preview
- /agentic/waymo → Waymo ride booked confirmation
- /agentic/tracking → Waymo car is en route (10 min away)
- /agentic/photos → Live top-down Waymo tracking, heading to dinner
- /agentic/finale → After dinner — "From last night" photos with share option
- /agentic/share → User editing/speaking the message to send with photos

Intent → route mapping:
- Finding a restaurant / dinner plans / where to eat → /agentic/restaurant
- Show Tasca / first option / recommended option → /agentic/booking
- Show another option / different restaurant / Olea / near to you → /agentic/booking-alt
- Confirming booking / yes book it / book Tasca / book Olea → /agentic/messages
- Family messages / text mom / group chat → /agentic/messages
- Book a ride / Waymo / transportation / car → /agentic/waymo
- Track the car / where is the Waymo / ETA → /agentic/tracking
- On the way / heading to dinner / in the car → /agentic/photos
- Photos / memories / last night / share with family → /agentic/finale
- Edit message / change the text / customize message → /agentic/share
- Send it / send the message / yes send → /agentic
- Unclear or general → stay or go to /agentic

Respond ONLY with valid JSON, no other text:
{
  "reply": "Maura's warm, brief 1-sentence response",
  "navigateTo": "/agentic/restaurant"
}`;

async function callClaude(currentPath: string, spokenText: string): Promise<{ reply: string; navigateTo: string }> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Current screen: ${currentPath}\nUser said: "${spokenText}"\n\nRespond with JSON only.`,
        },
      ],
    }),
  });

  const data = await response.json();
  const text: string = data.content?.[0]?.text ?? "{}";
  const cleaned = text.replace(/```json\s*|\s*```/g, "").trim();
  return JSON.parse(cleaned);
}

export function AgentProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const speech = useSpeech();
  const [isProcessing, setIsProcessing] = useState(false);
  const [agentReply, setAgentReply] = useState("");
  const wasListeningRef = useRef(false);
  const locationRef = useRef(location.pathname);

  useEffect(() => {
    locationRef.current = location.pathname;
  }, [location.pathname]);

  // Detect transition from listening → stopped and process if we have speech
  useEffect(() => {
    const wasListening = wasListeningRef.current;
    wasListeningRef.current = speech.isListening;

    if (wasListening && !speech.isListening && speech.transcript.trim()) {
      const spoken = speech.transcript.trim();
      setIsProcessing(true);
      callClaude(locationRef.current, spoken)
        .then(({ reply, navigateTo }) => {
          if (reply) setAgentReply(reply);
          if (navigateTo) navigate(navigateTo);
        })
        .catch((err) => {
          console.error("Maura AI error:", err);
        })
        .finally(() => {
          setIsProcessing(false);
          speech.reset();
        });
    }
  }, [speech.isListening]);

  // Spacebar: hold to listen, release to send
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Space" || e.repeat) return;
      const target = e.target as HTMLElement;
      if (target.matches("input, textarea, [contenteditable]")) return;
      e.preventDefault();
      if (!speech.isListening) speech.start();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      if (speech.isListening) speech.stop();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [speech.isListening, speech.start, speech.stop]);

  const toggleListening = useCallback(() => {
    if (speech.isListening) speech.stop();
    else speech.start();
  }, [speech.isListening, speech.start, speech.stop]);

  return (
    <AgentContext.Provider
      value={{
        isListening: speech.isListening,
        isProcessing,
        transcript: speech.transcript,
        interim: speech.interim,
        agentReply,
        toggleListening,
        error: speech.error,
        supported: speech.supported,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
}
