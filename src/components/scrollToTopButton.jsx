import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if the user has scrolled down past a certain point (e.g., 400px)
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Render the button only if showButton is true, using a fragment <> </>
  return (
    <>
      {showButton && (
        <KeyboardDoubleArrowUpIcon
          className="scroll-to-top-button"
          onClick={goToTop}
          style={{ height: 40, width: 40, position: 'fixed', bottom: '20px', right: '30px', cursor: 'pointer', zIndex: 1000 }} // Basic inline styling
        />
      )}
    </>
  );
};

export default ScrollToTopButton;
