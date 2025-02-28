import React from 'react'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { sections } from '../constants/constants';
import WaitlistModal from './WaitlistModal'; 

const Services = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };
  return (
    <div className=" max-w-8xl mx-auto text-white geist-font-700">
      {/* New Section Above */}
      <div className="flex flex-col md:flex-row items-end gap-8 bg-black p-10 rounded-lg">
        <button 
        onClick={openModal} 
        className="md:w-1/2 w-full relative px-8 py-3 my-3 text-gray-800 bg-yellow-200 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(255,255,150,0.6)] hover:shadow-[0_0_30px_rgba(255,255,150,0.9)] z-[1] cursor-pointer group transition-all">
        <div className="flex items-center justify-center transition-transform duration-300 ease-in-out">
        <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-20px]">Join waitlist</span> 
        <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[20px]">→</span>
        </div>
        </button>
        <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="text-white md:w-1/2">
          <h1 className="md:text-7xl text-4xl font-bold leading-tight">
            <span className="text-yellow-200">BEYOND GENERIC TRAINING</span> – YOUR <br />
            <span className="text-white">PERSONAL PATH TO PEAK OPTIMIZATION</span>
          </h1>
          <p className="mt-8 text-white md:text-2xl text-lg">
            Whether you're chasing your first sub-3 marathon or aiming to shatter power records,
            we've built the ultimate performance optimization system for endurance athletes.
          </p>
        </div>
      </div>

      {/* Accordion Section Below */}
      <div className="mt-20 md:mx-20 mx-5">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-gray-600">
            <div
              className="flex justify-between items-center p-6 cursor-pointer  transition"
              onClick={() => toggleSection(section.id)}
            >
              <h2 className="md:text-5xl text-2xl font-bold md:mx-20 ">{section.title}</h2>
              {openSection === section.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            {openSection === section.id && <div className="p-6">{section.content}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
