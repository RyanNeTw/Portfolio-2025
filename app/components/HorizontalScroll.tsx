import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactElement, useRef } from "react";

const HorizontalScroll: FC<{ children: ReactElement }> = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {children}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScroll;
