import { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "goals", label: "Interests & Goals" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Profile Avatar */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-rose-500/60 group-hover:ring-rose-400 transition-all duration-300"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-zinc-950 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg text-white group-hover:text-rose-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-xs text-zinc-400 font-mono">
                CS Undergraduate
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 p-1.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold rounded-xl bg-white/10 hover:bg-rose-500 text-white hover:text-white border border-white/15 hover:border-rose-400 transition-all duration-300 shadow-sm hover:shadow-rose-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download
              className="p-2 text-rose-400 bg-rose-500/10 rounded-lg border border-rose-500/20"
              aria-label="Download Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900/80 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 mt-3 bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl text-left transition-colors ${
                  activeSection === link.id
                    ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                    : "text-zinc-300 hover:bg-white/5"
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles className="w-4 h-4 text-rose-400" />}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-white/10"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-white/10"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-rose-500 text-white shadow-lg shadow-rose-500/30"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
