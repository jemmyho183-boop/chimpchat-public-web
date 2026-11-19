import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark bg-grid-pattern text-slate-100 flex flex-col selection:bg-brand-yellow selection:text-black">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
