import { motion } from "framer-motion";
import { GraduationCap, Code, Cpu, ShieldCheck, Compass, Lightbulb, Sparkles, BookOpen } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building responsive, high-performance web applications using React, Tailwind CSS, JavaScript/ES6+, and Node.js REST APIs with a focus on speed and usability.",
    },
    {
      icon: Cpu,
      title: "Embedded Systems & IoT",
      description:
        "Bridging digital software with physical hardware through Arduino, C/C++, sensor arrays, and microcontroller automation for real-world applications.",
    },
    {
      icon: Lightbulb,
      title: "Engineering Problem Solver",
      description:
        "Passionate about breaking down complex algorithmic challenges, optimizing data structures, and writing clean, scalable, and maintainable code.",
    },
    {
      icon: ShieldCheck,
      title: "Internship & Team Ready",
      description:
        "Equipped with strong version control (Git/GitHub), collaborative mindset, and rapid ability to learn and adapt to new tech stacks and production environments.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-gradient-crimson">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A Computer Science undergraduate blending software engineering rigor with practical embedded systems exploration.
          </p>
        </div>

        {/* 2-Column Content: Bio Narrative & Education Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Driven by Innovation &amp; Practical Engineering
                </h3>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate Computer Science student dedicated to engineering robust software solutions and exploring embedded hardware. From interactive React web apps to Arduino-powered sensor networks, I thrive on turning creative ideas into working prototypes.
                </p>
                <p>
                  My development philosophy centers around <strong className="text-white">clarity, modular architecture, and responsiveness</strong>. I love writing readable, maintainable code and using modern tools like Vite, Tailwind CSS, and Framer Motion to craft fluid, delightful user experiences.
                </p>
                <p>
                  I am actively seeking <strong className="text-rose-400">internship opportunities</strong> where I can collaborate with seasoned engineers, contribute to production codebases, and accelerate my growth as a versatile software engineer.
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-center">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-xl font-bold text-white">B.E. CSE</span>
                <span className="text-xs text-zinc-400">Degree</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-xl font-bold text-rose-400">100%</span>
                <span className="text-xs text-zinc-400">Dedication</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="block text-xl font-bold text-white">2026</span>
                <span className="text-xs text-zinc-400">Internship Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education &amp; Focus</h3>
                  <span className="text-xs text-zinc-400">Academic Foundation</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-bold text-white">
                    {personalInfo.education.degree}
                  </h4>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
                    Pursuing
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mb-3">
                  {personalInfo.education.institution}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                  <span>Key Coursework &amp; Research</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.education.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:border-rose-500/40 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold text-xs transition-colors"
              >
                <span>View Full Academic Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
