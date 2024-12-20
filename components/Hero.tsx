'use client';

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const targetDate = Date.UTC(2025, 0, 1, 0, 0, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now; 

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="max-container padding-container flex flex-col justify-center items-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row flex-grow">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Countdown to Launch:</h2>
          <div className="flex justify-center gap-4 mt-4 text-lg">
            <div className="flex flex-col items-center">
              <span className="font-bold text-3xl">{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-3xl">{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-3xl">{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-3xl">{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
