import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Cpu,
  Globe,
  GitBranch,
  Sparkles,
  Rocket,
  Milestone,
} from "lucide-react";
import { interests, careerGoals } from "../data/portfolioData";

export default function InterestsGoals() {
  const iconMap = {
    Cpu: Cpu,
    Globe: Globe,
    GitBranch: GitBranch,
    Sparkles: Sparkles,
  };

  return (
    <section id="goals" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Vision &amp; Passions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Interests &amp; <span className="text-gradient-crimson">Career Goals</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            What drives my curiosity every day and where I am aiming my technical journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Technical Interests */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Technical Passions</h3>
                <span className="text-xs text-zinc-400">Areas of Deep Curiosity</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item, idx) => {
                const Icon = iconMap[item.icon] || Sparkles;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Career Roadmap / Goals */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Career Roadmap</h3>
                <span className="text-xs text-zinc-400">Milestones &amp; Aspirations</span>
              </div>
            </div>

            <div className="space-y-4">
              {careerGoals.map((goal, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden"
                >
                  {/* Subtle milestone number indicator */}
                  <div className="absolute top-4 right-5 text-4xl font-extrabold text-white/5 font-mono pointer-events-none">
                    0{idx + 1}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold font-mono border border-rose-500/20 mb-3">
                    <Milestone className="w-3.5 h-3.5" />
                    <span>{goal.phase}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {goal.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
