import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Code2, Cpu, Sparkles, Terminal, MapPin, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect cycling through roles
  useEffect(() => {
    const fullRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      } else {
        const nextText = isDeleting
          ? fullRole.substring(0, currentText.length - 1)
          : fullRole.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Hi, I’m <span className="text-gradient-crimson">{personalInfo.name}</span>
            </h1>

            {/* Typewriter Subheading */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300 min-h-[44px] mb-6">
              <Terminal className="w-6 h-6 text-rose-500 shrink-0" />
              <span>I build as a </span>
              <span className="text-rose-400 font-mono underline decoration-rose-500/40 decoration-2 underline-offset-4">
                {currentText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-rose-400 animate-pulse" />
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>Get In Touch</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-semibold border border-white/10 transition-all"
              >
                <Download className="w-4 h-4 text-rose-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-zinc-400 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-rose-400" />
                <span>React, Node.js &amp; Python</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rose-400" />
                <span>Arduino &amp; Embedded IoT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Card / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow Behind Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl transform rotate-2 scale-105" />

              {/* Main Profile Showcase Card */}
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden">
                {/* Header Decoration */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500">developer.profile</span>
                </div>

                {/* Profile Image & Glow Frame */}
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 p-1 shadow-lg shadow-rose-500/30">
                    <img
                      src={profileImg}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute bottom-1 right-2 p-2 bg-zinc-950/90 rounded-full border border-white/15 text-rose-400 shadow-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Name & Academic Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {personalInfo.education.degree}
                  </p>
                </div>

                {/* Key Attributes Tags */}
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Internship Ready</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full-Stack &amp; IoT</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clean Codebase</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Agile Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 text-center border border-white/10"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-gradient-crimson mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
