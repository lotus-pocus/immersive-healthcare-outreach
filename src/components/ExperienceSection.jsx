import "../styles/experience.css";

import droneDeployImg from "../assets/images/experience/droneDeploy.jpg";
import dioramaImg from "../assets/images/experience/diorama.jpg";
import ratingExperienceImg from "../assets/images/experience/ratingExperience.jpg";

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="experience-label">IMMERSIVE EXPERIENCE</p>

          <h2>Designed for healthcare congress and event audiences.</h2>

          <p>
            Developed alongside Havas Life for CSL, the experience evolved from
            a cinematic realtime film into an immersive healthcare platform
            supporting international congress rollout and multi-market
            localisation.
          </p>
          <div className="experience-video-frame">
            <iframe
              src="https://player.vimeo.com/video/1191967410?badge=0&autopause=0&player_id=0&app_id=58479"
              title="Immersive VR healthcare experience"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="experience-considerations">
            <article>
              <span>01</span>

              <h3>Designed around a 5–6 minute journey</h3>

              <p>
                The full user experience was planned to remain focused and
                efficient, including headset adjustment, onboarding and time
                spent inside the VR world.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Comfort-led movement design</h3>

              <p>
                Motion sickness was carefully considered throughout development.
                Using a contained spaceship-style vessel gave users a clear
                sense of place and movement, helping them feel immersed without
                relying on uncomfortable free-motion navigation.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Built for congress dwell time</h3>

              <p>
                The experience was shaped around the practical realities of a
                busy event environment, balancing narrative depth with a clear,
                manageable user journey.
              </p>
            </article>
          </div>
        </div>

        <div className="experience-grid">
          <article className="experience-card">
            <div className="experience-card-image">
              <img src={droneDeployImg} alt="Drone deployment sequence" />
            </div>

            <div className="experience-card-copy">
              <h3>Deploying into the vascular system</h3>

              <p>
                Users begin inside a contained space pod environment before
                deploying a drone into the vascular system, represented through
                a large-scale cinematic world and interactive transition into
                VR.
              </p>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-card-image">
              <img src={dioramaImg} alt="Interactive diorama sequence" />
            </div>

            <div className="experience-card-copy">
              <h3>Explaining the complement pathway</h3>

              <p>
                Inside the vascular environment, an interactive diorama sequence
                explains the role of the complement system, visualising how C5a
                binding to C5aR can amplify ANCA-induced inflammation.
              </p>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-card-image">
              <img
                src={ratingExperienceImg}
                alt="Healthcare congress attendee using VR experience"
              />
            </div>

            <div className="experience-card-copy">
              <h3>Returning to the command deck</h3>

              <p>
                The experience concludes back inside the space pod interface,
                allowing users to complete the journey, reflect on the treatment
                narrative and rate the experience before exiting VR.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
