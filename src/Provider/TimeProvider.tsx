"use client";

import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type PageProps = {
  children: JSX.Element;
};

export const TimeContext = createContext<{
  timeMinutes?: number;
  timeSeconds?: number;
  resetTimer?: () => void;
} | null>(null);

export const TimeProvider: FC<PageProps> = ({ children }) => {
  const [timeMinutes, setTimeMinutes] = useState(30);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [isClockRunning, setIsClockRunning] = useState(false);

  const resetTimer = () => {
    setTimeMinutes(30); // Reset to 30 minutes
    setTimeSeconds(0); // Reset to 0 seconds
    setIsClockRunning(true); // Start counting down
  };

  useEffect(() => {
    // Countdown logic
    const interval = setInterval(() => {
      if (!isClockRunning) return;

      if (timeMinutes === 0 && timeSeconds === 0) {
        setIsClockRunning(false);
        return;
      }

      if (timeSeconds === 0) {
        setTimeMinutes((prev) => prev - 1);
        setTimeSeconds(59);
      } else {
        setTimeSeconds((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeMinutes, timeSeconds, isClockRunning]);

  useEffect(() => {
    // Global click listener to reset the timer
    const handleGlobalClick = () => resetTimer();
    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <TimeContext.Provider
      value={{
        timeMinutes,
        timeSeconds,
        resetTimer,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
