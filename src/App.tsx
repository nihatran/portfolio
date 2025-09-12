import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Header";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsVisible(true);
      setIsHighlighted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="app" data-theme={isDark ? "dark" : "light"}>
        <div id="home" className={isVisible ? "visible" : ""}>
          <Header isDark={isDark} setIsDark={setIsDark}></Header>
          <div className="main">
            <div className="main-content">
              <h1>Ni Tran</h1>
              <div className="highlight-wrapper">
                <p>Frontend Developer</p>
                <div
                  className={`highlight-bar ${isHighlighted ? "show" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
