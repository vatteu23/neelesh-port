import React from "react";
import { motion } from "framer-motion";
import Typography from "@/components/Typography";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/types";

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    const target = document.getElementById("demo");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex items-center !mt-4 m-4 md:m-12 !mb-0 bg-gradient-to-br min-h-[80vh] from-stone-600 via-stone-700 to-stone-800 relative overflow-hidden md:p-8 rounded-2xl">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/15 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl w-full space-y-16 mx-auto py-20 px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Main heading with enhanced animation */}
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h1"
              wrapper="h1"
              className="mb-6 font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl"
              color="light"
            >
              Hi, I&apos;m{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-r from-white to-stone-200 bg-clip-text text-transparent"
              >
                {personalInfo.name}
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200,
                }}
                className="inline-block origin-bottom cursor-pointer"
                whileHover={{
                  rotate: [0, 14, -8, 14, -4, 10, 0, 12, -6, 8, 0],
                  scale: [1, 1.1, 0.95, 1.05, 0.98, 1.02, 1],
                  y: [0, -2, 1, -1, 0.5, -1, 0],
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                    times: [
                      0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 0.9, 0.95, 0.98, 1,
                    ],
                  },
                }}
                whileTap={{ scale: 0.9 }}
                role="img"
                aria-label="Waving hand emoji"
              >
                👋
              </motion.span>
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h3"
              fontWeight="light"
              color="light"
              className="mb-6 opacity-90 text-xl md:text-2xl lg:text-3xl"
            >
              An {personalInfo.title}
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="small"
              mono
              color="light"
              className="mb-12 opacity-70 tracking-widest uppercase text-sm md:text-base"
            >
              {personalInfo.subtitle}
            </Typography>
          </motion.div>

          {/* Enhanced buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              variant="secondary"
              size="lg"
              mono
              onClick={scrollToDemo}
              className="w-full sm:w-auto min-w-[200px] bg-white hover:bg-stone-50 text-stone-800"
            >
              View_Demo_Reel
            </Button>

            <Button
              variant="outline"
              size="lg"
              mono
              href={personalInfo.linkedIn}
              external
              className="w-full sm:w-auto min-w-[200px] bg-transparent hover:bg-white/10 text-white border-stone-300/30 hover:border-stone-200/50"
            >
              Get_In_Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        role="button"
        aria-label="Scroll down indicator"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-xs font-mono mb-2 tracking-wider">SCROLL</span>
          <motion.div
            className="w-0.5 h-8 bg-white/40 rounded-full"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
