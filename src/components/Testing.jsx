import React, { useState } from 'react';
import WaitlistModal from './WaitlistModal';
const Testing = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-black py-24 md:py-32">
      <div
        id='testing'
        className="container mx-auto px-4 max-w-screen-2xl">
        <div className="bg-white rounded-4xl border border-gray-800 p-2 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-gray-500 text-base md:text-lg uppercase">
              Unlock your full potential through advanced training protocols
            </h2>
            <h1 className="text-black text-5xl md:text-6xl font-bold mt-4 uppercase">
              Testing
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Baseline Assessment */}
            <div className="bg-white rounded-lg shadow-2xl p-10 md:p-12">
              <h3 className="text-black text-2xl md:text-3xl font-bold uppercase">
                Baseline Assessment
              </h3>
              <p className="text-gray-600 mt-6 text-lg">
                Establish your foundational fitness markers and training zones to optimize future progress
              </p>
              <p className="text-black text-3xl font-bold mt-8">$250 per test</p>
              <button
                onClick={openModal}
                className="bg-gray-200 text-black px-8 py-4 rounded-4xl mt-8 w-full text-lg cursor-pointer group transition-all hover:shadow-md">
                <div className="flex items-center justify-center transition-transform duration-300 ease-in-out">
                  <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px]">Buy now & schedule</span>
                  <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[10px]">→</span>
                </div>
              </button>
              <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
              <ul className="mt-8 text-gray-600 space-y-4 text-lg">
                <li>✓ Lactate Testing Protocol</li>
                <li>✓ Baseline Metabolic</li>
                <li>✓ Detailed Report & Recommendations</li>
              </ul>
            </div>
            {/* Performance Assessment */}
            <div className="bg-white rounded-lg shadow-2xl p-10 md:p-12">
              <h3 className="text-black text-2xl md:text-3xl font-bold uppercase">
                Performance Assessment
              </h3>
              <p className="text-gray-600 mt-6 text-lg">
                Advanced metabolic assessment to fine-tune training zones and maximize race-day performance
              </p>
              <p className="text-black text-3xl font-bold mt-8">$350 per test</p>
              <button
                onClick={openModal}
                className="bg-gray-200 text-black px-8 py-4 rounded-4xl mt-8 w-full text-lg cursor-pointer group transition-all hover:shadow-md">
                <div className="flex items-center justify-center transition-transform duration-300 ease-in-out">
                  <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px]">Buy now & schedule</span>
                  <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[10px]">→</span>
                </div>
              </button>
              <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
              <ul className="mt-8 text-gray-600 space-y-4 text-lg">
                <li>✓ VO2 Max Testing</li>
                <li>✓ Lactate Testing Protocol</li>
                <li>✓ Baseline Metabolic</li>
                <li>✓ Sweat Analysis</li>
                <li>✓ Detailed Report & Recommendations</li>
              </ul>
            </div>
            {/* Comprehensive Assessment */}
            <div className="bg-white rounded-lg shadow-2xl p-10 md:p-12">
              <h3 className="text-black text-2xl md:text-3xl font-bold uppercase">
                Comprehensive Assessment
              </h3>
              <p className="text-gray-600 mt-6 text-lg">
                Complete physiological profiling for elite athletes seeking the ultimate competitive advantage. Coming soon
              </p>
              <p className="text-black text-3xl font-bold mt-8">$900 per test</p>
              <button
                onClick={openModal}
                className="bg-black text-white px-8 py-4 rounded-4xl mt-8 w-full text-lg cursor-pointer group transition-all hover:shadow-md">
                <div className="flex items-center justify-center transition-transform duration-300 ease-in-out">
                  <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px]"> Contact us </span>
                  <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[10px]">→</span>
                </div>
              </button>
              <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
              <ul className="mt-8 text-gray-600 space-y-4 text-lg">
                <li>✓ VO2 Max Testing</li>
                <li>✓ Lactate Threshold Analysis</li>
                <li>✓ Body Composition Scan</li>
                <li>✓ Movement Assessment</li>
                <li>✓ Sweat Analysis</li>
                <li>✓ Detailed Report & Recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;