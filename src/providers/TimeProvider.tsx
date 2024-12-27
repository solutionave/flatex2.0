// import React, { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

// type PageProps = {
//     children: JSX.Element
// }

// export const TimeContext = createContext<{
//     timeMinutes?: number,
//     setTimeMinutes?: SetStateAction<Dispatch<number>>
//     timeSeconds?: number,
//     setTimeSeconds?: SetStateAction<Dispatch<number>>,
//     startTime?: () => void,
//     endTime?: () => void
// }>({
// })

// export const TimeProvider: FC<PageProps> = ({ children }) => {

//     const [timeMinutes, setTimeMinutes] = useState(0)
//     const [timeSeconds, setTimeSeconds] = useState(0)
//     const [isClockStop, setIsClockStop] = useState(true)

//     const startTime = () => {
//         setTimeSeconds(0)
//         setTimeMinutes(0)
//         setIsClockStop(false)
//     }

//     const endTime = () => {
//         setTimeSeconds(0)
//         setTimeMinutes(0)
//         setIsClockStop(true)
//     }

//     useEffect(() => {

//         const interval = setInterval(() => {
//             if (isClockStop) {
//                 return;
//             }

//             setTimeSeconds(timeSeconds => timeSeconds + 1)
//             if (timeSeconds > 58) {
//                 setTimeSeconds(0)
//                 setTimeMinutes(timeMinutes => timeMinutes + 1)
//             }
//         }, 1000);

//         return () => {
//             clearInterval(interval)
//         }

//     }, [timeMinutes, isClockStop, timeSeconds])

//     return (
//         <TimeContext.Provider value={{
//             setTimeSeconds,
//             setTimeMinutes,
//             timeSeconds,
//             timeMinutes,
//             startTime,
//             endTime,
//         }}>

//             <>{children}</>
//         </TimeContext.Provider>
//     )
// }
"use client";
import React, {
  createContext,
  Dispatch,
  FC,
  JSX,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type PageProps = {
  children: React.ReactNode;
};

export const TimeContext = createContext<{
  timeMinutes?: number;
  timeSeconds?: number;
  resetTimer?: () => void;
} | null>(null);

export const TimeProvider: FC<PageProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
