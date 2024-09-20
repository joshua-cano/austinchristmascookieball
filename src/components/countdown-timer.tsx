"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
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
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Function to update the timer
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    // Update the timer immediately on mount
    updateTimer();

    // Set up an interval to update the timer every second
    const timer = setInterval(updateTimer, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // If timeLeft is null, render nothing or a placeholder to prevent mismatch
  if (!timeLeft) {
    return (
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-primary-solstice text-h2">0</span>
          <span className="text-secondary-evergreen font-bevan uppercase text-body">
            days
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-primary-solstice text-h2">0</span>
          <span className="text-secondary-evergreen font-bevan uppercase text-body">
            hours
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-primary-solstice text-h2">0</span>
          <span className="text-secondary-evergreen font-bevan uppercase text-body">
            minutes
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-primary-solstice text-h2">0</span>
          <span className="text-secondary-evergreen font-bevan uppercase text-body">
            seconds
          </span>
        </div>
      </div>
    );
  }

  const timerComponents: JSX.Element[] = [];

  // Explicitly type the keys to ensure type safety
  const intervals: (keyof TimeLeft)[] = ["days", "hours", "minutes", "seconds"];

  intervals.forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col gap-2 items-center">
        <span className="text-primary-solstice text-h2">
          {timeLeft[interval]}
        </span>
        <span className="text-secondary-evergreen font-bevan uppercase text-body">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {timerComponents}
    </div>
  );
};
