import { useEffect, useState } from "react";

export default function Timer({ initialTime = "00:00:00" }) {
  const toSeconds = (timeStr) => {
    const [h = 0, m = 0, s = 0] = timeStr.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  const [timeLeft, setTimeLeft] = useState(toSeconds(initialTime));

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="text-4xl flex font-mono bg-black/50 flex-1 text-white rounded-2xl text-center p-5 w-full">
      <p className="my-auto flex-1">{formatTime(timeLeft)}</p>
    </div>
  );
}
