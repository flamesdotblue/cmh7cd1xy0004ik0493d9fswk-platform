import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const roles = [
  'AI & Full-Stack Developer',
  'Building Smart, Sustainable, and Scalable Tech',
];

function useTyping(texts, speed = 50, pause = 1200) {
  const [index, setIndex] = React.useState(0);
  const [sub, setSub] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = texts[index % texts.length];
    if (!deleting && sub.length < current.length) {
      const t = setTimeout(() => setSub(current.slice(0, sub.length + 1)), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && sub.length === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub.length > 0) {
      const t = setTimeout(() => setSub(current.slice(0, sub.length - 1)), speed / 1.8);
      return () => clearTimeout(t);
    }
    if (deleting && sub.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
  }, [texts, index, sub, deleting, speed, pause]);

  return sub;
}

function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/60 dark:via-black/40 dark:to-black/80" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">Atharva Shinde</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-amber-300 via-yellow-200 to-fuchsia-400 drop-shadow-[0_2px_12px_rgba(250,204,21,0.25)]">
            AI & Full-Stack Developer
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 min-h-[28px]">
            {typed}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="pointer inline-flex items-center gap-2 rounded-xl bg-white/90 text-black px-5 py-3 text-sm font-medium backdrop-blur hover:bg-white transition">
              View Projects
            </a>
            <a href="/resume.pdf" download className="pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-amber-400 to-fuchsia-500 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-amber-500/20 hover:shadow-fuchsia-500/30 transition">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
