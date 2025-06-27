import { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to the top when the page loads
  }, []);

  return null;
}

export default ScrollToTop;
