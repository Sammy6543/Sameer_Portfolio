import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[#2b2b2b]">{name}</span>
        <span className="text-sm font-medium text-[#6b6b6b]">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#c9965b] to-[#d8a56a] rounded-full"
        />
      </div>
    </div>
  );
}
