import React from 'react'
import moniterImage from "../assets/monitor-card.webp"
import { HiArrowRight } from "react-icons/hi";

const MoniterSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
             
  
              {/* left  */}
              <div className='md:w-1/2 w-full'>
                   <p className='text-green-500 font-semibold'>MONITOR</p>
                   <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-3/5'>Introducing best mobile carousels</h2>
                   <p className='text-gray-600 mb-8'>
                   Maximize your time and enhance efficiency with our smart scheduling system. Effortlessly automate bookings, coordinate team availability, and provide outstanding customer service with streamlined calendar management Round all around the world
                   </p>
                   <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>Learn more about monitoring
                   <HiArrowRight className='w-5 h-4'/>
                   </a>
              </div>

               {/* right  */}
               <div className='md:w-1/2 w-full'>
                  <img src={moniterImage} alt="Stats Img" className='w-full h-auto' />
              </div>
          </div>
      </section>
  )
}

export default MoniterSection