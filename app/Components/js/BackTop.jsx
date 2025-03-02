'use client';
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState, useEffect } from 'react';

export default function BackTop(){
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

 return(
    <button onClick={scrollToTop} className={`back-to-top ${isVisible ? 'visible' : ''}`}>
       <FaAngleDoubleUp size={30} color="white" />
    </button>
 )
}