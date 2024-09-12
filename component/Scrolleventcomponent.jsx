import { useEffect,useState } from "react";

export const ScrollEventComponent = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    // Scroll event listener effect
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY); // Update scroll position on scroll
      };
  
      // Add the scroll event listener when component mounts
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  
    return (
      <div>
        <h1>Scroll Position: {scrollPosition}px</h1>
      </div>
    );
  };
  