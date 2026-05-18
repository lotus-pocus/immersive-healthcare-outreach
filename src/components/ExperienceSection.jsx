import "../styles/experience.css";

import treesImg from "../assets/images/trees.jpg";
import vascularImg from "../assets/images/vascular3.jpg";
import congressUsageImg from "../assets/images/congress_usage.png";
import neutrophilImg from "../assets/images/neutrophil.jpg";

const moments = [
  {
    image: treesImg,
    title: "Visualising systemic imbalance",
    text: "The experience opens within a damaged landscape designed to represent inflammation and immune-system disruption through environmental metaphor and cinematic atmosphere.",
  },
  {
    image: vascularImg,
    title: "A journey into the vascular system",
    text: "Users descend into an organic internal world representing blood vessels and the complement system, transitioning from large-scale metaphor into microscopic scientific storytelling.",
  },
  {
    image: neutrophilImg,
    title: "From damage toward stability",
    text: "The experience concludes with a calmer visual state, reinforcing treatment impact through progression, contrast and environmental transformation.",
  },
  {
    image: congressUsageImg,
    title: "Immersive congress deployment",
    text: "Designed for healthcare congress environments, the experience combines cinematic storytelling with focused headset-based interaction.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="experience-label">THE VR EXPERIENCE</p>

          <h2>
            The cinematic narrative later evolved into a fully immersive VR
            experience.
          </h2>

          <p>
            The VR experience expanded the original cinematic world into an
            immersive spatial journey, allowing users to move through
            environments designed to communicate complex treatment narratives
            through presence, pacing and realtime visual storytelling.
          </p>
        </div>

        <div className="experience-video-frame">
          <iframe
            src="https://player.vimeo.com/video/1191967410?badge=0&autopause=0&player_id=0&app_id=58479"
            title="Immersive VR healthcare experience"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="experience-grid">
          {moments.map((moment) => (
            <article className="experience-card" key={moment.title}>
              <div className="experience-card-image">
                <img src={moment.image} alt={moment.title} />
              </div>

              <div className="experience-card-copy">
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}