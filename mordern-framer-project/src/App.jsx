import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoCompany from './components/LogoCompany'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MoniterSection from './components/MoniterSection'
import PricingSection from './components/PricingSection'
import ServiceSection from './components/ServiceSection'
import TestimonialSection from './components/TestimonialSection'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ai-data-statistics-8158555-6516826.png" alt="" /> */}
    <main className='relative min-h-screen overflow-x-hidden'>
       <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
         <Navbar/>
         <Hero/>
         <LogoCompany/>
         <PurposeSection/>
         <FeaturesSection/>
         <ScheduleSection/>
         <MoniterSection/>
         <PricingSection/>
         <ServiceSection/>
         <TestimonialSection/>
         <NewsLetter/>
         <Footer/>
      </div>
    </main>
  
    </>
  
  )
}

export default App
