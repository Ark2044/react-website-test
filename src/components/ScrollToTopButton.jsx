import React, { useState, useEffect } from 'react';
import {
  Element,
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  return isVisible ? (
    <button onClick={scrollToTop} className="scroll-to-top-button">
      <i className="fa fa-arrow-up"></i>
    </button>
  ) : null;
}

export default ScrollToTopButton;