import Container from "@/components/Container";
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/solid";

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const CustomVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let hideControlsTimer: NodeJS.Timeout;

    const resetHideTimer = () => {
      setShowControls(true);
      clearTimeout(hideControlsTimer);
      hideControlsTimer = setTimeout(() => {
        if (isPlaying) setShowControls(false);
      }, 3000);
    };

    const handleMouseMove = () => resetHideTimer();
    const handleMouseLeave = () => {
      if (isPlaying) setShowControls(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearTimeout(hideControlsTimer);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isPlaying]);

  // Initialize player when iframe loads
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      // Wait a bit for the player to fully initialize
      setTimeout(() => {
        setIsReady(true);
        // Set initial volume to ensure audio is enabled
        iframe.contentWindow?.postMessage(
          '{"method":"setVolume","value":1}',
          "https://player.vimeo.com"
        );

        // Get duration
        iframe.contentWindow?.postMessage(
          '{"method":"getDuration"}',
          "https://player.vimeo.com"
        );
      }, 1000);
    };

    // Listen for messages from Vimeo player
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com") return;

      try {
        const data = JSON.parse(event.data);

        if (data.method === "getDuration") {
          setDuration(data.value);
        } else if (data.method === "getCurrentTime") {
          setProgress(data.value);
        }
      } catch (error) {
        // Ignore parsing errors
      }
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("message", handleMessage);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("message", handleMessage);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, []);

  // Handle progress polling when playing
  useEffect(() => {
    if (isPlaying && isReady && iframeRef.current) {
      const updateProgress = () => {
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            '{"method":"getCurrentTime"}',
            "https://player.vimeo.com"
          );
        }
      };

      progressIntervalRef.current = setInterval(updateProgress, 500);

      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      };
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  }, [isPlaying, isReady]);

  const togglePlay = () => {
    if (iframeRef.current && isReady) {
      if (isPlaying) {
        iframeRef.current.contentWindow?.postMessage(
          '{"method":"pause"}',
          "https://player.vimeo.com"
        );
        setIsPlaying(false);
      } else {
        // Ensure audio is enabled before playing
        iframeRef.current.contentWindow?.postMessage(
          `{"method":"setVolume","value":${isMuted ? 0 : volume}}`,
          "https://player.vimeo.com"
        );
        setTimeout(() => {
          iframeRef.current?.contentWindow?.postMessage(
            '{"method":"play"}',
            "https://player.vimeo.com"
          );
          // Get duration and current time when starting playback
          setTimeout(() => {
            iframeRef.current?.contentWindow?.postMessage(
              '{"method":"getDuration"}',
              "https://player.vimeo.com"
            );
            iframeRef.current?.contentWindow?.postMessage(
              '{"method":"getCurrentTime"}',
              "https://player.vimeo.com"
            );
          }, 200);
        }, 100);
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (iframeRef.current && isReady) {
      const newMutedState = !isMuted;
      const volumeValue = newMutedState ? 0 : volume;
      iframeRef.current.contentWindow?.postMessage(
        `{"method":"setVolume","value":${volumeValue}}`,
        "https://player.vimeo.com"
      );
      setIsMuted(newMutedState);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!iframeRef.current || !isReady || duration === 0) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const seekTime = percentage * duration;

    iframeRef.current.contentWindow?.postMessage(
      `{"method":"setCurrentTime","value":${seekTime}}`,
      "https://player.vimeo.com"
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative group cursor-pointer"
      onMouseEnter={() => setShowControls(true)}
    >
      <div className="relative pb-[56.25%] rounded-2xl overflow-hidden bg-stone-100 border border-stone-300/30">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1094189150?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=0&title=0&byline=0&portrait=0&badge=0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Custom Controls Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between pointer-events-auto"
        >
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5 text-white" />
            ) : (
              <PlayIcon className="w-5 h-5 text-white ml-0.5" />
            )}
          </motion.button>

          {/* Center Controls */}
          <div className="flex-1 mx-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
              {/* Progress Bar */}
              <div className="mb-3">
                <div
                  className="h-1 bg-white/20 rounded-full cursor-pointer group"
                  onClick={handleProgressClick}
                >
                  <motion.div
                    className="h-full bg-white/60 rounded-full relative group-hover:bg-white/80 transition-colors duration-200"
                    style={{
                      width:
                        duration > 0 ? `${(progress / duration) * 100}%` : "0%",
                    }}
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        duration > 0 ? `${(progress / duration) * 100}%` : "0%",
                    }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2" />
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white text-sm font-mono tracking-wider">
                  "SCREECH" Production - Engine operator and Virtual Art
                  Department Lead
                </div>
                <div className="text-white/60 text-xs font-mono ml-4">
                  {duration > 0
                    ? `${formatTime(progress)} / ${formatTime(duration)}`
                    : `${formatTime(progress)} / --:--`}
                </div>
              </div>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Volume Button */}
            <motion.button
              onClick={toggleMute}
              className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="w-5 h-5 text-white" />
              ) : (
                <SpeakerWaveIcon className="w-5 h-5 text-white" />
              )}
            </motion.button>

            {/* Fullscreen Button */}
            <motion.button
              onClick={toggleFullscreen}
              className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="w-5 h-5 text-white" />
              ) : (
                <ArrowsPointingOutIcon className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Large Play Button Overlay */}
        {!isPlaying && (
          <motion.button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/30 flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <PlayIcon className="w-8 h-8 text-white ml-1" />
            </motion.div>
          </motion.button>
        )}
      </div>
    </div>
  );
};

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
                [ 3D Artist • VFX Professional • Technical Creative ]
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

      <div className="pt-12 pb-24 px-6 lg:px-12" id="demo">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 px-2 md:px-0"
        >
          <CustomVideoPlayer />
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

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
