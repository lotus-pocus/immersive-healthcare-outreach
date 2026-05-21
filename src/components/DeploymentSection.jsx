import "../styles/deployment.css";
import questImage from "../assets/images/MetaQuest_3.png";
import spainFlag from "../assets/images/spain-flag-medium.png";
import australiaFlag from "../assets/images/australia-flag-medium.png";
import ukFlag from "../assets/images/united-kingdom-flag-medium.png";
import italyFlag from "../assets/images/italy-flag-medium.png";
import switzerlandFlag from "../assets/images/switzerland-flag-medium.png";
import austriaFlag from "../assets/images/austria-flag-medium.png";
import brazilFlag from "../assets/images/brazil-flag-medium.png";

const highlights = [
  "Multi-market localisation",
  "International congress deployment",
  "Standalone Quest distribution",
  "Release-channel workflows",
  "Repeat event rollout",
  "Approval-aware production pipeline",
];

const markets = [
  { name: "Spain", flag: spainFlag },
  { name: "Australia", flag: australiaFlag },
  { name: "United Kingdom", flag: ukFlag },
  { name: "Italy", flag: italyFlag },
  { name: "Switzerland", flag: switzerlandFlag },
  { name: "Austria", flag: austriaFlag },
  { name: "Brazil", flag: brazilFlag },
];

const events = [
  "EULAR Congress - Barcelona, Spain",
  "ANZSN 2025 - Australia",
  "International Vasculitis Workshop - Melbourne, Australia",
  "UKIVAS 2025 - United Kingdom",
  "SIN 66th National Congress - Italy",
  "Swiss Rheumatology Congress - Switzerland",
  "ÖGR Jahrestagung 2025 - Austria",
  "Brazilian Portuguese localisation rollout",
];

export default function DeploymentSection() {
  return (
    <section className="deployment-section" id="deployment">
      <div className="deployment-container">
        <div className="deployment-intro">
          <p className="deployment-label">GLOBAL ROLLOUT</p>

          <h2>
            Designed for repeat deployment across international healthcare
            events.
          </h2>

          <p>
            Beyond the experience itself, The project continued to evolve through ongoing localisation, headset preparation and congress deployment support across multiple international markets.
          </p>
        </div>

        <div className="deployment-content">
          <div className="deployment-copy">
            <div className="deployment-copy-text">
              <h3>
                Once approved, future rollout became significantly simpler.
              </h3>

              <p>
                The application could be distributed through release-channel
                workflows using authorised email access, helping simplify
                headset installation and deployment across multiple territories
                and congress events.
              </p>

              <p>
                Today, both the cinematic film and immersive VR experience can
                sit side-by-side at congresses and healthcare events, extending
                the same scientific narrative across screen-based and
                headset-based formats.
              </p>
            </div>

            <div className="deployment-device">
              <img src={questImage} alt="Meta Quest 3 headset" />
            </div>
          </div>

          <div className="deployment-panel">
            <h3>Built for rollout</h3>

            <div className="deployment-highlights">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="markets-block">
          <p className="markets-label">ROLLED OUT ACROSS</p>

          <div className="markets-grid">
            {markets.map((market) => (
              <span key={market.name}>
                <img
                  src={market.flag}
                  alt={`${market.name} flag`}
                  className="market-flag"
                />

                {market.name}
              </span>
            ))}
          </div>
        </div>

        <div className="deployment-events">
          <p className="markets-label">SELECTED DEPLOYMENTS</p>

          <div className="deployment-events-grid">
            {events.map((event) => (
              <span key={event}>{event}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
