import React from 'react';

function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <p>© {new Date().getFullYear()} Atharva Shinde. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="underline">Back to top</a>
          <a href="/resume.pdf" className="underline">Resume</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
