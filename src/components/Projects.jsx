import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  Star,
  GitFork,
  Search,
  Sparkles,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { featuredProjects, personalInfo } from "../data/portfolioData";

export default function Projects() {
  const [tab, setTab] = useState("featured"); // "featured" | "github"
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  // Fetch repositories from the user's updated GitHub account: jeevanandjaisankar-JD
  useEffect(() => {
    fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setRepos([]);
        }
        setLoadingRepos(false);
      })
      .catch((err) => {
        console.warn("GitHub API error, using fallback state", err);
        setRepos([]);
        setLoadingRepos(false);
      });
  }, []);

  // Filtered Featured Projects
  const filteredFeatured = featuredProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag =
      selectedTag === "all" ||
      project.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  // Filtered GitHub Repos
  const filteredRepos = repos.filter((repo) => {
    return (
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const allTags = ["all", "React", "JavaScript", "Tailwind", "Python", "Arduino", "IoT"];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-gradient-crimson">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Explore my selected engineering builds, full-stack applications, and live GitHub repositories.
          </p>
        </div>

        {/* Top Controls: View Mode Tabs & Search Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex items-center p-1 rounded-2xl bg-zinc-900/90 border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setTab("featured")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                tab === "featured"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Curated Builds ({featuredProjects.length})</span>
            </button>
            <button
              onClick={() => setTab("github")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                tab === "github"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>Live GitHub Repos ({repos.length || "10+"})</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
            />
          </div>
        </div>

        {/* Tag Filters (Only for Featured View) */}
        {tab === "featured" && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs text-zinc-400 flex items-center gap-1 mr-2">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* ---------------- FEATURED PROJECTS VIEW ---------------- */}
        {tab === "featured" && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredFeatured.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Tag & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        {project.category}
                      </span>
                      {project.stats?.badge && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/10">
                          {project.stats.badge}
                        </span>
                      )}
                    </div>

                    {/* Project Title & Tagline */}
                    <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400 mb-3">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-400 text-[11px] font-mono border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Links / Action Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-rose-400" />
                        <span>Source Code</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 group-hover:translate-x-0.5 transition-all"
                      >
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ---------------- LIVE GITHUB REPOSITORIES VIEW ---------------- */}
        {tab === "github" && (
          <div>
            {loadingRepos ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-10 h-10 border-2 border-rose-500 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm text-zinc-400">
                  Fetching live repositories from GitHub (@{personalInfo.githubUsername})...
                </p>
              </div>
            ) : filteredRepos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <FolderGit2 className="w-4 h-4 text-rose-400" />
                          <h4 className="text-base font-bold text-white truncate max-w-[180px]">
                            {repo.name}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                          {repo.language || "Project"}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-400 line-clamp-3 mb-4 min-h-[36px]">
                        {repo.description || "Interactive project repository built with modern engineering workflows."}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                          {repo.forks_count}
                        </span>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                      >
                        <span>Inspect Repo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 glass-card rounded-3xl border border-white/10">
                <FolderGit2 className="w-12 h-12 text-rose-400 mx-auto mb-3 opacity-60" />
                <h4 className="text-lg font-bold text-white mb-1">
                  Repositories Available on GitHub
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6">
                  Visit my official GitHub profile to see all recent code pushes, forks, and starred repositories.
                </p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-lg shadow-rose-500/30 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open github.com/{personalInfo.githubUsername}</span>
                </a>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
