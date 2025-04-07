import React from 'react'
import { useSelector } from 'react-redux';
import { fadeIn, } from './variants';
import { motion } from 'framer-motion';

function Experience() {
  const isTheme = useSelector((state) => state.theme.isTheme);

  return (
    <motion.div 
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.9 }}
    className=' xl:py-[100px] pt-20  sm:px-14 px-6  py-20'>
      <span className='flex md:flex-row gap-4 flex-col'>
        <span className='xl:w-1/2'>
        <span className={`text-4xl md:text-6xl font-semibold font-agustina ${isTheme? 'text-light':'text-dark'} text-shadow-custom`}>
          Experience
          </span>

          <span className='flex  flex-col  gap-2'>
          <span className={`text-xl  ${isTheme? 'text-light':'text-dark'} pt-12 py-2 text-shadow-custom`}>
            Nubit Soft
          </span>
          <span className={`  ${isTheme? 'text-light':'text-dark'}  `}>
          <span className={`  ${isTheme? 'text-blue':'text-gray'}  `}>MernStack Developer:</span>The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </span>
          </span>
          <span className='flex  lg:flex-col flex-wrap sm:flex-row'>
           <span className={`text-xl  ${isTheme? 'text-light':'text-dark'} pt-12 py-2 text-shadow-custom`}>
            SMIT
          </span>
          <span className={`  ${isTheme? 'text-light':'text-dark'}  `}>
          <span className={`  ${isTheme? 'text-blue':'text-gray'} capitalize `}>Web & mobile Application developer:</span>The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </span>
          </span>
        </span>
        <span className='xl:w-1/2     lg:py-2'>
        <span className={`text-4xl md:text-6xl font-semibold font-agustina ${isTheme? 'text-light':'text-dark'} text-shadow-custom`}>
          Education 
          </span>

          <span className='flex  flex-col '>
          <span className={`text-xl  ${isTheme? 'text-light':'text-dark'} pt-12 py-2 text-shadow-custom`}>
           Graduation
          </span>
          <span className={`  ${isTheme? 'text-light':'text-dark'}  `}>
          <span className={`  ${isTheme? 'text-blue':'text-gray'}  `}>SMIU : </span>The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </span>
          </span>
          <span className='flex  flex-col '>
           <span className={`text-xl  ${isTheme? 'text-light':'text-dark'} pt-12 py-2 text-shadow-custom`}>
            Intermediate
          </span>
          <span className={`  ${isTheme? 'text-light':'text-dark'}  `}>
          <span className={`  ${isTheme? 'text-blue':'text-gray'}  `}>Adamjee Govt. Science College : </span>The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </span>
          </span>
          <span className='flex  flex-col'>
           <span className={`text-xl  ${isTheme? 'text-light':'text-dark'} pt-12 py-2 text-shadow-custom`}>
            Matriculation
          </span>
          <span className={`  ${isTheme? 'text-light':'text-dark'}  `}>
          <span className={`  ${isTheme? 'text-blue':'text-gray'}  `}>The Children Academy : </span>The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </span>
          </span>
        </span>
      </span>

    </motion.div>
  )
}

export default Experience