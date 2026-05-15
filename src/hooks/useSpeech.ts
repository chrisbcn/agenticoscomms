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

export function useSpeech(): SpeechResult {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const supported =
    typeof window !== "undefined" &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

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
    };

    recognition.onerror = (event: any) => {
      if (event.error !== "aborted") setError(event.error);
      setIsListening(false);
      setInterim("");
    };

    recognition.onend = () => {
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
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setInterim("");
    setError(null);
  }, []);

  useEffect(() => {
    return () => recognitionRef.current?.stop();
  }, []);

  return { isListening, transcript, interim, supported, error, start, stop, reset };
}
