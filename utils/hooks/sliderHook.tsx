import { useEffect, useState } from "react";

const useSlides = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleWindowResize = () => {
    setSlideIndex(1);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    slideIndex,
  };
};

export { useSlides };
