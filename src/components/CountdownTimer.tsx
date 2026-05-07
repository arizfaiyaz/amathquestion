import { useEffect, useState } from "react";
import { getTimeUntilMidnight } from "../utils/dailyLogic";


export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useEffect(() => {
    //updating time every 1000ms
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (time: number) => time.toString().padStart(2, '0');
  
  return (
    <>
      <div className="flex justify-center gap-4 my-8 rounded-2xl">
        <TimeBlock value={formatTime(timeLeft.hours)} label="Hours" />
        <TimeBlock value={formatTime(timeLeft.minutes)} label="Minutes" />
        <TimeBlock value={formatTime(timeLeft.seconds)} label="Seconds"/>
      </div>
    </>
  )
}

function TimeBlock({ value, label }: { value: string, label: string }) {
  return(
    <>
      <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-sm w-20 h-24">
            <span className="text-2xl font-bold text-blue-900">{value}</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">{label}</span>
          </div>
    </>
  )
}