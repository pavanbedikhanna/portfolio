"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    // Update time every second
    const timer = setInterval(updateTime, 1000);

    // Set initial time
    updateTime();

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-[#242423]">
      <nav className="flex justify-between px-6 py-4">
        <div className="font-medium text-sm text-[#0feeb7]">
          <Link href="/">
            Pavan
          </Link>
        </div>
        <div className="flex items-center gap-4 border border-white rounded-full mx-auto">
          <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link 
            href="/experience" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Experience
          </Link>
          <Link 
            href="/projects" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
              <path d="M8 5h8m-8 4h8m-8 4h4" />
            </svg>
            Projects
          </Link>
          <Link 
            href="/skills" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16" viewBox="0 0 256 256" xmlSpace="preserve">
              <defs></defs>
              <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <circle cx="38.859" cy="33.749" r="10.739" style={{ stroke: 'none', strokeWidth: 1, fill: 'rgb(255,255,255)' }} />
                <path d="M 85.632 53.562 c -4.843 -11.952 -7.671 -21.152 -8.897 -28.954 c -0.008 -0.047 -0.019 -0.093 -0.032 -0.139 c -0.546 -1.774 -1.542 -3.393 -2.882 -4.681 l -10.241 -9.84 C 56.744 3.274 47.721 -0.254 38.146 0.014 C 19.934 0.527 5.037 15.178 4.232 33.37 C 3.868 41.57 6.396 49.66 11.35 56.148 c 1.084 1.421 1.657 3.051 1.657 4.715 v 23.585 c 0 3.062 2.491 5.552 5.552 5.552 h 33.099 c 3.062 0 5.552 -2.49 5.552 -5.552 V 81.54 h 11.867 c 4.341 0 7.873 -3.532 7.873 -7.873 V 57.806 h 5.637 c 1.03 0 1.974 -0.476 2.586 -1.305 C 85.786 55.672 85.964 54.631 85.632 53.562 z M 61.875 36.511 c 0 1.994 -1.616 3.611 -3.611 3.611 h -0.002 c -1.353 0 -2.588 0.758 -3.206 1.961 c -0.269 0.523 -0.563 1.033 -0.883 1.53 c -0.731 1.135 -0.767 2.582 -0.092 3.752 l 0.001 0.001 c 0.997 1.727 0.405 3.935 -1.322 4.932 l -4.783 2.761 c -1.727 0.997 -3.935 0.405 -4.932 -1.322 l -0.001 -0.001 c -0.675 -1.169 -1.946 -1.862 -3.295 -1.796 c -0.59 0.029 -1.18 0.028 -1.767 0 c -1.351 -0.066 -2.625 0.625 -3.301 1.796 l -0.001 0.002 c -0.997 1.727 -3.205 2.319 -4.932 1.322 l -4.783 -2.761 c -1.727 -0.997 -2.319 -3.205 -1.322 -4.932 c 0.686 -1.189 0.618 -2.65 -0.123 -3.806 c -0.148 -0.23 -0.291 -0.465 -0.429 -0.705 c -0.138 -0.24 -0.27 -0.481 -0.396 -0.724 c -0.631 -1.219 -1.862 -2.009 -3.235 -2.009 v 0 c -1.994 0 -3.611 -1.616 -3.611 -3.611 v -5.522 c 0 -1.994 1.616 -3.611 3.611 -3.611 h 0.002 c 1.353 0 2.588 -0.758 3.206 -1.961 c 0.269 -0.523 0.563 -1.033 0.883 -1.53 c 0.731 -1.135 0.767 -2.582 0.092 -3.752 l -0.001 -0.001 c -0.997 -1.727 -0.405 -3.935 1.322 -4.932 l 4.783 -2.761 c 1.727 -0.997 3.935 -0.405 4.932 1.322 l 0.001 0.001 c 0.675 1.169 1.946 1.862 3.295 1.796 c 0.59 -0.029 1.18 -0.028 1.767 0 c 1.351 0.066 2.625 -0.625 3.301 -1.796 l 0.001 -0.002 c 0.997 -1.727 3.205 -2.319 4.932 -1.322 l 4.783 2.761 c 1.727 0.997 2.319 3.205 1.322 4.932 v 0 c -0.686 1.189 -0.618 2.65 0.123 3.806 c 0.148 0.23 0.291 0.465 0.429 0.705 c 0.138 0.24 0.27 0.481 0.396 0.724 c 0.631 1.219 1.862 2.009 3.235 2.009 c 1.994 0 3.611 1.617 3.611 3.611 L 61.875 36.511 z" style={{ stroke: 'none', strokeWidth: 1, fill: 'rgb(255,255,255)' }} />
              </g>
            </svg>
            Skills
          </Link>
          <Link 
            href="/education" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education
          </Link>
        </div>
        {/* Display current time */}
        <div className="font-medium text-sm text-[#0feeb7]">
          {currentTime}
        </div>
      </nav>
    </header>
  );
}

export default Header;
