import { useState, useEffect, useRef } from "react";
import "./About.css";

export function About() {
  const scrollAnimRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    // if ref attached to DOM element exists then observe
    if (scrollAnimRef.current) {
      observer.observe(scrollAnimRef.current);
    }

    return () => {
      if (scrollAnimRef.current) {
        observer.unobserve(scrollAnimRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="about-main">
        <div className="heading-wrapper">
          <h2
            ref={scrollAnimRef}
            className={`fadein ${isVisible ? "visible" : ""}`}
          >
            About
          </h2>
          <div
            ref={scrollAnimRef}
            className={`underline about ${isVisible ? "visible" : ""}`}
          ></div>
        </div>
      </div>
    </>
  );
}
