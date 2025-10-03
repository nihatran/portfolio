import { useState, useEffect } from "react";
import "./App.css";
import useLocalStorage from "use-local-storage";
import { Header } from "./Header";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

function App() {
  const [isDark, setIsDark] = useLocalStorage<boolean | undefined>(
    "isDark",
    false
  );
  const [isVisible, setIsVisible] = useState(false);

  // fade in home elements
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {});

  return (
    <>
      <div className="app" data-theme={isDark ? "dark" : "light"}>
        <section id="home" className={isVisible ? "visible" : ""}>
          <Header isDark={isDark} setIsDark={setIsDark}></Header>
          <div className="home-main">
            <div className="home-main-content">
              <h1>Ni Tran</h1>
              <div className="highlight-wrapper">
                <p className="title">Frontend Developer</p>
                <div
                  className={`highlight-bar ${isVisible ? "visible" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <About></About>
        </section>
        <section id="projects">
          <Projects></Projects>
        </section>
        <section id="contact">
          <Contact isDark={isDark}></Contact>
        </section>
      </div>
    </>
  );
}

export default App;
