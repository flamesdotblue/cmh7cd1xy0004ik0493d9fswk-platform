import React, { useEffect, useState } from 'react';
import { Home, User, Briefcase, Folder, Wrench, Award, Mail, Moon, Sun } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#projects', label: 'Projects', icon: Folder },
  { href: '#skills', label: 'Skills', icon: Wrench },
  { href: '#achievements', label: 'Achievements', icon: Award },
  { href: '#contact', label: 'Contact', icon: Mail },
];

function Navbar() {
  const [active, setActive] = useState('#home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = stored ? stored === 'dark' : prefers;
    setIsDark(enableDark);
    document.documentElement.classList.toggle('dark', enableDark);
  }, []);

  useEffect(() => {
    const handler = () => {
      const sections = links.map(l => ({ id: l.href, el: document.querySelector(l.href) }));
      const top = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i].el;
        if (s && s.offsetTop <= top) { setActive(sections[i].id); break; }
      }
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%]">
      <nav className="backdrop-blur-xl bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl px-4 md:px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Atharva Shinde</a>
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${active===href ? 'bg-black/5 dark:bg-white/10' : ''}`}
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 rounded-xl p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1 md:hidden">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className={`text-center text-xs px-2 py-2 rounded-lg truncate ${active===href ? 'bg-black/5 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/10'}`}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
