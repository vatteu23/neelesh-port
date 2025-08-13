// Video utility functions for portfolio

/**
 * Converts various YouTube URL formats to embed format
 */
export const getYouTubeEmbedUrl = (url: string): string => {
  if (!url) return "";
  
  let videoId: string | null = null;

  // Already an embed URL
  if (url.includes("youtube.com/embed")) {
    return url;
  } 
  // YouTube Shorts
  else if (url.includes("youtube.com/shorts")) {
    videoId = url.split("shorts/")[1]?.split("?")[0];
  } 
  // Shortened YouTube URL
  else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  } 
  // Standard YouTube watch URL
  else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v");
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

/**
 * Universal embed URL converter for video platforms
 */
export const getEmbedUrl = (url: string): string => {
  if (!url) return "";

  // Return Vimeo URLs as-is since they're already in embed format
  if (url.includes("player.vimeo.com")) {
    return url;
  }

  // Convert YouTube URLs to embed format
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return getYouTubeEmbedUrl(url);
  }

  return url;
};

/**
 * Extract video platform from URL
 */
export const getVideoPlatform = (url: string): "youtube" | "vimeo" | "other" => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return "youtube";
  }
  if (url.includes("vimeo.com")) {
    return "vimeo";
  }
  return "other";
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
  
  // For other platforms, return a default or extract from URL if possible
  return "";
};
