import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaitlistModal from "./WaitlistModal";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Add this function to handle form submissions
  const handleSubmit = async (data) => {
    // Here you would handle the actual submission to your backend
    console.log('Form submitted with data:', data);
    // You can add your API call here
    return Promise.resolve(); // Mock successful submission
  };

  return (
    <nav className="navbar mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 w-full max-w-[100vw] flex justify-center my-5 z-20 geist-font-300">
      {!isOpen && (
        <motion.div
          className="bg-black/50 backdrop-blur-md text-white rounded-full max-w-screen-lg w-full p-4 flex justify-between items-center shadow-lg"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
        >
          <div className="text-xl md:text-2xl font-semibold italic px-4">
            <img src="/Divinelogo.png" alt="Health Logo" className="h-8 w-auto inline-block" />
          </div>


          <div className="hidden md:flex space-x-6 text-lg">
            <Link to="optimize" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Optimize
            </Link>
            <Link to="services" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Services
            </Link>
            <Link to="process" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Our Process
            </Link>
            <Link to="membership" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Membership
            </Link>
          </div>

          <button
            onClick={openModal}
            className="hidden md:block bg-white text-gray-800 px-4 py-2 rounded-full font-semibold">
            Join Waitlist
          </button>

          <button onClick={() => setIsOpen(true)} className="md:hidden px-4">
            <span className="text-2xl">☰</span>
          </button>
        </motion.div>
      )}

      {/* Move WaitlistModal outside both conditional renders */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black text-white w-[90%] max-w-[400px] rounded-lg shadow-xl p-6 flex flex-col items-center z-30"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-2xl">
              ✖
            </button>

            <div className="absolute top-6 left-6">
              <img src="/Divinelogo.png" alt="Health Logo" className="h-8 w-auto" />
            </div>


            <div  className="flex flex-col items-center space-y-6 text-lg font-medium mt-10">
              <Link to="optimize" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                Optimize
              </Link>
              <Link to="services" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                Services
              </Link>
              <Link to="process" onClick={() => setIsOpen(false)}  smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                Our Process
              </Link>
              <Link to="membership"onClick={() => setIsOpen(false)} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
                Membership
              </Link>
            </div>

            <button onClick={openModal} className="mt-8 w-full bg-white text-gray-800 py-3 rounded-full font-semibold text-lg">
              Join Waitlist
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;