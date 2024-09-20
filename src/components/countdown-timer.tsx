"use client";
import React from "react";
import { useEffect, useState, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const TimerComponent: React.FC<{ value: number; label: string }> = React.memo(
  ({ value, label }) => (
    <div className="flex flex-col gap-2 items-center">
      <span className="text-primary-solstice text-h2">{value}</span>
      <span className="text-secondary-evergreen font-bevan uppercase text-body">
        {label}
      </span>
    </div>
  )
);

TimerComponent.displayName = "TimerComponent";

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
}) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // If timeLeft is null or not set yet, render a consistent placeholder
  // However, since we initialize it with calculateTimeLeft, it's always set

  const timerComponents: JSX.Element[] = [];

  const intervals: (keyof TimeLeft)[] = ["days", "hours", "minutes", "seconds"];

  intervals.forEach((interval) => {
    timerComponents.push(
      <TimerComponent
        key={interval}
        value={timeLeft[interval]}
        label={interval}
      />
    );
  });

  return (
    <div
      className="flex flex-col md:flex-row gap-6 justify-center items-center"
      role="timer"
      aria-live="polite"
      aria-label="Countdown Timer"
    >
      {timerComponents}
    </div>
  );
};
