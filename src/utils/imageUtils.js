// Utility functions for handling images

/**
 * Check if an image URL is from an allowed domain
 * @param {string} url - The image URL to check
 * @param {string[]} allowedDomains - Array of allowed domains
 * @returns {boolean} - Whether the URL is allowed
 */
export const isAllowedImageDomain = (url, allowedDomains = []) => {
  if (!url || typeof url !== "string") return false;

  try {
    const urlObj = new URL(url);
    return allowedDomains.includes(urlObj.hostname);
  } catch {
    return false;
  }
};

/**
 * Get a safe image URL or fallback
 * @param {string} url - The original image URL
 * @param {string} fallback - Fallback URL if original is not allowed
 * @param {string[]} allowedDomains - Array of allowed domains
 * @returns {string} - Safe image URL
 */
export const getSafeImageUrl = (
  url,
  fallback = "https://via.placeholder.com/48x48?text=Image",
  allowedDomains = []
) => {
  if (!url) return fallback;

  // If no allowed domains specified, allow all
  if (allowedDomains.length === 0) return url;

  return isAllowedImageDomain(url, allowedDomains) ? url : fallback;
};

/**
 * Validate and clean image URL
 * @param {string} url - The image URL to validate
 * @returns {string|null} - Cleaned URL or null if invalid
 */
export const validateImageUrl = (url) => {
  if (!url || typeof url !== "string") return null;

  try {
    const urlObj = new URL(url);
    // Only allow HTTPS URLs
    if (urlObj.protocol !== "https:") return null;
    return url;
  } catch {
    return null;
  }
};


