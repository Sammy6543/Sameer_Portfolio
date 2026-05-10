import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { SkillBar } from "./SkillBar";
import { TechBadge } from "./TechBadge";
import profileImg from "@/assets/Profile.jpg";

export function Sidebar() {
  const skills = [
    { name: "React.js", percentage: 95 },
    { name: "Next.js", percentage: 90 },
    { name: "Node.js", percentage: 88 },
    { name: "Express.js", percentage: 85 },
    { name: "MongoDB", percentage: 86 },
    { name: "PostgreSQL", percentage: 75 },
    { name: "Tailwind CSS", percentage: 92 },
    { name: "TypeScript", percentage: 84 },
    { name: "JWT Auth", percentage: 82 }
  ];

  const programmingSkills = ["JavaScript", "HTML", "CSS"];
  const tools = ["Git", "GitHub", "Postman", "Figma"];
  const aiTools = ["Cursor", "Copilot", "Claude", "ChatGPT", "Grok", "Google Stitch", "Antigravity"];
  const interests = ["Web Development", "API Design", "UI/UX", "AI Tools", "Open Source"];

  return (
    <div className="lg:sticky lg:top-8 bg-gradient-to-br from-[#c9965b] to-[#d8a56a] rounded-2xl p-6 lg:p-8 shadow-2xl text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:motion-preset-fade"
      >
        {/* Profile Image */}
        <div className="mb-4 lg:mb-6 flex justify-center">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden">
            <img 
              src={profileImg} 
              alt="Mohammed Sameer Rangrej" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4 lg:mb-6">
          <h2 className="text-xl lg:text-xl font-bold mb-1">Mohammed Sameer</h2>
          <h2 className="text-xl lg:text-xl font-bold mb-2 lg:mb-3">Rangrej</h2>
          <p className="text-white/90 text-sm">Full Stack Developer</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6 text-xs lg:text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} className="flex-shrink-0" />
            <span className="break-all">sameerrangrej2@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="flex-shrink-0" />
            <span>+91 7737875786</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="flex-shrink-0" />
            <span>Bhilwara, Rajasthan, India</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-6 lg:mb-8 flex justify-center">
          <SocialLinks />
        </div>

        {/* Divider */}
        <div className="h-px bg-white/30 mb-4 lg:mb-6"></div>

        {/* Skills Progress Bars */}
        <div className="mb-4 lg:mb-6">
          <h3 className="font-bold mb-3 lg:mb-4 text-base lg:text-lg">Technical Skills</h3>
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-3 lg:mb-4">
              <div className="flex justify-between mb-1.5 lg:mb-2">
                <span className="text-xs lg:text-sm font-medium text-white">{skill.name}</span>
                <span className="text-xs lg:text-sm font-medium text-white/80">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1.5 lg:h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/30 mb-4 lg:mb-6"></div>

        {/* Programming Languages */}
        <div className="mb-4 lg:mb-6">
          <h3 className="font-bold mb-2 lg:mb-3 text-xs lg:text-sm">PROGRAMMING</h3>
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            {programmingSkills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 lg:px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-4 lg:mb-6">
          <h3 className="font-bold mb-2 lg:mb-3 text-xs lg:text-sm">TOOLS</h3>
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 lg:px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div className="mb-4 lg:mb-6">
          <h3 className="font-bold mb-2 lg:mb-3 text-xs lg:text-sm">AI TOOLS</h3>
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 lg:px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="font-bold mb-2 lg:mb-3 text-xs lg:text-sm">INTERESTS</h3>
          <div className="flex flex-wrap gap-1.5 lg:gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-2.5 lg:px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
