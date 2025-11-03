//Add carousel component with framer motion to display same immage in loop

import { motion } from "framer-motion";
import fog from "../assets/fog2.ecb15114.webp";

const Carousel = () => {
  return (
    <motion.div
      className="absolute -z-50 flex h-full w-full flex-row overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex h-screen w-screen flex-row"
        animate={{
          x: [0, -2400],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        }}
      >
        <motion.img
          src={fog.src}
          alt="carousel"
          className="h-full w-full object-cover"
        />
        <motion.img
          src={fog.src}
          alt="carousel"
          className="h-full w-full object-cover"
        />
        <motion.img
          src={fog.src}
          alt="carousel"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
