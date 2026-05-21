import "../styles/intro.css";

export default function IntroSection() {
  return (
    <section className="intro-section" id="overview">
      <div className="intro-container">
        <p className="intro-label">CASE STUDY</p>

        <h2 className="intro-heading">
          Designed for healthcare congress and event audiences.
        </h2>

        <div className="intro-copy">
          <p>
            Developed alongside Havas Life for CSL, the project evolved from a cinematic realtime film into an immersive healthcare platform supporting international congress rollout and multi-market localisation.
          </p>

          <p>
            Designed for healthcare congress environments, the experience combined cinematic storytelling, immersive technology and scientific narrative design.
          </p>
        </div>
      </div>
    </section>
  );
}