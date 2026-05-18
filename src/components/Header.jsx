import "../styles/header.css";
import logo from "../assets/images/gamoola_logo_white.png";

export default function Header() {
  return (
    <header className="site-header">
      <a
        className="site-logo"
        href="https://www.gamoola.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Gamoola website"
      >
        <img src={logo} alt="Gamoola" />
      </a>

      <nav className="site-header-nav" aria-label="Main links">
        <a
          href="https://www.gamoola.com/projects/vr-bioscience/"
          target="_blank"
          rel="noreferrer"
        >
          VR Bioscience
        </a>

        <a
          href="https://www.gamoola.com/projects/jlr-gamoola/"
          target="_blank"
          rel="noreferrer"
        >
          VR Training
        </a>

        <a
          href="https://www.gamoola.com"
          target="_blank"
          rel="noreferrer"
        >
          Main Website
        </a>
      </nav>
    </header>
  );
}