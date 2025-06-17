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
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastClickTime = useRef<number>(0);

  // Debug component mount
  useEffect(() => {
    console.log("CustomVideoPlayer mounted");
    console.log("Initial state - isReady:", isReady, "isLoading:", isLoading);
  }, []);

  // Initialize player when iframe loads
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      console.log("No iframe found");
      return;
    }

    console.log("Setting up iframe event listeners");
    console.log("Current state - isReady:", isReady, "isLoading:", isLoading);

    const handleLoad = () => {
      console.log("Iframe load event fired");
      // Wait a bit for the player to fully initialize
      setTimeout(() => {
        console.log("Vimeo player loaded, initializing...");
        setIsReady(true);
        setIsLoading(false); // Ensure loading is false

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

        // Add event listeners for player state
        iframe.contentWindow?.postMessage(
          '{"method":"addEventListener","value":"play"}',
          "https://player.vimeo.com"
        );
        iframe.contentWindow?.postMessage(
          '{"method":"addEventListener","value":"pause"}',
          "https://player.vimeo.com"
        );
      }, 1000);
    };

    // Fallback initialization in case load event doesn't fire
    const fallbackInit = setTimeout(() => {
      if (!isReady) {
        console.log(
          "Fallback initialization - load event might not have fired"
        );
        setIsReady(true);
        setIsLoading(false);
      }
    }, 3000);

    // Listen for messages from Vimeo player
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com") return;

      try {
        const data = JSON.parse(event.data);

        if (data.method === "getDuration") {
          setDuration(data.value);
          console.log("Duration received:", data.value);
        } else if (data.method === "getCurrentTime") {
          setProgress(data.value);
        } else if (data.event === "play") {
          console.log("Vimeo play event received - syncing state");
          setIsPlaying(true);
        } else if (data.event === "pause") {
          console.log("Vimeo pause event received - syncing state");
          setIsPlaying(false);
        }
      } catch (error) {
        // Ignore parsing errors
        console.warn("Error parsing Vimeo message:", error);
      }
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("message", handleMessage);

    // Check if iframe src is set and trigger load manually if needed
    if (iframe.src) {
      console.log("Iframe src is set, will wait for load event or fallback");
    }

    // Immediate check - sometimes the load event doesn't fire reliably
    const immediateCheck = setTimeout(() => {
      if (!isReady) {
        console.log("Immediate initialization - enabling controls");
        setIsReady(true);
        setIsLoading(false);
      }
    }, 1500);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("message", handleMessage);
      clearTimeout(fallbackInit);
      clearTimeout(immediateCheck);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [isReady]);

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

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const togglePlay = () => {
    // Debounce rapid clicks
    const now = Date.now();
    if (now - lastClickTime.current < 300) {
      console.log("Click debounced");
      return;
    }
    lastClickTime.current = now;

    if (!iframeRef.current || !isReady) {
      console.log("Player not ready yet");
      return;
    }

    if (isLoading) {
      console.log("Player is loading, ignoring click");
      return;
    }

    console.log("Toggle play clicked, current state:", isPlaying);
    setIsLoading(true);

    try {
      if (isPlaying) {
        console.log("Sending pause command");
        iframeRef.current.contentWindow?.postMessage(
          '{"method":"pause"}',
          "https://player.vimeo.com"
        );
        // Update state immediately for responsiveness
        setIsPlaying(false);
        setIsLoading(false);
      } else {
        console.log("Sending play command");
        // Ensure audio is enabled before playing
        iframeRef.current.contentWindow?.postMessage(
          `{"method":"setVolume","value":${isMuted ? 0 : volume}}`,
          "https://player.vimeo.com"
        );

        iframeRef.current?.contentWindow?.postMessage(
          '{"method":"play"}',
          "https://player.vimeo.com"
        );

        // Update state immediately for responsiveness
        setTimeout(() => {
          setIsPlaying(true);
          setIsLoading(false);

          // Get duration and current time when starting playback
          iframeRef.current?.contentWindow?.postMessage(
            '{"method":"getDuration"}',
            "https://player.vimeo.com"
          );
          iframeRef.current?.contentWindow?.postMessage(
            '{"method":"getCurrentTime"}',
            "https://player.vimeo.com"
          );
        }, 200);
      }
    } catch (error) {
      console.error("Error toggling play:", error);
      setIsLoading(false);
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

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && containerRef.current) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);

        // Lock to landscape on mobile devices
        if (/Mobi|Android/i.test(navigator.userAgent)) {
          try {
            // Use the screen orientation API if available
            if (
              "orientation" in screen &&
              "lock" in (screen.orientation as any)
            ) {
              await (screen.orientation as any).lock("landscape");
            }
          } catch (orientationError) {
            // Orientation lock might fail, but that's okay
            console.log("Orientation lock not supported or failed");
          }
        }
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreen(false);

        // Unlock orientation when exiting fullscreen
        if (/Mobi|Android/i.test(navigator.userAgent)) {
          try {
            // Use the screen orientation API if available
            if (
              "orientation" in screen &&
              "unlock" in (screen.orientation as any)
            ) {
              (screen.orientation as any).unlock();
            }
          } catch (orientationError) {
            // Orientation unlock might fail, but that's okay
            console.log("Orientation unlock not supported or failed");
          }
        }
      }
    } catch (error) {
      console.error("Fullscreen operation failed:", error);
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
    <div ref={containerRef} className="relative group cursor-pointer">
      <div
        className={`relative overflow-hidden bg-stone-100 ${
          isFullscreen
            ? "h-screen w-screen rounded-none border-0"
            : "pb-[56.25%] rounded-2xl border border-stone-300/30"
        }`}
      >
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1094189150?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=0&title=0&byline=0&portrait=0&badge=0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Large Play Button Overlay */}
        {!isPlaying && !isLoading && (
          <motion.button
            onClick={togglePlay}
            disabled={!isReady}
            className={`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm ${
              !isReady ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={!isReady ? {} : { scale: 1.02 }}
            whileTap={!isReady ? {} : { scale: 0.98 }}
          >
            <motion.div
              className={`w-16 h-16 md:w-20 md:h-20 backdrop-blur-md rounded-full border-2 flex items-center justify-center ${
                !isReady
                  ? "bg-white/5 border-white/10"
                  : "bg-white/10 border-white/30"
              }`}
              whileHover={
                !isReady
                  ? {}
                  : {
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }
              }
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <PlayIcon
                className={`w-6 h-6 md:w-8 md:h-8 ml-1 ${
                  !isReady ? "text-white/50" : "text-white"
                }`}
              />
            </motion.div>
          </motion.button>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/30 flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Video Controls - Below Video */}
      {!isFullscreen && (
        <div className="mt-4 bg-stone-100 rounded-xl border border-stone-300/30 p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div
              className="h-2 bg-stone-300 rounded-full cursor-pointer group"
              onClick={handleProgressClick}
            >
              <motion.div
                className="h-full bg-stone-600 rounded-full relative group-hover:bg-stone-700 transition-colors duration-200"
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
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-stone-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
            </div>
          </div>

          {/* Video Info */}
          <div className="mb-4">
            <div className="text-stone-800 text-sm font-mono tracking-wider font-medium mb-2">
              "SCREECH" Production - Engine operator and Virtual Art Department
              Lead
            </div>
            <div className="text-stone-600 text-xs font-mono">
              {duration > 0
                ? `${formatTime(progress)} / ${formatTime(duration)}`
                : `${formatTime(progress)} / --:--`}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlay}
              disabled={!isReady || isLoading}
              className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl text-white transition-colors duration-200 ${
                !isReady || isLoading
                  ? "bg-stone-400 cursor-not-allowed"
                  : "bg-stone-600 hover:bg-stone-700 cursor-pointer"
              }`}
              whileHover={!isReady || isLoading ? {} : { scale: 1.05 }}
              whileTap={!isReady || isLoading ? {} : { scale: 0.95 }}
            >
              {isLoading ? (
                <div className="w-6 h-6 md:w-7 md:h-7 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <PauseIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              ) : (
                <PlayIcon className="w-6 h-6 md:w-7 md:h-7 text-white ml-0.5" />
              )}
            </motion.button>

            {/* Volume Button */}
            <motion.button
              onClick={toggleMute}
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-stone-200 hover:bg-stone-300 rounded-xl transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="w-5 h-5 md:w-6 md:h-6 text-stone-700" />
              ) : (
                <SpeakerWaveIcon className="w-5 h-5 md:w-6 md:h-6 text-stone-700" />
              )}
            </motion.button>

            {/* Fullscreen Button */}
            <motion.button
              onClick={toggleFullscreen}
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-stone-200 hover:bg-stone-300 rounded-xl transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="w-5 h-5 md:w-6 md:h-6 text-stone-700" />
              ) : (
                <ArrowsPointingOutIcon className="w-5 h-5 md:w-6 md:h-6 text-stone-700" />
              )}
            </motion.button>
          </div>
        </div>
      )}
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
