import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

const SlideFromLeft = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (inView || shouldReduceMotion) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideFromLeft;
