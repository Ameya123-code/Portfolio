import { Html, useProgress } from "@react-three/drei";
import { motion } from "motion/react";
import React from "react";

const Block = ({ delay = 0 }) => (
  <motion.div
    className="minecraft-block"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 0.9, repeat: Infinity, repeatType: "loop", ease: "linear", delay }}
  />
);

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="flex flex-col items-center gap-4">
          <Block delay={0} />
          <div className="text-center">
            <div className="text-xl font-semibold text-white">Loading</div>
            <div className="text-sm text-neutral-300">{Math.round(progress)}%</div>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
