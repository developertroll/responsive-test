"use client";

import { useState, useEffect } from "react";

export function useBreakPoints() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      const screenSize = window.innerWidth;
      setIsMobile(screenSize < 768);
      setIsTablet(screenSize >= 768 && screenSize < 1024);
      setIsDesktop(screenSize >= 1024);
    };

    window.addEventListener("resize", handleSize);

    handleSize();

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });
  return { isMobile, isTablet, isDesktop };
}
