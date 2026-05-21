import "../styles/cta-footer.css";

export default function CTAFooter() {
  return (
    <footer className="cta-footer" id="contact">
      <div className="cta-footer-container">
        <p className="cta-footer-label">LET’S TALK</p>

        <h2>
          Exploring immersive storytelling, congress experiences or VR
          deployment?
        </h2>

        <p className="cta-footer-copy">
          We collaborate with agencies, healthcare teams and brands to create
          immersive realtime experiences across VR, WebGL and interactive
          platforms.
        </p>

        <div className="cta-footer-links">
          <a href="mailto:hello@gamoola.com">hello@gamoola.com</a>

          <a
            href="https://www.gamoola.com"
            target="_blank"
            rel="noreferrer"
          >
            gamoola.com
          </a>
        </div>

        <div className="cta-footer-bottom">
          <span>VR • Realtime 3D • WebGL • Interactive deployment</span>
          <span>Gamoola © 2026</span>
        </div>
      </div>
    </footer>
  );
}