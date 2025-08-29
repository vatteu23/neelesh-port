/**
 * Get video platform from URL
 */
export const getVideoPlatform = (url: string): "youtube" | "vimeo" | "other" => {
  if (!url) return "other";
  
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return "youtube";
  }
  
  if (url.includes("vimeo.com")) {
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
  
  if (url.includes("player.vimeo.com")) {
    return url;
  }
  
  const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
  return videoId ? `https://player.vimeo.com/video/${videoId}?dnt=1&title=0&byline=0&portrait=0` : url;
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
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return videoId ? `https://player.vimeo.com/video/${videoId}?dnt=1&title=0&byline=0&portrait=0` : url;
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
    // For Vimeo, we'll use the video ID to construct a thumbnail URL
    // Note: Vimeo doesn't provide direct thumbnail URLs like YouTube, so we'll use a placeholder
    // In a real implementation, you might want to use Vimeo's API to get actual thumbnails
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return videoId ? `https://vumbnail.com/${videoId}_large.jpg` : "";
  }
  
  // For other platforms, return a default or extract from URL if possible
  return "";
};
