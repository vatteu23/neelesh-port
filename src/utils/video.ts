/**
 * Get video platform from URL
 */
export const getVideoPlatform = (url: string): "youtube" | "vimeo" | "other" => {
  if (!url) return "other";
  
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return "youtube";
  }
  
  if (url.includes("vimeo.com") || url.includes("player.vimeo.com")) {
    return "vimeo";
  }
  
  return "other";
};

/**
 * Convert YouTube URL to embed format
 */
export const getYouTubeEmbedUrl = (url: string): string => {
  if (!url) return "";
  
  let videoId = "";
  
  if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
  }
  
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

/**
 * Convert Vimeo URL to embed format
 */
export const getVimeoEmbedUrl = (url: string): string => {
  if (!url) return "";
  
  // If already in embed format, return as-is
  if (url.includes("player.vimeo.com")) {
    return url;
  }
  
  // Extract video ID from various Vimeo URL formats
  let videoId = "";
  if (url.includes("vimeo.com/")) {
    videoId = url.split("vimeo.com/")[1]?.split("?")[0]?.split("/")[0] || "";
  }
  
  if (videoId) {
    return `https://player.vimeo.com/video/${videoId}?dnt=1&title=0&byline=0&portrait=0&badge=0`;
  }
  
  return url;
};

/**
 * Get embed URL for any video platform
 */
export const getEmbedUrl = (url: string): string => {
  if (!url) return "";

  // Return Vimeo URLs as-is if they're already in embed format
  if (url.includes("player.vimeo.com")) {
    return url;
  }

  // Convert Vimeo URLs to embed format
  if (url.includes("vimeo.com") && !url.includes("player.vimeo.com")) {
    return getVimeoEmbedUrl(url);
  }

  // Convert YouTube URLs to embed format
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return getYouTubeEmbedUrl(url);
  }

  return url;
};

/**
 * Get video thumbnail URL
 */
export const getVideoThumbnail = (url: string): string => {
  if (!url) return "";
  
  try {
    const platform = getVideoPlatform(url);
    
    if (platform === "youtube") {
      // Extract YouTube video ID from various URL formats
      let videoId = "";
      
      // Handle different YouTube URL formats
      if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("watch?v=")[1]?.split("&")[0] || "";
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
      } else if (url.includes("youtube.com/embed/")) {
        videoId = url.split("/embed/")[1]?.split("?")[0] || "";
      } else if (url.includes("youtube.com/shorts/")) {
        videoId = url.split("/shorts/")[1]?.split("?")[0] || "";
      }
      
      if (videoId) {
        // Try high quality first, with fallback to standard
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    }
    
    if (platform === "vimeo") {
      // Extract video ID from various Vimeo URL formats
      let videoId = "";
      
      if (url.includes("vimeo.com/video/")) {
        videoId = url.split("vimeo.com/video/")[1]?.split("?")[0] || "";
      } else if (url.includes("vimeo.com/") && !url.includes("player.vimeo.com")) {
        videoId = url.split("vimeo.com/")[1]?.split("?")[0]?.split("/")[0] || "";
      } else if (url.includes("player.vimeo.com/video/")) {
        videoId = url.split("player.vimeo.com/video/")[1]?.split("?")[0] || "";
      }
      
      if (videoId) {
        // Try multiple Vimeo thumbnail approaches
        // Option 1: vumbnail.com service (works for most videos)
        return `https://vumbnail.com/${videoId}.jpg`;
        
        // If that fails, the onError handler in the img tag will show a placeholder
      }
    }
  } catch (error) {
    console.warn("Error generating video thumbnail:", error);
  }
  
  // For other platforms or on error, return empty (will fallback to placeholder)
  return "";
};
