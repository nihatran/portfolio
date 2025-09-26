import { useState, useEffect, useRef } from "react";
import "./Projects.css";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
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
        <div className="project-container">
          <ProjectCard
            title="Chiikawa Pomodoro"
            desc="A cute chiikawa-themed pomodoro I created to encourage good study habits. 
            Allows the user to customize the times to best fit their work needs."
            thumbnail=""
            tech={["HTML/CSS", "TypeScript", "React"]}
          ></ProjectCard>
          <ProjectCard
            title="Habit Tracker"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
            thumbnail=""
            tech={["HTML/CSS"]}
          ></ProjectCard>
          <ProjectCard
            title="Stock Analyzer"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
            thumbnail=""
            tech={["HTML/CSS"]}
          ></ProjectCard>
          <ProjectCard
            title="Pokedex"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
            thumbnail=""
            tech={["HTML/CSS"]}
          ></ProjectCard>
        </div>
      </div>
    </>
  );
}
