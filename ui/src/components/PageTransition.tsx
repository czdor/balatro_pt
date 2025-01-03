import { motion } from "framer-motion";
import React from "react";

const transitionAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transitionDuration = 2;

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={transitionAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: transitionDuration }}
    >
      {children}
    </motion.div>
  );
};
