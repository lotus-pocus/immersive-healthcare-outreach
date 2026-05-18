import "../styles/related-projects.css";

import anatomicalImg from "../assets/images/AnatomicalLearning.jpg";
import jlrImg from "../assets/images/JLR_Unipart.png";

const projects = [
  {
    image: anatomicalImg,
    title: "VR Bioscience",
    client: "Coventry University",
    description:
      "An immersive educational platform designed to support anatomical learning and scientific exploration through VR.",
    link: "https://www.gamoola.com/projects/vr-bioscience/",
  },
  {
    image: jlrImg,
    title: "VR Training Platform",
    client: "JLR + Unipart",
    description:
      "Realtime VR training environments developed for industrial learning and operational workflows.",
    link: "https://www.gamoola.com/projects/jlr-gamoola/",
  },
];

export default function RelatedProjectsSection() {
  return (
    <section className="related-section" id="related">
      <div className="related-container">
        <div className="related-heading">
          <p className="related-label">RELATED IMMERSIVE WORK</p>

          <h2>
            Extending immersive storytelling across education, training and
            realtime experience platforms.
          </h2>
        </div>

        <div className="related-grid">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="related-card"
            >
              <div className="related-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="related-content">
                <p className="related-client">{project.client}</p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="related-link">
                  View Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}