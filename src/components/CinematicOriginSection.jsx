import "../styles/cinematic-origin.css";

import planetendImg from "../assets/images/planetend.jpg";
import lavaImg from "../assets/images/lava.jpg";
import btsImage from "../assets/images/bts2.jpg";

export default function CinematicOriginSection() {
  return (
    <section className="cinematic-section" id="origins">
      <div className="cinematic-container">
        <div className="cinematic-heading">
          <p className="cinematic-label">CINEMATIC ORIGINS</p>

          <h2>
            The experience began as a one-shot cinematic journey through an otherworldly landscape inspired by the human body.
          </h2>
        </div>

        <div className="cinematic-feature">
          <div className="cinematic-media-column">
            <div className="cinematic-video-frame">
              <iframe
                src="https://player.vimeo.com/video/1191967411?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Cinematic realtime healthcare film"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="cinematic-support-grid">
              <div className="cinematic-image-small">
                <img src={lavaImg} alt="Environmental metaphor" />
              </div>

              <div className="cinematic-image-small">
                <img src={planetendImg} alt="fictional world" />
              </div>
            </div>
          </div>

          <div className="cinematic-feature-copy">
            <p>
              Using a hybrid pipeline of traditional CG tools and Unreal Engine, the film evolved into a continuous cinematic journey through a stylised biological world.
            </p>

            <p>
              The strength of the cinematic piece led the client to expand the same world, visual language and narrative into VR, creating an immersive companion experience that maintained consistency across both formats.
            </p>
          </div>
        </div>

        <div className="cinematic-bts">
          <div className="cinematic-bts-image">
            <img src={btsImage} alt="Behind the scenes in Unreal Engine" />
          </div>

          <div className="cinematic-bts-copy">
            <p className="cinematic-bts-label">BEHIND THE SCENES</p>

            <h3>
              Directed inside Unreal Engine using realtime cinematic workflows.
            </h3>

            <p>
              Working within Unreal Engine allowed cinematic sequences, environments and pacing to be refined interactively throughout development, supporting a more collaborative and flexible creative process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}