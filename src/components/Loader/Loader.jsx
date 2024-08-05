import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.css';

const Loader = () => {

  useEffect(() => {

    gsap.from(".loader-1", {
      width: 0,
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
      width: 0,
      delay: 1.9,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      delay: 6,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader-2", {
      x: -75,
      y: 75,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader", {
      scale: 50,
      rotate: 45,
      y: 1250,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="loader">
      <div className="loader-1 bar"></div>
      <div className="loader-2 bar"></div>
    </div>
  );
};

export default Loader;