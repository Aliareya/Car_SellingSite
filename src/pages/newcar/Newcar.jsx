import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { div } from "framer-motion/client";

export default function Newcar() {
  // Countdown (set your launch date)
  const launchDate = new Date("2025-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / 1000 / 60) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="w-full px-4 sm:px-0 md:px-0 lg:px-0 py-5">
      <div
        className="h-auto w-full rounded-lg flex flex-col items-center justify-center 
                    bg-gradient-to-r from-red-700 via-red-800 to-black 
                    text-white px-6 sm:px-2 sm:py-4 py-8 text-center"
      >
        {/* Logo / Title */}
        <h1 className="text-6xl md:text-7xl sm:w-full font-extrabold mb-4 tracking-wide drop-shadow-lg">
          🚀 Coming Soon
        </h1>
        <p className="text-lg sm:w-full md:text-xl text-gray-200 mb-12 max-w-2xl">
          We’re building something exciting! Stay tuned and be the first to know
          when we launch.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div
              key={key}
              className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-5 text-center 
                       shadow-md border border-white/20 min-w-[90px]"
            >
              <p className="text-3xl font-bold">{value}</p>
              <span className="uppercase text-sm text-gray-300">{key}</span>
            </div>
          ))}
        </div>

        {/* Email Subscribe */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("🔥 Thanks for subscribing!");
          }}
          className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg mb-10"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-grow px-5 py-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-red-700 px-6 flex items-center gap-2 hover:bg-red-800 transition text-white font-semibold">
            <Icon icon="mdi:send" width="20" />
            <span className="sm:hidden">Notify Me</span>
          </button>
        </form>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-red-300 transition">
            <Icon icon="mdi:facebook" width="28" />
          </a>
          <a href="#" className="hover:text-red-400 transition">
            <Icon icon="mdi:instagram" width="28" />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <Icon icon="mdi:twitter" width="28" />
          </a>
          <a href="#" className="hover:text-red-600 transition">
            <Icon icon="mdi:linkedin" width="28" />
          </a>
        </div>
      </div>
    </div>
  );
}
