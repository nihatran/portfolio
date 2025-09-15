import { useState, useEffect, useRef } from "react";
import "./Projects.css";

export function Projects() {
  const scrollAnimRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // trigger anim
        }
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
      <div className="projects-main">
        <div className="heading-wrapper">
          <h2
            ref={scrollAnimRef}
            className={`fadein ${isVisible ? "visible" : ""}`}
          >
            Projects
          </h2>
          <div
            ref={scrollAnimRef}
            className={`underline projects ${isVisible ? "visible" : ""}`}
          ></div>
        </div>
      </div>
    </>
  );
}
