import React, { useState } from "react";
import { motion } from "framer-motion";

interface VideoShowcaseProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoUrl = "https://player.vimeo.com/video/1108946824?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
  title,
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`pt-12 pb-24 lg:px-12 ${className}`} id="demo">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 px-2 md:px-0"
      >
        <div className="relative overflow-hidden bg-stone-100 pb-[56.25%] rounded-2xl border border-stone-300/30">
          {/* Loading indicator */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
              <div className="w-16 h-16 border-4 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
            </div>
          )}

          {/* Error state */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-600">
              <div className="text-center">
                <div className="text-4xl mb-4">⚠️</div>
                <p>Unable to load video</p>
              </div>
            </div>
          )}

          <iframe
            src={videoUrl}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title={title || "Portfolio Demo Reel"}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoShowcase;
