import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Counter.css';

const Counter = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);

  useEffect(() => {
    const counter1 = counter1Ref.current;
    const counter2 = counter2Ref.current;
    const counter3 = counter3Ref.current;

    const animate = (counter, duration, delay = 0) => {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    animate(counter3, 5);
    animate(counter2, 6);
    animate(counter1, 2, 4);

    gsap.to(".digit", {
      top: "-150px",
      stagger: { amount: 0.25 },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="counter">
      <div className="counter-1 digit" ref={counter1Ref}>
        <div className="num">0</div>
        <div className="num num1offset1">1</div>
      </div>
      <div className="counter-2 digit" ref={counter2Ref}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, index) => (
          <div key={index} className={`num ${index === 1 ? 'num1offset2' : ''}`}>{num}</div>
        ))}
      </div>
      <div className="counter-3 digit" ref={counter3Ref}>
        {Array.from({ length: 21 }, (_, i) => i % 10).map((num, index) => (
          <div key={index} className="num">{num}</div>
        ))}
      </div>
    </div>
  );
};

export default Counter;