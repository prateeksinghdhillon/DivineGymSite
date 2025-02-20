import React from 'react'

const About = () => {
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-25 md:my-30'>
      <div className='sm:my-10'>
        <h1 className='geist-font-700 text-center font-bold md:text-9xl text-5xl text-amber-50 '>REDEFINING HUMAN </h1>
        <h1 className='geist-font-700 text-center font-bold md:text-9xl text-5xl md:mr-1 mr-3 text-amber-50'>ABILITIES</h1>
        <p className='geist-font-500 text-center text-2xl md:my-10 mt-10  text-amber-50'>The world's most advanced performance optimization <br />lab combining elite endurance training, longevity science,<br />and personalized health analytics.
        </p>
      </div>
      <div className="flex items-center justify-center ">
      <button className="geist-font-500 relative px-8 py-3 my-3 mt-30 text-gray-800 bg-yellow-200 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(255,255,150,0.6)] hover:shadow-[0_0_30px_rgba(255,255,150,0.9)] transition-all z-[1] cursor-pointer">
        Join waitlist →
      </button>
    </div>
    </div>
    </>
  )
}

export default About
