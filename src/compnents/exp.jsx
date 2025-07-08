"use client";

import { Briefcase, CalendarDays } from "lucide-react";
import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "NubitSoft",
    logo: "/Images/nubit-logo.gif",
    role: "Frontend Developer Intern",
    duration: "August 2024 - November 2024",
    testimonial:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    responsibilities: [
      "Created responsive and user-friendly web pages using HTML, CSS, JavaScript, and WordPress.",
      "Worked closely with designers to enhance website layout and visual consistency.",
      "Used WordPress to build and manage websites, ensuring good performance and mobile compatibility.",
    ],
    iconColor: "bg-purple-500",
  },
  {
    company: "NubitSoft",
    logo: "/Images/nubit-logo.gif",
    role: "Frontend Developer Intern",
    duration: "December 2024 - January 2025",
    testimonial:
      "Adrian’s contributions to Docker’s web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    responsibilities: [
      "Built and styled responsive web pages using React.js.",
      "Integrated frontend components with backend APIs to display dynamic content.",
      "Worked with the team to test UI features and fix minor bugs for better user experience.",
    ],
    iconColor: "bg-pink-500",
  },
  {
    company: "NubitSoft",
    logo: "/Images/nubit-logo.gif",
    role: "MERN Stack Developer",
    duration: "February 2025 - Present",
    testimonial:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & met our product goals.",
    responsibilities: [
      "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Worked with both SQL and NoSQL databases, including OracleDB and PostgreSQL.",
      "Integrated RESTful APIs and optimized backend logic for better performance and scalability.",
    ],
    iconColor: "bg-blue",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="w-full min-h-screen bg-dark px-6 py-20 text-light flex flex-col gap-20">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center justify-center gap-10"
        >
          {/* Left Side - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md bg-gray rounded-xl shadow-md p-6"
          >
            <Typography variant="paragraph" className="mb-4">
              {exp.testimonial}
            </Typography>
            <img src={exp.logo} alt={exp.company} className="h-8 mt-2" />
          </motion.div>

          {/* Center Timeline Dot */}
          <div className="hidden lg:flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${exp.iconColor}`}>
              <Briefcase className="text-white" size={20} />
            </div>
            {index !== experiences.length - 1 && (
              <div className="w-px h-28 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            )}
          </div>

          {/* Right Side - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-xl"
          >
            <Typography variant="h5" className="mb-2">
              {exp.role}
            </Typography>
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <CalendarDays size={16} className="mr-2" />
              {exp.duration}
            </div>
            <Typography variant="small" className="italic mb-2">
              Responsibilities:
            </Typography>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
              {exp.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
