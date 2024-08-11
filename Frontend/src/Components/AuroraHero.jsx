import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Card from "./Card";

// Define an array of colors for the aurora effect
const COLORS = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const AuroraHero = () => {
  // Initialize a motion value with the first color in the COLORS array
  const color = useMotionValue(COLORS[0]);

  // Create a dynamic backgroundImage using useMotionTemplate
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  // Use useEffect to animate the color value through the COLORS array
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <>
      {/* Render a motion section with the dynamic backgroundImage */}
      <motion.section
        style={{ backgroundImage }}
        className="relative grid min-h-screen place-content-center bg-gray-950 px-4 py-24 text-gray-200"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="flex flex-col items-center justify-center text-center w-1/2 mx-auto z-10"
        >
          <Card
            top={
              <div className="text-center">
                <img
                  src="/Images/HackMate_transparent-.png"
                  className="w-32 h-auto mx-auto mt-4"
                />
              </div>
            }
            middle={
              <p className="text-gray-700 text-lg">
                HackMate is your go-to platform for finding the perfect team
                members for your next hackathon. Whether you're a developer,
                designer, or entrepreneur, connect with like-minded individuals
                and collaborate on innovative projects to create something
                amazing.
              </p>
            }
            bottom={
              <div className="flex justify-center">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group flex w-fit items-center gap-1.5 rounded-full bg-black px-4 py-2 text-gray-50 transition-colors hover:bg-black/80"
                >
                  Get Started
                  <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
              </div>
            }
          />
        </motion.div>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};

export default AuroraHero;
