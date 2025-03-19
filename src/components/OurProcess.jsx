import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slides } from '../constants/constants';

export default function OurProcess() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="process"
      className="w-full py-12 px-4 text-white relative max-w-full mx-auto">
      <h2 className="md:text-6xl text-4xl font-bold text-center">
        YOUR JOURNEY TO <span className="text-yellow-300 ">PEAK PERFORMANCE</span>
      </h2>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-4">
        <button onClick={prevSlide} className="text-white bg-black p-3 rounded-full">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="text-white bg-black p-3 rounded-full">
          <FaArrowRight />
        </button>
      </div>

      {/* Dots / Steps Indicator */}
      <div className="overflow-hidden mt-6">
        <div className="flex justify-center my-6 border border-gray-400 rounded-full py-1 px-1 bg-black shadow-md mx-auto max-w-3xl">
          {slides.map((slide, i) => {
            // On mobile (sm:hidden), only show current and next tab
            const shouldShowOnMobile = i === index || i === (index + 1) % slides.length;

            return (
              <button
                key={slide.id}
                className={`
            px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all
            ${i === index ? "bg-white text-gray-700 shadow-md" : "text-white"}
            ${shouldShowOnMobile ? "block" : "hidden sm:block"}
          `}
                onClick={() => setIndex(i)}
              >
                {`${i + 1} ${slide.title}`}
              </button>
            );
          })}
        </div>
      </div>


      {/* Carousel Container */}
      <div className="relative md:flex items-center justify-center max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{ transform: `translateX(-${index * 50}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`md:flex-shrink-0 w-1/2 sm:w-1/2 p-4 ${slide.bgColor} rounded-xl md:flex flex-row items-center text-black gap-6`}>
              {/* Text Section */}
              <div className="w-full flex flex-col">
                <h4 className="text-xs uppercase opacity-75">{slide.title}</h4>
                <h3 className="font-bold">{slide.heading}</h3>
              </div>
              {/* Image Section */}
              <div className="md:w-full w-30 py-5">
                <img src={slide.image} alt={slide.title} className="md:rounded-xl rounded-xl md:w-full md:h-60 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}