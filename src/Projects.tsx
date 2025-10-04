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
            title="Noted"
            desc="A browser-based notes app designed to quickly capture and organize simple thoughts before they’re forgotten."
            thumbnail="noted.PNG"
            tech={["HTML/CSS", "TypeScript", "React", "Next.js"]}
            link=""
          ></ProjectCard>
          <ProjectCard
            title="Chiikawa Pomodoro"
            desc="A cute chiikawa-themed pomodoro I made to encourage good study habits. 
            Allows the user to customize the times to best fit their work needs."
            thumbnail="chiikawapomodoro.PNG"
            tech={["HTML/CSS", "TypeScript", "React"]}
            link="https://chiikawa-pomodoro.vercel.app"
          ></ProjectCard>
          <ProjectCard
            title="tripleS Profiles"
            desc="A simple and responsive gallery of flippable cards I created to introduce people to the 24 members of tripleS, my favorite K-pop group."
            thumbnail="triplesprofiles.PNG"
            tech={["HTML/CSS", "JavaScript", "React"]}
            link="https://triples-profiles.vercel.app/"
          ></ProjectCard>
          <ProjectCard
            title="Pokédex"
            desc="An encyclopedia of Pokémon that fetches information from PokéAPI."
            thumbnail="pokedex.PNG"
            tech={["HTML/CSS", "JavaScript"]}
            link="https://nihatran.github.io/pokedex-v1/"
          ></ProjectCard>
          <ProjectCard
            title="Stock Analyzer"
            desc="A Windows Forms application that detects and displays
            Japanese candlestick patterns from stock data files provided by the user."
            thumbnail="stockanalyzer.png"
            tech={["C#", "Windows Forms"]}
            link="https://github.com/nihatran/Stock-Analyzer"
          ></ProjectCard>
        </div>
      </div>
    </>
  );
}
