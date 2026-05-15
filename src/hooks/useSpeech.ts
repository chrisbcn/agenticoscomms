import { useCallback, useEffect, useRef, useState } from "react";

export interface SpeechResult {
  isListening: boolean;
  transcript: string;
  interim: string;
  supported: boolean;
  error: string | null;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

// How long after the last speech result to auto-stop (ms)
const SILENCE_TIMEOUT = 1800;

export function useSpeech(): SpeechResult {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Mirrors interim state so onend can flush it to transcript (Chrome often
  // doesn't deliver a final result when stop() is called programmatically)
  const interimRef = useRef("");

  const supported =
    typeof window !== "undefined" &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const clearSilenceTimer = () => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  };

  const start = useCallback(() => {
    if (!supported) return;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let interimText = "";
      let finalText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalText += result[0].transcript;
        } else {
          interimText += result[0].transcript;
        }
      }
      if (finalText) setTranscript((prev) => prev + finalText);
      setInterim(interimText);
      interimRef.current = interimText;

      // Reset silence timer on every new speech event
      clearSilenceTimer();
      silenceTimerRef.current = setTimeout(() => {
        recognition.stop();
      }, SILENCE_TIMEOUT);
    };

    recognition.onerror = (event: any) => {
      clearSilenceTimer();
      if (event.error !== "aborted") setError(event.error);
      setIsListening(false);
      setInterim("");
    };

    recognition.onend = () => {
      clearSilenceTimer();
      // Flush any pending interim text that Chrome didn't finalize on stop()
      if (interimRef.current) {
        setTranscript((prev) => prev + interimRef.current);
        interimRef.current = "";
      }
      setIsListening(false);
      setInterim("");
    };

    recognitionRef.current = recognition;
    setTranscript("");
    setInterim("");
    setError(null);
    recognition.start();
    setIsListening(true);
  }, [supported]);

  const stop = useCallback(() => {
    clearSilenceTimer();
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setInterim("");
    setError(null);
  }, []);

  useEffect(() => {
    return () => {
      clearSilenceTimer();
      recognitionRef.current?.stop();
    };
  }, []);

  return { isListening, transcript, interim, supported, error, start, stop, reset };
}
