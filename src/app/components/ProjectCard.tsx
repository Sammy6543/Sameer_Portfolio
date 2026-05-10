import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  features,
  status,
  githubUrl,
  liveUrl,
  imageUrl
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(201, 150, 91, 0.15)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="h-48 bg-gradient-to-br from-[#c9965b] to-[#d8a56a] flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white text-6xl opacity-20">💼</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#2b2b2b] mb-2">{title}</h3>
        <p className="text-[#6b6b6b] mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#2b2b2b] mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="text-sm text-[#6b6b6b] flex items-start">
                <span className="text-[#c9965b] mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <TechBadge key={index} name={tech} variant="outline" />
          ))}
        </div>

        {status && (
          <p className="text-sm text-[#c9965b] italic mb-4">{status}</p>
        )}

        <div className="flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#2b2b2b] text-white rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9965b] to-[#d8a56a] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
