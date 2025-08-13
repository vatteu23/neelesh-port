import Container from "@/components/Container";
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <HeadWithMetas
        title="Neelesh Reddy | Unreal Engine Generalist"
        description="Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences."
      />

      <div className="flex items-center !mt-4 m-4 md:m-12 !mb-0 bg-gradient-to-br min-h-[80vh] from-stone-600 via-stone-700 to-stone-800 relative overflow-hidden md:p-8 rounded-2xl">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl w-full space-y-16 mx-auto py-20 px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Main heading with staggered animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
                  Neelesh Reddy
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
                >
                  &#128075;
                </motion.span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h3"
                fontWeight="light"
                color="light"
                className="mb-6 opacity-90 text-xl md:text-2xl lg:text-3xl"
              >
                An Unreal Engine Generalist
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="small"
                mono
                color="light"
                className="mb-12 opacity-70 tracking-widest uppercase text-sm md:text-base"
              >
                [ 3D Artist • VFX Professional • Technical artist • Engine
                operator ]
              </Typography>
            </motion.div>

            {/* Enhanced buttons with better animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            >
              <motion.a
                href="#demo"
                className="relative bg-white hover:bg-stone-50 px-8 py-4 rounded-lg text-stone-800 font-mono font-semibold w-full sm:w-auto min-w-[200px] text-center transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("demo");
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                <span className="relative z-10">View_Demo_Reel</span>
                <motion.div
                  className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-stone-800 rounded-full opacity-0 group-hover:opacity-100"
                  initial={false}
                  style={{ x: "-50%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="https://www.linkedin.com/in/neelesh-reddy-botta-3405291a6/"
                  target="_blank"
                  className="relative block bg-transparent hover:bg-white/10 px-8 py-4 rounded-lg text-white font-mono font-semibold border-2 border-stone-300/30 hover:border-stone-200/50 w-full sm:w-auto min-w-[200px] text-center transition-all duration-300 group"
                >
                  <span className="relative z-10">Get_In_Touch</span>
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    initial={false}
                    style={{ x: "-50%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating scroll indicator - positioned relative to hero container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs font-mono mb-2 tracking-wider">
              SCROLL
            </span>
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

      <div className="pt-12 pb-24 lg:px-12" id="demo">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 px-2 md:px-0"
        >
          <div
            className={`relative overflow-hidden bg-stone-100 pb-[56.25%] rounded-2xl border border-stone-300/30`}
          >
            <iframe
              src="https://player.vimeo.com/video/1108946824?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      <Container className="mb-24">
        <div className=" rounded-2xl  p-1 border-2 border-stone-300">
          <section className="p-12 text-stone-800">
            <div className="text-center mb-12">
              <Typography
                variant="small"
                mono
                className="mono-section-header mb-4"
              >
                // Skills Overview
              </Typography>
              {/* <Typography variant="h3" className="font-light tracking-tight">
                Skills spotlight
              </Typography> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="mb-4">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge  text-stone-600 mb-3"
                  >
                    01
                  </Typography>
                  <Typography
                    variant="h4"
                    className="font-semibold text-stone-800 mt-3"
                  >
                    Unreal Engine & Maya Proficiency
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed"
                >
                  Nearly 2 years of experience creating high-quality 3D assets
                  and animations.
                </Typography>
              </div>
              <div className="text-center space-y-4">
                <div className="mb-4">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-600 mb-3"
                  >
                    02
                  </Typography>
                  <Typography
                    variant="h4"
                    className="font-semibold text-stone-800 mt-3"
                  >
                    VFX Professional Experience
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed"
                >
                  Worked at{" "}
                  <Typography
                    variant="span"
                    mono
                    className="font-medium text-stone-700"
                  >
                    Matrix VFX
                  </Typography>{" "}
                  and{" "}
                  <Typography
                    variant="span"
                    mono
                    className="font-medium text-stone-700"
                  >
                    Spectra VFX
                  </Typography>
                  , delivering cutting-edge visuals.
                </Typography>
              </div>
              <div className="text-center space-y-4">
                <div className="mb-4">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-600 mb-3"
                  >
                    03
                  </Typography>
                  <Typography
                    variant="h4"
                    className="font-semibold text-stone-800 mt-3"
                  >
                    Expert in 3D & Visual Effects
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed"
                >
                  Strong skills in 3D modeling, texturing, lighting, rendering,
                  layouting and compositing.
                </Typography>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
