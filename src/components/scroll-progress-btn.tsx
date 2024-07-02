'use client';
import { ArrowUp } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const ScrollProgressBtn = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const totalHeight =
      document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    setIsActive(window.scrollY > 50);
  };

  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <button
        ref={scrollRef}
        className={`overflow-hidden  bg-orange-400 rounded-full  right-0 bottom-32 mx-5 ${
          isActive
            ? 'fixed right-0 transition-[5s]'
            : 'relative right-[-999px] transition-[5s] '
        }`}
        onClick={handleProgressClick}
        title="Go To Top"
      >
        {/* list-style-type: disc; */}
        <div className="relative">
          <div className="absolute top-1/4 left-2">
            <ArrowUp className="size-5 text-white font-bold" />
          </div>
          <svg
            className="size-9  text-red-500 svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
            fill="red"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              stroke="#f97316"
              strokeWidth="4"
              fill="none"
              style={{
                strokeDasharray: '308.66px',
                strokeDashoffset: `${
                  308.66 - scrollProgress * 3.0866
                }px`,
              }}
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ScrollProgressBtn;
