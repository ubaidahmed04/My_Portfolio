"use client";

import { Briefcase, CalendarDays } from "lucide-react";
import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "NubitSoft",
    logo: "/Images/nubit-logo.gif",
    role: "Frontend Developer Intern",
    duration: "July 2024 - September 2024",
    testimonial:
      "Ubaid joined us as a Frontend Intern and quickly proved his ability to convert design ideas into functional interfaces. His dedication to writing clean and maintainable code greatly improved the quality of our UI components.",
    responsibilities: [
      "Built responsive and interactive webpages using HTML, CSS, and JavaScript.",
      "Collaborated closely with UI/UX designers to implement pixel-perfect layouts.",
      "Used WordPress for website management, ensuring performance and cross-device compatibility.",
    ],
    iconColor: "bg-purple-500",
  },
  {
    company: "NubitSoft",
    logo: "/Images/nubit-logo.gif",
    role: "Frontend Developer",
    duration: "October 2024 - January 2025",
    testimonial:
      "Ubaid played a key role in advancing our React-based applications. His focus on reusability, performance, and accessibility helped us deliver polished, production-ready features on tight deadlines.",
    responsibilities: [
       "Developed scalable and dynamic user interfaces using React.js.",
      "Integrated frontend components with RESTful APIs for real-time data handling.",
      "Participated in code reviews, debugging, and performance optimization tasks.",
    ],
    iconColor: "bg-pink-500",
  },
  {
    company: "NubitSoft",
    logo: "/Images/nubit-logo.gif",
    role: "MERN Stack Developer",
    duration: "February 2025 - Present",
    testimonial:
      "Ubaid's transition to full-stack development was seamless. His ability to own features end-to-end, from database modeling to front-end implementation, has made him a valuable member of our core development team.",
    responsibilities: [
           "Built and deployed full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designed RESTful APIs and handled server-side logic to support frontend functionality.",
      "Worked with both relational and NoSQL databases, optimizing queries and backend performance.",
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
