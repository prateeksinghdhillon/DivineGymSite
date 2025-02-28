import React, {useState} from 'react';
import { membershipPlans } from '../constants/constants';
import WaitlistModal from './WaitlistModal';

const Membership = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal =() => setIsModalOpen(false);

  return (
    <div id='membership' className="text-white py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header text */}
        <p className="text-center text-[10px] uppercase tracking-wider mb-2">
          UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS
        </p>
        
        {/* Title */}
        <h1 className="text-center text-gray-300 text-4xl md:text-8xl font-bold mb-12 md:mb-16">
          MEMBERSHIPS
        </h1>
        
        {/* Membership cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {membershipPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-black">
              <p className="uppercase font-medium mb-4">{plan.title}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">per month</span>
              </div>
              
              {/* Updated Buy now button with animation */}
              <button 
                onClick={openModal}
                className={`w-full relative flex items-center justify-between rounded-full py-3 px-5 mb-10 transition-all group
                ${plan.title === "ELITE" ? "bg-black text-white hover:bg-black" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
              >
                <div className="flex items-center justify-between w-full transition-transform duration-300 ease-in-out">
                  <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-8px]">Buy now</span>
                  <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[8px]">→</span>
                </div>
              </button>
              <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Membership
