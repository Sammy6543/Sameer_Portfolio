import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { motion } from "motion/react";

interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "website";
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Globe
};

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/Sammy6543", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-sameer-rangrej-43395b198/", icon: "linkedin" }
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label={link.name}
          >
            <Icon size={18} />
          </motion.a>
        );
      })}
    </div>
  );
}
