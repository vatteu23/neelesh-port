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
  const platform = getVideoPlatform(url);
  
  if (platform === "youtube") {
    const videoId = getYouTubeEmbedUrl(url).split("/embed/")[1]?.split("?")[0];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";
  }
  
  if (platform === "vimeo") {
    // Extract video ID from Vimeo URL
    let videoId = "";
    if (url.includes("vimeo.com/")) {
      videoId = url.split("vimeo.com/")[1]?.split("?")[0]?.split("/")[0] || "";
    } else if (url.includes("player.vimeo.com")) {
      videoId = url.split("player.vimeo.com/video/")[1]?.split("?")[0] || "";
    }
    
    // Use vumbnail.com for Vimeo thumbnails (free service)
    if (videoId) {
      return `https://vumbnail.com/${videoId}_large.jpg`;
    }
  }
  
  // For other platforms, return a default or extract from URL if possible
  return "";
};
