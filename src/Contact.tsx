import { useState, useEffect, useRef } from "react";
import "./Contact.css";

interface ContactProps {
  isDark: boolean | undefined;
}

export function Contact({ isDark }: ContactProps) {
  const scrollAnimRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
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
    <div className="contact-main">
      <div className="heading-wrapper">
        <h2
          ref={scrollAnimRef}
          className={`fadein ${isVisible ? "visible" : ""}`}
        >
          Contact
        </h2>
        <div
          className={`underline contact ${isVisible ? "visible" : ""}`}
        ></div>
      </div>
      <div className={`contact-container ${isVisible ? "visible" : ""}`}>
        <div>
          <p className="contact-heading">Let's get in touch!</p>
          <p className="contact-text">Feel free to reach out for any reason!</p>
        </div>
        <div className="contact-links">
          <p className="email">nihatran1@gmail.com</p>
          <div className="contact-links-icons">
            <a href="https://github.com/nihatran" target="_blank">
              <img
                src={isDark ? "github-mark-white.png" : "github-mark.png"}
                alt="GitHub logo"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/ni-tran/" target="_blank">
              <img
                src={isDark ? "InBug-White.png" : "InBug-Black.png"}
                alt="LinkedIn logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
