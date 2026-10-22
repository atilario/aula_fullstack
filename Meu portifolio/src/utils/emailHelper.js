/**
 * Helper to open email compose draft seamlessly across Desktop and Mobile:
 * - Desktop: Opens Gmail Web Compose draft in a new tab (https://mail.google.com/mail/?view=cm&fs=1&to=...)
 * - Mobile: Uses mailto:... which natively opens the Gmail App / Mail App directly in the compose draft screen
 */

export const isMobileDevice = () => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent || navigator.vendor || window.opera
  );
};

export const getEmailUrl = (email = "atilalmmascarenhas@gmail.com") => {
  if (isMobileDevice()) {
    return `mailto:${email}`;
  }
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
};

export const openEmailCompose = (email = "atilalmmascarenhas@gmail.com", e) => {
  if (e) {
    e.preventDefault();
  }
  if (isMobileDevice()) {
    // On mobile, mailto: cleanly opens the Gmail app / Mail app directly into compose draft
    window.location.href = `mailto:${email}`;
  } else {
    // On desktop, web composer opens in a new tab with compose draft
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
};
