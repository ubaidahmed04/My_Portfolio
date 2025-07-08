import React from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import { useSelector } from 'react-redux';
import { Github, Linkedin, Instagram } from "lucide-react";
import {bannerBase64,profileLogo} from '../app/Const/Base64'

import Image from "next/image";
function About() {
  const isTheme = useSelector((state) => state.theme.isTheme);

  return (
    <>
      <div className=' xl:py-[200px] pt-20  sm:px-14 px-6  py-20 flex flex-col justify-center lg:justify-between md:flex-row flex-wrap gap-8 '>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.9 }}
          className="flex flex-col gap-6 w-full lg:w-1/2 xl:w-1/2"
        >
          <h2
            className={`text-4xl md:text-6xl font-semibold font-agustina text-shadow-custom ${isTheme ? "text-light" : "text-dark"
              }`}
          >
            ABOUT ME
          </h2>

          <p
            className={`text-base md:text-lg tracking-wide leading-relaxed ${isTheme ? "text-light" : "text-dark"
              }`}
          >
            I&apos;m a web and application developer with a passion for creating beautiful and functional digital solutions. My journey began with my studies in computer science at SMIT, where I built a strong foundation in programming and web development.
          </p>

          <p className={`text-base md:text-lg ${isTheme ? "text-light" : "text-dark"}`}>
           I specialize in using modern technologies like <strong>React</strong>  and <strong>Next.js</strong> . With React, I build dynamic and responsive user interfaces that provide an excellent user experience. Next.js allows me to create powerful server-rendered applications that are fast and SEO-friendly. I am also proficient with various libraries and tools that complement these technologies, ensuring I can tackle a wide range of projects efficiently.
          </p>
        </motion.div>
         <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-2/3 lg:w-1/3 mx-auto sm:py-8"
      >
        <div className="bg-gray w-full rounded-xl hover:shadow-custom-hover">
          {/* Banner */}
          <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-t-xl">
            <Image
              className="w-full h-full object-cover"
              src="/Images/banner.webp"
              width={500}
              height={300}
              alt="Banner"
              placeholder="blur"
              blurDataURL={bannerBase64}
            />
          </div>

          {/* Profile */}
          <div className="p-4 pt-0 -mt-16 flex flex-col items-center text-center">
            <Image
              src="/Images/ubaid.jpeg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg"
              placeholder="blur"
              blurDataURL={profileLogo}
            />
            <h3 className="mt-4 text-xl md:text-2xl font-semibold text-light text-shadow-custom">
              Ubaid Ahmed
            </h3>
            <p className="text-light text-base md:text-lg">Web Developer</p>

            {/* Social Icons */}
            <ul className="mt-4 flex justify-center space-x-4">
              <li className="bg-dark p-2 rounded-full hover:bg-black transition">
                <a
                  href="https://github.com/ubaidahmed04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li>
              <li className="bg-dark p-2 rounded-full hover:bg-black transition">
                <a
                  href="https://www.linkedin.com/in/ubaidahmed04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-light-blue-600"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
              <li className="bg-dark p-2 rounded-full hover:bg-black transition">
                <a
                  href="https://www.instagram.com/ubaidahmed04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-pink-500"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default About;
