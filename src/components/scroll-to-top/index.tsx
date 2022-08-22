import React from 'react';
import './scroll-to-top.scss';

const ScrollToTop = () => {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll" onClick={onScrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m4 15l8-8l8 8"
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;
