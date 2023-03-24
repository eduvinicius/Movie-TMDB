import React, { useState, useEffect } from 'react';

import './ScrollTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      className={`scroll-to-top-button${isVisible ? ' visible' : ''}`}
      onClick={handleClick}
    >
      ⇧
    </button>
  );
}

export default ScrollToTopButton;
