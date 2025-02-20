import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import girl from "/girl.webp"; 

const Counter = ({ from, to, suffix = "" }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ value: to, transition: { duration: 0, ease: "easeOut" } });
    }
  }, [inView, controls, to]);

  return (
    <motion.span
      ref={ref}
      initial={{ value: from }}
      animate={controls}
      className="text-4xl font-bold"
    >
      {to}
      {suffix}
    </motion.span>
  );
};

const Optimize = () => {
  return (
    <div className="geist-font-500 max-w-10xl container mx-auto px-4 my-20">
      <div className="flex flex-col md:flex-row">
        {/* Left Section with Animation */}
        <div className="md:w-1/2 mt-10 md:mt-20 space-y-4 order-2 md:order-1 bg-white p-15  rounded-2xl shadow-lg">
          <h2 className="text-5xl font-extrabold text-left">UNLOCK YOUR POTENTIAL</h2>
          <p className="text-gray-700 text-2xl">Your body is capable of extraordinary things</p>

          <div className="mt-6 text-2xl">
            <Counter from={0} to={3} suffix="X" />
            <p className="text-gray-700">Your recovery and sleep performance</p>
          </div>

          <div className="mt-6">
            <span className="text-5xl font-bold">↑</span>
            <Counter from={0} to={88} suffix="%" />
            <p className="text-gray-700 text-2xl md:text-3xl">Future proof your body</p>
          </div>

          <ul className="mt-6 md:text-3xl text-nowrap text-lg font-semibold">
            <li>→ TRAIN SMARTER</li>
            <li>→ RECOVER FASTER</li>
            <li>→ MAINTAIN PEAK PERFORMANCE</li>
            <li>→ FUTURE PROOF YOUR BODY</li>
          </ul>

          <h3 className="mt-6 text-gray-700 font-extrabold md:text-5xl text-3xl">THAT’S WHY</h3>
          <h2 className="md:text-5xl text-3xl
          font-extrabold">OPTIMIZATION MATTERS</h2>
        </div>

        {/* Right Section (Your Existing Image Code) */}
        <div className="md:w-1/2 md:ml-12 md:mt-20 mt-8 order-1">
          <img
            src={girl}
            className="rounded-2xl md:w-[800px] md:h-[1200px] w-[900px]  mx-auto -z-10"
            alt="Workout"
          />
        </div>
      </div>
    </div>
  );
};

export default Optimize;
