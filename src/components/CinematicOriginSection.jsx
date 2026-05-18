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
            The story began with a one-shot cinematic journey through a
            metaphorical world.
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
              The project began with a cinematic film created in Unreal Engine,
              designed as a single continuous journey through a fictional world.
            </p>

            <p>
              Using a realtime production workflow allowed environments, camera
              paths, framing and storytelling moments to evolve with far greater
              flexibility than traditional offline rendering pipelines.
            </p>

            <p>
              The strength of the film led the client to explore how the same
              world and narrative could be extended into VR, creating a
              companion headset experience designed to sit alongside the
              cinematic piece at congresses and conferences.
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
              Realtime production techniques allowed environments, camera paths
              and storytelling beats to evolve rapidly throughout development,
              supporting a more flexible cinematic workflow than traditional CG
              rendering pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}