import { useState } from "react";
import "./Header.css";

interface HeaderProps {
  isDark: boolean | undefined;
  setIsDark: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleColorMode = () => setIsDark(!isDark);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav-container">
          <a href="" className="site-title">
            Ni Tran
          </a>
          <button
            className={`toggle ${isOpen ? "open" : ""}`}
            onClick={toggleNavbar}
          >
            <img
              src={isDark ? "menuicondark.svg" : "menuiconlight.svg"}
              width="25"
            ></img>
          </button>
        </div>
        <ul className={`navlinks ${isOpen ? "open" : ""}`}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
          <button className="color-mode" onClick={handleColorMode}>
            <img src={isDark ? "darkmodeicon.svg" : "lightmodeicon.svg"}></img>
          </button>
        </ul>
      </nav>
    </div>
  );
}
