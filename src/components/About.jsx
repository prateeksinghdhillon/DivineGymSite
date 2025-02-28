import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20">
      <div className="sm:my-10">
        <h1 className="geist-font-500 text-center font-bold text-4xl md:text-9xl text-amber-50 leading-tight">
          REDEFINE HUMAN
        </h1>
        <h1 className="geist-font-500 text-center font-bold text-4xl md:text-9xl text-amber-50">
          ABILITIES
        </h1>
        <p className="geist-font-300 text-center text-lg md:text-3xl mt-6 md:mt-10 text-amber-50 leading-relaxed">
          The world's most advanced performance optimization <br /> lab combining elite endurance training, longevity science,<br /> and personalized health analytics.
        </p>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button className="geist-font-500 px-6 py-2 md:px-8 md:py-3 bg-yellow-200 text-gray-800 rounded-full text-lg md:text-xl font-medium shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
          <div className="flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px]">
            <span>Join waitlist</span>
            <span className="ml-1 transition-all duration-300 ease-in-out group-hover:translate-x-[20px]">→</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default About;
