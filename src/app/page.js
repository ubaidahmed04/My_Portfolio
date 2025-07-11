"use client"
import Navigation from '../compnents/navigation'
import { ThemeProvider, Typography } from "@material-tailwind/react";
import Herosection from "@/compnents/Herosection";
import ContactSec from '@/compnents/Contact';
import { useRef, useEffect, useState } from 'react';
import { Cardlink } from '@/compnents/Card';
import ScrollxSection from '@/compnents/ScrollScreen';
import ProjectSlide from '@/compnents/projectSlide';
import About from '@/compnents/About';
import Experience from '@/compnents/Experience';
import Exp from '@/compnents/exp';
import Loader from '@/compnents/Loader';
import { useDispatch, useSelector } from 'react-redux';
import GithubContribute from '@/compnents/GithubContribute';
import { fadeIn, } from '../compnents/variants';
import { motion } from 'framer-motion';
import { ScrollProgress } from '@/compnents/scroll';
// import SplashCursor from '@/compnents/mouseGlow';
import { IconCloud } from '@/components/magicui/icon-cloud';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { IconCloudComponent } from '@/compnents/IconCloud';
export default function Home() {
  const isTheme = useSelector((state) => state.theme.isTheme);

  const [loader, setLoader] = useState(true)
  const HomeRef = useRef(null)
  const sectionRef = useRef(null)
  const projectRef = useRef(null)
  const aboutRef = useRef(null)
  function scrollTo(ref) {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 10)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={`${isTheme ? 'text-blue' : 'text-dark'}`}>
    <div className='max-w-screen-2xl  mx-auto '>

    <ThemeProvider >
      {
        loader ? <div className='h-[100vh] flex justify-center items-center bg-dark'>
          <Loader />
        </div> : (
          <>
          {/* <SplashCursor/> */}
          
          <main className={` ${isTheme ? 'bg-dark text-dark' : 'bg-light text-light'} `}>
            <ScrollProgress/>

            <Navigation props={scrollTo} sectionRef={sectionRef} HomeRef={HomeRef} projectRef={projectRef} aboutRef={aboutRef}  />
            <span className='flex-grow max-w--2xl min-h-screen w-full  mx-auto'>
            <Herosection />
            <span ref={aboutRef} >
            <About />
            </span>
            <section className="scroll-mt-24">
            <Exp />
            </section>

            <section className="pt-20 pb-28" ref={projectRef}  >
            <ProjectSlide />
            </section>
            {/* <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className='flex flex-wrap justify-center py-20'
            >
              <Cardlink path="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              <Cardlink path="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.091.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.024A9.563 9.563 0 0112 6.844c.853.004 1.71.115 2.51.338 1.909-1.293 2.748-1.024 2.748-1.024.545 1.378.202 2.397.1 2.65.64.698 1.028 1.59 1.028 2.682 0 3.843-2.337 4.687-4.566 4.935.359.31.678.923.678 1.858 0 1.34-.012 2.422-.012 2.75 0 .267.181.576.688.478C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              <Cardlink path="M27.892 3.501c-.531-.356-1.201-.358-1.735-.004l-5.379 3.357-8.946 5.536-3.902-3.318c-.79-.641-1.88-.725-2.747-.216l-3.354 2.01c-.659.396-.999 1.072-.98 1.823.02.75.398 1.442 1.046 1.843l3.599 2.197-3.599 2.197c-.648.401-1.026 1.093-1.046 1.843-.02.751.321 1.427.98 1.823l3.354 2.01c.868.509 1.957.425 2.747-.216l3.902-3.318 8.946 5.536 5.379 3.357c.534.355 1.204.352 1.735-.004.532-.355.849-.984.849-1.649v-22.7c0-.664-.317-1.293-.849-1.648zM20.778 25.45l-10.106-7.774-1.579-1.216 1.579-1.216 10.106-7.774v17.98z" />
              <Cardlink path="M23.546 10.73L13.27.454a1.551 1.551 0 00-2.192 0l-2.1 2.1 2.839 2.839a2.54 2.54 0 013.13 3.13l2.82 2.82a2.54 2.54 0 11-1.062 1.062l-2.69-2.69v6.19a2.54 2.54 0 11-1.5-.05v-6.14a2.54 2.54 0 01-1.2-3.25L7.665 4.59l-6.211 6.2a1.551 1.551 0 000 2.191l10.276 10.276a1.551 1.551 0 002.191 0L23.546 12.92a1.551 1.551 0 000-2.191z" />
              <Cardlink path="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </motion.div> */}
            
            <span>
              <GithubContribute />
            </span>
            <span ref={sectionRef}>
              <ContactSec />
            </span>
          <SmoothCursor/>
            </span>
           
          </main>
          </>
          )
      }

    </ThemeProvider>
    </div>
     <div className={` sm:px-10  sm:py-2 flex w-full flex-col items-centerpy-4 md:flex-row md:justify-between justify-center border-gray border-t text-white  bg-black`}>
     <Typography
       variant="small"
       className="mb-4 text-center myfont text-text-white-900 md:mb-0"
     >
       All
       Rights Reserved.
     </Typography>
     <div className="flex gap-4 text-text-white-900 justify-center">
       <Typography as="a" href="https://www.facebook.com/profile.php?id=100055489695083&mibextid=ZbWKwL" className="opacity-80 transition-opacity hover:opacity-100">
         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <path
             fillRule="evenodd"
             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
             clipRule="evenodd"
           />
         </svg>
       </Typography>
       <Typography as="a" href="https://www.instagram.com/ubaidahmed04" className="opacity-80 transition-opacity hover:opacity-100">
         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <path
             fillRule="evenodd"
             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
             clipRule="evenodd"
           />
         </svg>
       </Typography>
     
       <Typography as="a" href="https://github.com/ubaidahmed04" className="opacity-80 transition-opacity hover:opacity-100">
         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <path
             fillRule="evenodd"
             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
             clipRule="evenodd"
           />
         </svg>
       </Typography>
       <Typography as="a" href="" className="opacity-80 transition-opacity hover:opacity-100">
         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <path
             fillRule="evenodd"
             d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
             clipRule="evenodd"
           />
         </svg>
       </Typography>
     </div>
   </div>
   </div>
  );
}
