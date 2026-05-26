import "../styles/bts.css";

import studio01 from "../assets/images/bts/studio_01.jpg";
import studio02 from "../assets/images/bts/studio_02.jpg";

export default function BTSSection() {
  return (
    <section className="bts-section">
      <div className="bts-container">
        <div className="bts-intro-grid">
          <div className="bts-copy">
            <p className="bts-label">BEHIND THE SCENES</p>

            <h2>
              Directed inside Unreal Engine using realtime cinematic workflows.
            </h2>

            <p>
              Working within Unreal Engine allowed cinematic sequences,
              environments and pacing to be refined interactively throughout
              development, supporting a more collaborative and flexible creative
              process.
            </p>
          </div>

          <div className="bts-side-images">
            <img src={studio01} alt="Realtime cinematic production monitors" />

            <img src={studio02} alt="Unreal Engine cinematic workflow" />
          </div>
        </div>
      </div>
    </section>
  );
}