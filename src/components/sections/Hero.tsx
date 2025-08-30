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
    <div className="flex items-center !mt-4 m-4 md:m-12 !mb-0 bg-gradient-to-br  relative overflow-hidden md:p-8 rounded-2xl">
      {/* Animated background pattern */}

      <div className="flex md:flex-row flex-col gap-6 h-full w-full">
        <div className="md:w-2/3 w-full bg-gradient-to-br from-stone-50 to-stone-300 min-h-[40vh]  relative z-10 rounded-3xl flex py-12 p-4 md:p-12 flex-col justify-between ">
          {/* <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
         
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h1"
              wrapper="h1"
              className="mb-6 font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl"
              color="primary"
            >
              Hi, I&apos;m{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent"
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
              variant="small"
              mono
              className="mb-12 text-stone-400 tracking-widest uppercase text-sm md:text-base"
            >
              {personalInfo.subtitle}
            </Typography>
          </motion.div>

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
        </motion.div> */}

          <div>
            <Typography
              variant="h1"
              wrapper="h1"
              className="mb-6 font-bold tracking-tight "
              color="primary"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>{" "}
            </Typography>
            <Typography
              variant="small"
              mono
              className="mb-12 text-stone-500 tracking-widest uppercase text-sm md:text-base"
            >
              {personalInfo.subtitle}
            </Typography>

          </div>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              size="md"
              mono
              onClick={scrollToDemo}
              className="w-full sm:w-auto "
            >
              View Demo Reel
            </Button>
            <Button
              variant="primary"
              size="md"
              color="primary"
              mono
              onClick={scrollToDemo}
              className="w-full sm:w-auto "
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col min-h-[50vh] group">
          {/* <img src="/images/profile.jpeg" alt="Hero" width={1000} height={1000} /> */}
          <div className="flex gap-4 flex-1 transition-all duration-500  group-hover:flex-[0.6]">
            <div className="w-1/2 bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl transition-all duration-300 flex flex-col justify-center p-4">
              <Typography variant="small" className="text-stone-600 font-medium mb-2 text-sm">
                Experience
              </Typography>
              <Typography variant="h2" className="text-stone-800 font-semibold text-3xl">
                2+
              </Typography>
              <Typography variant="small" className="text-stone-500 text-xs mt-1">
                Years
              </Typography>
            </div>
            <div className="w-1/2 bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl transition-all duration-300 flex flex-col justify-center p-4">
              <Typography variant="small" className="text-stone-600 font-medium mb-2 text-sm">
                Major Films
              </Typography>
              <Typography variant="h2" className="text-stone-800 font-semibold text-3xl">
                6+
              </Typography>
              <Typography variant="small" className="text-stone-500 text-xs mt-1">
                Productions
              </Typography>
            </div>
          </div>
          <div className="mt-4 bg-gradient-to-br from-stone-300 to-stone-400 rounded-2xl transition-all duration-300 flex flex-col justify-center p-4 flex-1">
            <Typography variant="small" className="text-stone-600 font-medium mb-2 text-sm">
              VP Short Films
            </Typography>
            <Typography variant="h2" className="text-stone-800 font-semibold text-3xl">
              3
            </Typography>
            <Typography variant="small" className="text-stone-500 text-xs mt-1">
              Projects
            </Typography>
          </div>
          
          {/* CTA pill that appears below the pills on hover */}
          <div className="bg-gradient-to-br mt-4 md:mt-0 group-hover:mt-4 from-stone-400 to-stone-500 rounded-2xl p-4 md:p-0 group-hover:p-4 h-[100px] md:h-0 opacity-100 md:opacity-0 group-hover:h-[100px] cursor-pointer group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden" onClick={() => window.location.href = '/about'}>
            <div className="flex items-center justify-between h-full">
              <div>
                <Typography variant="small" className="text-stone-100 font-medium mb-1 text-sm">
                  Learn More
                </Typography>
                <Typography variant="h3" className="text-white font-semibold text-2xl">
                  About Me
                </Typography>
              </div>
              <Typography variant="small" className="text-stone-200 text-lg">
                →
              </Typography>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
