import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark bg-grid-pattern text-slate-100 flex flex-col selection:bg-brand-yellow selection:text-black">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero />
        <SocialProof />
      </main>
    </div>
  );
}
