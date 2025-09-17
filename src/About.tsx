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
          setIsVisible(true);
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
        <div className="profile-grid-wrapper">
          <div className="profile-grid">
            <div className={`item profile-1 ${isVisible ? "visible" : ""}`}>
              <div className="profile-flex">
                <div className="card-container">
                  <div
                    className={`card ${isFlipped ? "isFlipped" : null}`}
                    onClick={handleClick}
                  >
                    <div className="card-front">
                      <img
                        src="nipfp.jpg"
                        alt="profile picture"
                        className="pfp"
                      ></img>
                    </div>
                    <div className="card-back">
                      <img
                        src="nipfp2.jpg"
                        alt="profile picture"
                        className="pfp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <p>Ni Tran</p>
                  <ul className="info-details">
                    <li>Frontend Developer</li>
                    <li>Artist</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`item desc-2 ${isVisible ? "visible" : ""}`}>
              <div className="desc-container">
                <p>Hello!</p>
                <p>I'm Ni and I love to bring thoughtful designs to life!</p>
                <p>
                  I'm always trying to learn more and to take on challenges
                  without fear of failure.
                </p>
                <p>
                  My focus is on building intuitive and engaging <br />
                  user experiences for all.
                </p>
                <p>
                  With the right blend of creativity and technology, <br />
                  anything is possible.
                </p>
              </div>
            </div>
            <div className={`item music-3 ${isVisible ? "visible" : ""}`}>
              <iframe
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/track/3VPBPBZKxQu3bqeuzz8gRm?utm_source=generator"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className={`item skills-4 ${isVisible ? "visible" : ""}`}>
              <ul className="skills">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>SQL</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
