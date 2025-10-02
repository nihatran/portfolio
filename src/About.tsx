import { useState, useEffect, useRef } from "react";
import "./About.css";

export function About() {
  const scrollAnimRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

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

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

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
            className={`underline about ${isVisible ? "visible" : ""}`}
          ></div>
        </div>
        <div className="about-container">
          <div className={`card-container box ${isVisible ? "visible" : ""}`}>
            <div
              className={`card ${isFlipped ? "isFlipped" : null}`}
              onClick={handleClick}
            >
              <div className="card-front">
                <img
                  src="nipfp0.png"
                  alt="profile picture"
                  className="pfp"
                ></img>
              </div>
              <div className="card-back">
                <img
                  src="nipfp2.png"
                  alt="profile picture"
                  className="pfp"
                ></img>
              </div>
            </div>
          </div>
          <div className={`about-text box ${isVisible ? "visible" : ""}`}>
            <p>
              {" "}
              <p>
                Hello, my name is <span className="highlight">Ni</span>!
              </p>
              I'm a frontend developer that loves to bring thoughtful designs to
              life!
              <br /> With a focus on building intuitive and engaging user
              experiences for all, I'm always trying to take on challenges
              without fear of failure. Anything is possible with the right blend
              of creativity, technology, and passion.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
