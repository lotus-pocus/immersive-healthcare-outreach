import "../styles/hero.css";
import heroVideo from "../assets/video/Hero.mp4";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">HEALTHCARE IMMERSIVE EXPERIENCE</p>

        <h1>
          Cinematic real-time
          <br />
          storytelling for <br />
          healthcare experiences.
        </h1>

        <p className="hero-description">
          A cinematic realtime healthcare experience combining immersive
          storytelling, scientific metaphor and virtual production workflows.
        </p>

        <div className="hero-proof">
          <span>• EULAR Congress Launch</span>
          <span>• International Rollout</span>
          <span>• Multi-market Localisation</span>
          <span>• Standalone Quest Deployment</span>
        </div>
      </div>
    </section>
  );
}
