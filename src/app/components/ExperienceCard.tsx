import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { TechBadge } from "./TechBadge";

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export function ExperienceCard({
  role,
  company,
  location,
  duration,
  responsibilities,
  technologies
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="relative bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#c9965b] mb-6"
    >
      <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-[#c9965b] to-[#d8a56a] rounded-full border-4 border-white"></div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#2b2b2b] mb-1">{role}</h3>
        <p className="text-lg text-[#c9965b] font-medium mb-2">{company}</p>

        <div className="flex flex-wrap gap-4 text-sm text-[#6b6b6b]">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-[#2b2b2b] mb-2">Key Responsibilities:</h4>
        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-[#6b6b6b] flex items-start">
              <span className="text-[#c9965b] mr-2 mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <TechBadge key={index} name={tech} variant="default" />
        ))}
      </div>
    </motion.div>
  );
}
