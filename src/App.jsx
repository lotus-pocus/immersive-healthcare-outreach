import Hero from "./components/Hero";
import AnchorNav from "./components/AnchorNav";
import IntroSection from "./components/IntroSection";
import CinematicOriginSection from "./components/CinematicOriginSection";
import BTSSection from "./components/BTSSection";
import ExperienceSection from "./components/ExperienceSection";
import PullQuoteSection from "./components/PullQuoteSection"; 
import ImpactSection from "./components/ImpactSection";
import DeploymentSection from "./components/DeploymentSection";
import Header from "./components/Header";
import RelatedProjectsSection from "./components/RelatedProjectsSection";
import CTAFooter from "./components/CTAFooter";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AnchorNav />
      <IntroSection />
      <CinematicOriginSection />
      <BTSSection />
      <ExperienceSection />
      <PullQuoteSection />
      <ImpactSection />
      <DeploymentSection />
      <RelatedProjectsSection />
      <CTAFooter />
    </>
  );
}

export default App;