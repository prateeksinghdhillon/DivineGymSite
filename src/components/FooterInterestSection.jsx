import React from 'react';

const FooterInterestSection = () => {
  return (
    <div className=" text-white">
      {/* Hero section with cyclist image */}
      <div className="relative rounded-3xl overflow-hidden mx-4 my-8">
        <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
          {/* Interested heading with button */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h2 className="text-yellow-200 text-4xl md:text-5xl font-bold">INTERESTED?</h2>
            <a href="#waitlist" className="bg-yellow-200 text-gray-800 rounded-full py-2 px-5 inline-flex items-center justify-between w-48">
              <span>Join waitlist</span>
              <span>→</span>
            </a>
          </div>
          
          {/* That's just the start title */}
          <h3 className="text-4xl md:text-6xl font-bold mb-6">THAT'S JUST THE START.</h3>
          
          {/* Description text */}
          <p className="text-lg md:text-xl max-w-xl">
            Join elite athletes and health optimizers who trust 
            Enroute Labs for their performance and longevity goals.
          </p>
        </div>
        
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gray-900/50">
          <img 
            src="/rider2.png" 
            alt="Cyclist riding" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      {/* Footer section */}
      <div className="px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Copyright and social links */}
          <div className="mb-8 md:mb-0">
            <div className="mb-2">
              <p className="text-sm">© 2020—2024</p>
              <p className="text-sm">ENROUTE LABS.</p>
            </div>
            
            <div className="flex flex-col space-y-1 mt-4">
              <a href="#instagram" className="text-sm flex items-center">
                INSTAGRAM <span className="ml-1">→</span>
              </a>
              <a href="#facebook" className="text-sm flex items-center">
                FACEBOOK <span className="ml-1">→</span>
              </a>
              <a href="#spotify" className="text-sm flex items-center">
                SPOTIFY <span className="ml-1">→</span>
              </a>
            </div>
          </div>
          
          {/* Health logo and policy links */}
          <div className="flex flex-col items-end">
            <img src="/health.svg" alt="health" className="h-36 md:h-40 mb-4" />
            
            <div className="flex space-x-4 text-xs text-gray-400">
              <a href="#terms" className="hover:text-white">TERMS & CONDITIONS</a>
              <a href="#cookies" className="hover:text-white">COOKIES POLICY</a>
              <a href="#privacy" className="hover:text-white">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInterestSection;