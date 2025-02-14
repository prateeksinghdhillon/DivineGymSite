import React from 'react'

const About = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-11 md:my-10'>
      <div className='sm:my-10'>
        <h1 className='text-center font-bold md:text-9xl text-5xl'>REDEFINING HUMAN </h1>
        <h1 className='text-center font-bold md:text-9xl text-5xl md:mr-1 md:mx-auto mx-0'> PERFORMANCE</h1>
        <p className='text-center text-2xl md:my-10 '>The world's most advanced performance optimization lab combining elite endurance training, longevity science,
        and personalized health analytics.</p>
      </div>
      <div className="flex items-center justify-center ">
      <button className="relative px-6 py-3 my-3 text-gray-800 bg-yellow-200 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(255,255,150,0.6)] hover:shadow-[0_0_30px_rgba(255,255,150,0.9)] transition-all z-[-1]">
        Join waitlist →
      </button>
    </div>
    </div>
  )
}

export default About
