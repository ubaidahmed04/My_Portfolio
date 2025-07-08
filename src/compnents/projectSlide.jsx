"use client";

import { ProjectCard } from "./ProjectCard";
import { Marquee } from "@/components/magicui/marquee";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiExpress,
} from "react-icons/si";
import { useSelector } from "react-redux";

const projects = [
  {
    title: "Weather App",
    description: "Weather App using MongoDB, Express, React, Node.js, and Tailwind CSS.",
    URL: "/Images/project2.png",
    path: "https://skypulse.vercel.app/",
    blurImageUrl: "/images/mern-blur.jpg",
    stackIcons: [SiMongodb,  SiReact, SiNodedotjs, SiTailwindcss],
  },
  {
    title: "Quiz App",
    description: "Markdown blog with MDX support and TailwindCSS styling.",
    URL: "/Images/project5.png",
    path: "https://sit-quizapp.vercel.app",
    blurImageUrl: "/images/next-blog-blur.jpg",
    stackIcons: [SiReact, SiTailwindcss,SiNodedotjs],
  },
  {
    title: "Mystical Fragrance",
    description: "AI assistant powered by OpenAI APIs with full frontend integration.",
    URL: "/Images/Mystical.PNG",
    path: "https://www.mysticalfragrance.com/",
    blurImageUrl: "/images/ai-agent-blur.jpg",
    stackIcons: [SiReact,SiExpress, SiTailwindcss,SiMongodb, SiNextdotjs],
  },
  {
    title: "Nubitsoft",
    description: "AI assistant powered by OpenAI APIs with full frontend integration.",
    URL: "/Images/nubitProject.png",
    path: "https://nubitsoft.com/",
    blurImageUrl: "/images/ai-agent-blur.jpg",
    stackIcons: [SiReact, SiExpress, SiTailwindcss,SiMongodb, SiNextdotjs],
  },
];

export default function ProjectSlider() {
  const isTheme = useSelector((state) => state.theme.isTheme);

  return (
    <div className={` flex justify-center items-center flex-col overflow-hidden ${isTheme ? 'bg-dark text-light' : 'bg-light text-dark'} `}>
      <h2  className={` text-4xl font-bold text-center mb-24 text-shadow-custom ${isTheme ? 'bg-dark text-light' : 'bg-light text-dark'} `}>My Projects</h2>
      <Marquee pauseOnHover className="[--duration:25s]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Marquee>
    </div>
  );
}
