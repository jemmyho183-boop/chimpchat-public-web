import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import FeatureBreakdown from './components/FeatureBreakdown';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F6F6F4] text-[#241C15] flex flex-col selection:bg-[#FFE01B] selection:text-[#241C15]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <FeatureBreakdown />
        <HowItWorks />
      </main>
    </div>
  );
}
