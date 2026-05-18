import "../styles/impact.css";

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-container">
        <div className="impact-heading">
          <p className="impact-label">IMPACT & SCALE</p>

          <h2>
            Presented across healthcare congress environments with international
            reach.
          </h2>
        </div>

        <div className="impact-grid">
          <div className="impact-stat impact-stat-large">
            <strong>18K+</strong>
            <span>
              Healthcare professionals attending the launch congress environment
            </span>
          </div>

          <div className="impact-stat">
            <strong>7</strong>
            <span>International markets and rollout territories</span>
          </div>

          <div className="impact-stat">
            <strong>Multiple</strong>
            <span>Congress and healthcare event deployments</span>
          </div>

          <div className="impact-stat">
            <strong>Realtime</strong>
            <span>
              Unreal Engine cinematic and immersive production workflow
            </span>
          </div>
        </div>

        <p className="impact-note">
          Figures are framed around congress environments and rollout context,
          rather than claiming individual headset usage.
        </p>
      </div>
    </section>
  );
}