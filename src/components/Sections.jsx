import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Copy } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.5 } },
};

const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const projectsData = [
  {
    key: 'safecool',
    title: 'SafeCool',
    desc: 'Reinforcement Learning for Data Center Energy Optimization.',
    stack: ['Python', 'TensorFlow', 'RL'],
    img: '/images/safecool.svg',
    github: 'https://github.com/atharva-shinde',
    demo: '#',
    details: 'SafeCool leverages RL to minimize cooling energy while maintaining thermal safety margins in data centers. Integrates sensor feedback loops and simulation-trained policies.'
  },
  {
    key: 'emotipal',
    title: 'EmotiPal',
    desc: 'AI Wellness Companion (Emotion + Music Recommendation).',
    stack: ['Python', 'OpenCV', 'TensorFlow'],
    img: '/images/emotipal.svg',
    github: 'https://github.com/atharva-shinde',
    demo: '#',
    details: 'EmotiPal analyzes facial cues and audio to infer sentiment, recommending personalized playlists to improve mood over time.'
  },
  {
    key: 'partycam',
    title: 'PartyCam Web',
    desc: 'QR-based Shared Photo Booth App.',
    stack: ['React', 'Node', 'MongoDB'],
    img: '/images/partycam.svg',
    github: 'https://github.com/atharva-shinde',
    demo: '#',
    details: 'PartyCam enables guests to scan a QR and upload pictures to a shared album in real-time with moderation and auto-collage generation.'
  },
  {
    key: 'gitnova',
    title: 'GitNova',
    desc: 'GitHub Repository Trends Dashboard.',
    stack: ['Next.js', 'Tailwind', 'Charting'],
    img: '/images/gitnova.svg',
    github: 'https://github.com/atharva-shinde',
    demo: '#',
    details: 'GitNova visualizes star growth, issues velocity, and contributor activity to identify promising repositories and trends.'
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs backdrop-blur">
      {children}
    </span>
  );
}

function ProjectCard({ p, onOpen }) {
  return (
    <motion.div variants={item} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map(s => <Badge key={s}>{s}</Badge>)}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20">
            <Github size={16} /> GitHub
          </a>
          <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20">
            <ExternalLink size={16} /> Live
          </a>
          <button onClick={() => onOpen(p)} className="ml-auto text-sm rounded-lg px-3 py-2 bg-gradient-to-tr from-amber-400 to-fuchsia-500 text-white">Details</button>
        </div>
      </div>
    </motion.div>
  );
}

function Sections() {
  const [modal, setModal] = useState(null);

  const skills = useMemo(() => ([
    { cat: 'Frontend', list: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'] },
    { cat: 'Backend', list: ['Node.js', 'Express.js'] },
    { cat: 'Database', list: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { cat: 'AI/ML', list: ['Python', 'TensorFlow', 'OpenCV'] },
    { cat: 'Tools', list: ['Power BI', 'Git', 'VS Code'] },
  ]), []);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('sbjitatharvas@gmail.com'); } catch {}
  };

  return (
    <>
      {/* About */}
      <section id="about" className="relative py-24 px-6 md:px-10">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-amber-400/0 to-fuchsia-500/5" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1fr,2fr] gap-8"
        >
          <motion.div variants={item} className="flex flex-col items-center md:items-start">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-amber-300/30 to-fuchsia-500/30"></div>
            <h2 className="mt-6 text-2xl font-bold">About</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">B.Tech Computer Science student (2023–2026) at S.B. Jain Institute of Technology, Management & Research. Passionate about AI-driven innovation, data analytics, and full-stack web solutions. Leadership experience with IEEE and T&P teams; hands-on internships and a strong learning journey.</p>
          </motion.div>
          <motion.div variants={item} className="grid gap-4 content-start">
            <div className="rounded-2xl p-5 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
              <h3 className="font-semibold">Highlights</h3>
              <ul className="mt-3 grid gap-2 text-sm list-disc list-inside">
                <li>AI-based projects: SafeCool, EmotiPal, GitNova</li>
                <li>Leadership: IEEE Member & T&P Team Head</li>
                <li>Internship: Web Developer & Data Scientist Intern at LGPS Hybrid Energy Pvt. Ltd.</li>
                <li>Continuous learner: AI, Data, Full-Stack</li>
              </ul>
            </div>
            <div className="rounded-2xl p-5 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
              <h3 className="font-semibold">Contact</h3>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a href="mailto:sbjitatharvas@gmail.com" className="text-sm underline">sbjitatharvas@gmail.com</a>
                <button onClick={copyEmail} className="inline-flex items-center gap-2 text-xs rounded-lg px-3 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20"><Copy size={14}/> Copy Email</button>
                <a href="https://www.linkedin.com/in/atharva-shinde-7369b628a" target="_blank" rel="noreferrer" className="text-sm underline">LinkedIn</a>
                <a href="https://github.com/atharva-shinde" target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>
                <a href="https://portfolioatharva.framer.website/" target="_blank" rel="noreferrer" className="text-sm underline">Framer</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 md:px-10">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-5xl mx-auto">
          <motion.h2 variants={item} className="text-2xl font-bold">Experience</motion.h2>
          <div className="mt-8 relative">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-400 to-fuchsia-500" />
            <div className="space-y-10">
              <motion.div variants={item} className="relative md:w-1/2 md:ml-auto">
                <div className="absolute -left-2 md:-left-4 top-2 w-3 h-3 rounded-full bg-amber-400 border-2 border-white/80 dark:border-black/50" />
                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5">
                  <h3 className="font-semibold">Web Developer & Data Scientist Intern — LGPS Hybrid Energy Pvt. Ltd.</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Delivered data pipelines and web modules to support hybrid energy analytics.</p>
                </div>
              </motion.div>
              <motion.div variants={item} className="relative md:w-1/2">
                <div className="absolute -left-2 md:-left-4 top-2 w-3 h-3 rounded-full bg-fuchsia-500 border-2 border-white/80 dark:border-black/50" />
                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5">
                  <h3 className="font-semibold">B.Tech CSE (2023–2026) — S.B. Jain Institute of Technology, Management & Research</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Focused on AI, data analytics, and full-stack engineering.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 md:px-10">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-2xl font-bold">Projects</motion.h2>
          <motion.div variants={item} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map(p => (
              <ProjectCard key={p.key} p={p} onOpen={setModal} />
            ))}
          </motion.div>
        </motion.div>

        {modal && (
          <div className="fixed inset-0 z-50 grid place-items-center p-6 bg-black/60" onClick={() => setModal(null)}>
            <div className="max-w-lg w-full rounded-2xl border border-white/10 bg-[#0f0f10] text-white p-6" onClick={e => e.stopPropagation()}>
              <div className="flex items-start gap-4">
                <img src={modal.img} alt={modal.title} className="w-24 h-24 rounded-xl object-cover" />
                <div>
                  <h3 className="text-xl font-semibold">{modal.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{modal.desc}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90">{modal.details}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {modal.stack.map(s => <span key={s} className="text-xs px-3 py-1 rounded-lg bg-white/10">{s}</span>)}
              </div>
              <div className="mt-5 flex gap-2">
                <a href={modal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-white/10 hover:bg-white/20"><Github size={16}/> GitHub</a>
                <a href={modal.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-white/10 hover:bg-white/20"><ExternalLink size={16}/> Live</a>
                <button onClick={() => setModal(null)} className="ml-auto text-sm rounded-lg px-3 py-2 bg-gradient-to-tr from-amber-400 to-fuchsia-500 text-white">Close</button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-10">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-2xl font-bold">Skills</motion.h2>
          <motion.div variants={item} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(s => (
              <div key={s.cat} className="rounded-2xl p-5 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
                <h3 className="font-semibold">{s.cat}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.list.map(x => (
                    <span key={x} className="text-xs px-3 py-1 rounded-lg bg-gradient-to-tr from-amber-300/30 to-fuchsia-500/30 border border-white/10">{x}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-6 md:px-10">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-2xl font-bold">Achievements</motion.h2>
          <motion.div variants={item} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Infosys Certified: Basics of Python',
              'Power BI Certification',
              'IEEE Member & T&P Team Head',
            ].map(a => (
              <div key={a} className="rounded-2xl p-5 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
                <p className="text-sm">{a}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-10">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mx-auto">
          <motion.h2 variants={item} className="text-2xl font-bold">Contact</motion.h2>
          <motion.form variants={item} className="mt-8 grid gap-4 rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur" action="mailto:sbjitatharvas@gmail.com" method="post" encType="text/plain">
            <div className="grid md:grid-cols-2 gap-4">
              <input required name="name" placeholder="Your Name" className="w-full rounded-xl px-4 py-3 bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-amber-400" />
              <input required type="email" name="email" placeholder="Your Email" className="w-full rounded-xl px-4 py-3 bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <textarea required name="message" rows={5} placeholder="Message" className="w-full rounded-xl px-4 py-3 bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-amber-400" />
            <div className="flex items-center gap-3">
              <button type="submit" className="rounded-xl px-5 py-3 bg-gradient-to-tr from-amber-400 to-fuchsia-500 text-white">Send</button>
              <a href="/resume.pdf" className="text-sm underline">Resume</a>
              <a href="https://www.linkedin.com/in/atharva-shinde-7369b628a" className="text-sm underline" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/atharva-shinde" className="text-sm underline" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}

export default Sections;
