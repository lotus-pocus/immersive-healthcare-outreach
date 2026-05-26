import "../styles/cinematic-origin.css";

import neutrophilImg from "../assets/images/cinematic/neutrophil.jpg";
import treesImg from "../assets/images/cinematic/trees.jpg";
import planetendImg from "../assets/images/cinematic/planetend.jpg";

export default function CinematicOriginSection() {
  return (
    <section className="cinematic-section" id="origins">
      <div className="cinematic-container">
        <div className="cinematic-heading">
          <p className="cinematic-label">CINEMATIC ORIGINS</p>

          <h2>
            The story began with a one-shot cinematic journey through a
            metaphorical world.
          </h2>
        </div>

        <div className="cinematic-feature">
          <div className="cinematic-video-frame">
            <iframe
              src="https://player.vimeo.com/video/1191967411?badge=0&autopause=0&player_id=0&app_id=58479"
              title="Cinematic realtime healthcare film"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="cinematic-support-grid">
            <article className="cinematic-card">
              <div className="cinematic-card-image">
                <img src={neutrophilImg} alt="Fictional biological world" />
              </div>
            </article>

            <article className="cinematic-card">
              <div className="cinematic-card-image">
                <img src={treesImg} alt="Environmental metaphor" />
              </div>
            </article>

            <article className="cinematic-card">
              <div className="cinematic-card-image">
                <img src={planetendImg} alt="Realtime cinematic sequence" />
              </div>
            </article>
          </div>

          <div className="cinematic-feature-copy">
            <p>
              Using a hybrid pipeline of traditional CG tools and Unreal Engine,
              the film evolved into a continuous cinematic journey through a
              stylised biological world.
            </p>

            <p>
              The strength of the cinematic piece led the client to expand the
              same world, visual language and narrative into VR, creating an
              immersive companion experience that maintained consistency across
              both formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}