import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TypewriterEffect = ({ text, className, onComplete = () => {} }) => {
  const characters = text.split("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Ensure onComplete is a function
    }, characters.length * 50); // Adjust the timeout to match animation duration
    return () => clearTimeout(timer);
  }, [characters.length, onComplete]);

  return (
    <div className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = () => {
  const [isH1Complete, setIsH1Complete] = React.useState(false);

  return (
    <div className="flex flex-col text-center my-5 px-4 sm:px-6 md:px-8 lg:px-10 max-h-20">
      <section className="bg-[url('/HeroBackground.svg')] bg-cover bg-center h-screen w-screen px-4">
        {/* Section for text with reserved space for h1 and h2 */}
        <section className="flex-col text-white w-full min-h-[400px]">
          {" "}
          {/* Adjust min-h based on your design */}
          <TypewriterEffect
            text="DO YOU WANT TO FIND A TEAM TO PROGRESS AND IMPROVE YOUR COMPUTER SKILLS?"
            className="text-xl sm:text-2xl md:text-5xl mt-24 mb-24"
            onComplete={() => setIsH1Complete(true)}
          />
          <AnimatePresence>
            {isH1Complete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <TypewriterEffect
                  text="HACKMATE IS THE BEST PLATFORM FOR BOOSTING YOUR PROFESSIONAL CAREER IN IT"
                  className="text-lg sm:text-xl md:text-2xl text-customWhite"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Section for buttons */}
        <motion.section
          className="flex justify-center space-x-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.button
            className="flex items-center justify-center gap-3 border-2 
      border-solid border-white rounded-lg text-customWhite px-4 py-2 w-32 text-sm
      transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }} // Slightly scale the button on hover
          >
            <span>ABOUT CREATORS</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5, transition: { duration: 0.5 } }} // Animates when the button is hovered
            >
              <FaArrowRight className="text-lg" />
            </motion.span>
          </motion.button>

          <motion.button
            className="flex items-center justify-center gap-3 border-2 
      border-solid border-white rounded-lg text-customWhite px-4 py-2 w-32 text-sm
      transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }} // Slightly scale the button on hover
          >
            <span>JOIN US</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5, transition: { duration: 0.5 } }} // Animates when the button is hovered
            >
              <FaArrowRight className="text-lg" />
            </motion.span>
          </motion.button>
        </motion.section>

        {/* Section for scrolling down */}
        <section className="flex justify-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="text-customWhite">Scroll</span>
            <FaArrowDown className="text-lg text-customWhite" />
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
