import React from 'react';

const Testing = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="bg-white rounded-4xl border border-gray-800 p-2 md:p-16 md:-m-20">
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
              <button className="bg-gray-200 text-black px-8 py-4 rounded-4xl mt-8 flex items-center justify-center w-full text-lg cursor-pointer">
                Buy now & schedule <span className="ml-2">→</span>
              </button>
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
              <button className="bg-gray-200 text-black px-8 py-4 rounded-4xl mt-8 flex items-center justify-center w-full text-lg cursor-pointer">
                Buy now & schedule <span className="ml-2">→</span>
              </button>
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
              <button className="bg-black text-white px-8 py-4 mt-8 flex items-center justify-center w-full text-lg cursor-pointer rounded-4xl">
                Contact us <span className="ml-2">→</span>
              </button>
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