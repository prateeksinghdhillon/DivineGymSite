import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar max-w-screen-2xl w-full flex justify-center my-5 mx-auto px-4">
      {/* Main Navbar (Hides when menu is open) */}
      {!isOpen && (
        <motion.div
          className="bg-black text-white rounded-full max-w-screen-lg w-full p-4 flex justify-between items-center shadow-lg transition-opacity duration-500 ease-in-out"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
        >
          <div className="text-lg font-semibold italic px-4">'health</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-400">Optimize</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Testing</a>
            <a href="#" className="hover:text-gray-400">Our Process</a>
            <a href="#" className="hover:text-gray-400">Membership</a>
          </div>

          {/* Join Waitlist Button */}
          <button className="hidden md:block bg-white text-gray-800 px-4 py-2 rounded-full font-semibold">
            Join Waitlist
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden px-4">
            <span className="text-2xl">☰</span>
          </button>
        </motion.div>
      )}

      {/* Expanded Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-black text-white w-[90%] max-w-[400px] rounded-lg shadow-xl p-6 flex flex-col items-center z-50"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-2xl">
              ✖
            </button>

            {/* Logo */}
            <div className="text-xl font-semibold italic absolute top-6 left-6">'health</div>

            {/* Menu Items */}
            <div className="flex flex-col items-center space-y-6 text-lg font-medium mt-10 ">
              <a href="#" className="hover:text-gray-400">Optimize</a>
              <a href="#" className="hover:text-gray-400">Services</a>
              <a href="#" className="hover:text-gray-400">Testing</a>
              <a href="#" className="hover:text-gray-400">Our Process</a>
              <a href="#" className="hover:text-gray-400">Membership</a>
            </div>

            {/* Join Waitlist Button */}
            <button className="mt-8 w-full bg-white text-gray-800 py-3 rounded-full font-semibold text-lg">
              Join Waitlist
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
