import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0a0a0a] dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Sections />
      <Footer />

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-tr from-amber-400 to-fuchsia-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-fuchsia-500/30 transition-all p-3"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
