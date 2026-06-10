import "../styles/related-projects.css";

import bioscienceImage from "../assets/images/AnatomicalLearning.jpg";
import trainingImage from "../assets/images/JLR_Unipart.png";

const projects = [
  {
    title: "VR Bioscience",
    client: "COVENTRY UNIVERSITY",
    description:
      "An immersive educational platform designed to support anatomical learning and scientific exploration through VR.",
    image: bioscienceImage,
    link: "https://www.gamoola.com/projects/vr-bioscience/",
  },
  {
    title: "VR Training Platform",
    client: "JLR + UNIPART",
    description:
      "Realtime VR training environments developed for industrial learning and operational workflows.",
    image: trainingImage,
    link: "https://www.gamoola.com/projects/virtual-reality-training/",
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

          <div className="related-project-featured">
            <div className="related-project-video">
              <iframe
                src="https://player.vimeo.com/video/1196386450"
                title="Adaptive immersive learning platform"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="related-project-content">
              <span className="related-project-type">
                CONNECTED IMMERSIVE PLATFORM
              </span>

              <h3>Adaptive immersive learning platform</h3>

              <p>
                A connected immersive learning prototype combining VR,
                WebGL and backend systems into a responsive multi-device
                healthcare training platform.
              </p>

              <a
                href="https://www.gamoola.com/lab_projects/adaptive-immersive-learning-platform/"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}