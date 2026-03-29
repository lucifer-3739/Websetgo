"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, image, tags, githubUrl = "#", liveUrl = "#" }: ProjectCardProps) {
  return (
    <div className="group relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500">
      {/* Background Image */}
      <Image 
        src={image} 
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay - appears on hover */}
      <div className="absolute inset-0 bg-white/50 dark:bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
      
      <div className="absolute inset-0 bg-linear-to-t from-white/40 via-white/30 dark:from-neutral-900/95 dark:via-neutral-900/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content - slides up on hover */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {title}
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base line-clamp-3 mb-6 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 transform opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 delay-300">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Preview
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900/5 hover:bg-neutral-900/10 dark:bg-white/10 dark:hover:bg-white/20 text-neutral-900 dark:text-white backdrop-blur-md border border-neutral-900/10 dark:border-white/10 rounded-xl font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
