import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import girl from "/girl.webp"; 
import shalabh from "/shalabh.png";

const Counter = ({ from, to, suffix = "", duration = 1.5 }) => {
  const [displayValue, setDisplayValue] = React.useState(from);
  const { ref, inView } = useInView({ 
    triggerOnce: false,
    threshold: 0.1 
  });
  
  useEffect(() => {
    let animationFrame;
    
    if (inView) {
      // Reset to starting value when coming into view
      setDisplayValue(from);
      
      let startTime;
      const startValue = from;
      const totalChange = to - startValue;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);
        
        // For numeric animation, use easeOutQuad timing function
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        
        if (suffix === "X") {
          // For the "X" counter, increment in steps (1X, 2X, 3X)
          const stepValue = Math.floor(startValue + easedProgress * totalChange);
          setDisplayValue(stepValue);
        } else {
          // For percentage, animate smoothly
          const newValue = Math.round(startValue + easedProgress * totalChange);
          setDisplayValue(newValue);
        }
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    } else {
      // When scrolling away, reset to the starting value to prepare for next view
      setDisplayValue(from);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, from, to, duration, suffix]);

  return (
    <span
      ref={ref}
      className="text-4xl font-bold"
    >
      {displayValue}
      {suffix}
    </span>
  );
};

const Optimize = () => {
  // Create a ref for the entire section
  const sectionRef = useRef(null);
  
  // Use inView to detect when section is visible
  const [imgRef, imgInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Use the section's own scroll progress for zoom effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create scale effect based on section's scroll progress
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],  // Input range: entering section to middle to leaving
    [1.0, 1.3, 1.0]  // Output range: start normal, zoom in more, then back to normal
  );

  return (
    <div 
      id="optimize"
      ref={sectionRef} 
      className="geist-font-500 max-w-10xl container mx-auto px-4 my-20"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Section (White Box with Proper Padding) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, threshold: 0.1 }}
          className="md:w-1/2 mt-10 md:mt-20 space-y-4 order-2 md:order-1 bg-white p-10 md:p-16 rounded-2xl shadow-lg"
        >
          <h2 className="text-5xl font-extrabold text-left">UNLOCK YOUR POTENTIAL</h2>
          <p className="text-gray-700 text-2xl">Your body is capable of extraordinary things</p>

          <div className="mt-6 text-2xl">
            <Counter from={1} to={3} suffix="X" duration={2} />
            <p className="text-gray-700">Your recovery and sleep performance</p>
          </div>

          <div className="mt-6 flex items-center space-x-2">
            <span className="text-5xl font-bold">↑</span>
            <Counter from={10} to={88} suffix="%" duration={2.5} />
            <p className="text-gray-700 text-2xl md:text-3xl">Future proof your body</p>
          </div>

          <ul className="mt-6 md:text-3xl text-wrap text-lg font-semibold space-y-2">
            <li>→ TRAIN SMARTER</li>
            <li>→ RECOVER FASTER</li>
            <li>→ MAINTAIN PEAK PERFORMANCE</li>
            <li>→ FUTURE PROOF YOUR BODY</li>
          </ul>

          <h3 className="mt-6 text-gray-700 font-extrabold md:text-5xl text-3xl">THAT'S WHY</h3>
          <h2 className="md:text-5xl text-3xl font-extrabold">OPTIMIZATION MATTERS</h2>
        </motion.div>

        {/* Right Section (Image with Zoom Effect) */}
        <div 
          ref={imgRef} 
          className="md:w-1/2 md:ml-12 md:mt-20 mt-8 order-1 rounded-2xl relative overflow-hidden"
          style={{
            height: "900px"
          }}
        >
          <motion.div 
            style={{ 
              scale,
              width: "100%",
              height: "100%",
              position: "relative"
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, threshold: 0.1 }}
            className="overflow-hidden  rounded-2xl"
          >
            <img 
              src={shalabh} 
              className="w-full h-full object-cover absolute top-0 left-0 rounded-2xl"
              alt="Workout"
              style={{
                objectPosition: "center"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Optimize;