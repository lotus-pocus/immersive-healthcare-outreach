import "../styles/intro.css";

export default function IntroSection() {
  return (
    <section className="intro-section" id="overview">
      <div className="intro-container">
        <p className="intro-label">CASE STUDY</p>

        <h2 className="intro-heading">
          A healthcare storytelling platform spanning cinematic realtime film
          and immersive VR.
        </h2>

        <div className="intro-copy">
          <p>
            Created with Havas Life for CSL, the project explored how cinematic
            realtime storytelling could help communicate complex scientific
            narratives within healthcare environments.
          </p>

          <p>
            Combining metaphorical worldbuilding, atmospheric visual design and
            immersive technology, the experience was designed for congress and
            event audiences seeking a more engaging way to explore treatment
            narratives.
          </p>
        </div>
      </div>
    </section>
  );
}