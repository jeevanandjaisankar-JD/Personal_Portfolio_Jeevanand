import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Cpu,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { skillsData, personalInfo } from "../data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "backend", label: "Backend & DB", icon: Server },
    { id: "embedded", label: "Embedded & IoT", icon: Cpu },
    { id: "tools", label: "Tools & CS", icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillsData).flatMap(([catKey, catVal]) =>
        catVal.skills.map((skill) => ({
          ...skill,
          category: catVal.title,
          catKey,
        }))
      );
    }
    return skillsData[activeCategory].skills.map((skill) => ({
      ...skill,
      category: skillsData[activeCategory].title,
      catKey: activeCategory,
    }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp; <span className="text-gradient-crimson">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A comprehensive overview of my technical stack across frontend frameworks, backend technologies, embedded systems, and development tooling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25 scale-105"
                    : "glass-card text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-md border border-rose-500/20">
                      {skill.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 flex items-center justify-between">
                    <span>{skill.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h3>

                  <p className="text-xs text-zinc-400 mb-4">
                    {skill.highlight}
                  </p>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
                  <div
                    className="bg-gradient-to-r from-rose-500 to-pink-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack Summary Pills */}
        <div className="mt-14 p-6 glass-card rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Looking for a specific skill or framework?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              I am quick to pick up new libraries, SDKs, and hardware platforms according to project requirements.
            </p>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-rose-500/50 transition-all shrink-0"
          >
            <span>Explore Code on GitHub</span>
            <ChevronRight className="w-4 h-4 text-rose-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
