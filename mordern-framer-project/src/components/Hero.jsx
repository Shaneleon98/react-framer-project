import React from 'react'

import heroImage from "../assets/hero-image.png"
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../../../../Downloads/modern-business-landing-page-react-tailwindcss-main/modern-business-landing-page-react-tailwindcss-main/src/utils/motion'
const Hero = () => {
  return (
    <section className='container mx-auto flex  flex-col  md:flex-row justify-between items-center  pt-44 pb-6 px-4 sm:px-6 lg:px-8'>

        {/* left column  */}
        <div className='w-full md:w-1/2 space-y-8'>
         {/* badge  */}
        <motion.div
          variants= {fadeIn('Right',0.2)}
             initial="hidden"
             whileInView="show"
            //  viewport={{once:true}}
        >
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
            <span className='text-blue-600 group-hover:scale-110 transition-transform'>
                ⭐
            </span>
            <span className='text-sm font-medium '>
                Jump start for your growth
            </span>
         </div>
        </motion.div>
          {/* heading  */}
          <motion.h1 
            variants= {textVariant(0.3)}
               initial="hidden"
               whileInView="show"
               viewport={{once:true}}
          className='text-4xl md:text-5xl lg:text-4xl font-bold leading-tight'>
            We boost the growth for
             <span className='text-blue-500 relative inline-block'>
                startup to fortune 500
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/40'></span>
                </span> companies 
                <span className='inline-block mt-2 animate-pulse cursor-pointer'>⏰</span>
          </motion.h1>
          <motion.p
           variants= {fadeIn('up',0.4)}
           initial="hidden"
           whileInView="show"
          //  viewport={{once:true}}
          className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accurate trends, leads, sales people training and conversations, tools and more, all within the same one billing.</motion.p>
      
          <motion.div 
            variants= {fadeIn('up',0.5)}
            initial="hidden"
            whileInView="show"
           //  viewport={{once:true}}
          className='flex gap-3 max-w-md'>
            <input type="email" placeholder='Email Address' className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all' />
            <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300'>→</button>
          </motion.div>
      
        </div>

        {/* right column  */}
        <motion.div 
          variants= {fadeIn('left',0.5)}
          initial="hidden"
          whileInView="show"
         //  viewport={{once:true}}
        className='w-full md:w-1/2 mt-16fr md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
            <img src={heroImage} alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
        </div>
        </motion.div>
    </section>
  )
}

export default Hero