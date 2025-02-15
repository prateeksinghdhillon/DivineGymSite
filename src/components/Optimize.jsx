import React from 'react'
import girl from '../../public/girl.webp'


const Optimize = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>Left</div>
      <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
      <img
              src={girl}
              className=" rounded-2xl md:w-[800px] md:h-[800px] w-[400px] h-[400x] mx-auto"
              alt=""
            />
      </div>
      </div>
    </div>
  )
}

export default Optimize
