import { useState, useEffect, useRef } from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  desc: string;
  thumbnail: string;
  tech: Array<string>;
}

export function ProjectCard({
  title,
  desc,
  thumbnail,
  tech,
}: ProjectCardProps) {
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
    <>
      <div
        ref={scrollAnimRef}
        className={`project-card ${isVisible ? "visible" : ""}`}
      >
        <img src={thumbnail} className="project-thumbnail"></img>
        <div className="project-details">
          <h3>{title}</h3>
          <p>{desc}</p>
          <ul className="tech-stack">
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
