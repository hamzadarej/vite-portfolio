import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};
