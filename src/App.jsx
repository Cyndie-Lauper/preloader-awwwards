import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Loader from './components/Loader/Loader.jsx';
import Counter from './components/Counter/Counter.jsx';
import './App.css';

const App = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    gsap.set(header, { opacity: 0, y: 0 });

    gsap.to(header, {
      opacity: 1,
      y: -80,
      duration: 0.5,
      delay: 10,
      ease: "power4.out",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="app">
      <div className="loading-screen">
        <Loader />
        <Counter />
      </div>
      <div className="website-content">
        <header className="header">
          <h1 ref={headerRef}>Preloader Animation</h1>
        </header>
      </div>
    </div>
  );
};

export default App;