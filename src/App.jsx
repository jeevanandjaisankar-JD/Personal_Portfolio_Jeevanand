import { useEffect, useState } from "react"
import profileImg from "./assets/profile.jpg"

export default function App() {
  const [active, setActive] = useState("home")
  const [sidebar, setSidebar] = useState(true)
  const [dark, setDark] = useState(true)
  const [typed, setTyped] = useState("")
  const [repos, setRepos] = useState([])

  const name = "Jeevanand"

  /* ---------------- TYPE ANIMATION ---------------- */
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(name.slice(0, i))
      i++
      if (i > name.length) clearInterval(t)
    }, 120)
    return () => clearInterval(t)
  }, [])

  /* ---------------- GITHUB PROJECTS ---------------- */
  useEffect(() => {
    fetch("https://api.github.com/users/jeevanand-jaisankar/repos")
      .then(res => res.json())
      .then(data => setRepos(Array.isArray(data) ? data.slice(0, 6) : []))
      .catch(() => setRepos([]))
  }, [])

  /* ---------------- SECTIONS ---------------- */
  const sections = {
    home: (
      <div>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Hey, I’m <span style={{ color: "#ff2d55" }}>{typed}</span>
        </h1>

        <p style={{ marginTop: 20, color: "#bbb", maxWidth: 650 }}>
          Internship-ready developer focused on React, system building, Arduino projects,
          and real-world engineering applications.
        </p>

        <a
          href="/resume.pdf"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "10px 16px",
            background: "#ff2d55",
            color: "black",
            fontWeight: "bold",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          📄 Download Resume
        </a>
      </div>
    ),

    projects: (
      <div>
        <h2 style={{ color: "#ff2d55" }}>GitHub Projects</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 15 }}>
          {repos.map(repo => (
            <div
              key={repo.id}
              style={{
                padding: 15,
                border: "1px solid #333",
                borderRadius: 12,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h3 style={{ color: "#fff" }}>{repo.name}</h3>
              <p style={{ fontSize: 13, color: "#aaa" }}>
                {repo.description || "No description available"}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                style={{ color: "#ff2d55", fontSize: 13 }}
              >
                View Repo →
              </a>
            </div>
          ))}
        </div>
      </div>
    ),

    about: (
      <div>
        <h2 style={{ color: "#ff2d55" }}>About Me</h2>
        <p>
          I am a Computer Science student passionate about full-stack development,
          embedded systems, and building real-world projects that solve problems.
        </p>
      </div>
    ),

    skills: (
      <div>
        <h2 style={{ color: "#ff2d55" }}>Skills</h2>
        <ul>
          <li>React.js / Frontend Development</li>
          <li>JavaScript / Problem Solving</li>
          <li>Arduino & Hardware Integration</li>
          <li>Git & GitHub</li>
          <li>Basic Backend Concepts</li>
        </ul>
      </div>
    ),

    contact: (
      <div>
        <h2 style={{ color: "#ff2d55" }}>Contact</h2>

        <p>Email: jeevanandj420@gmail.com</p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/jeevanand-jaisankar"
            target="_blank"
            style={{ color: "#ff2d55" }}
          >
            https://github.com/jeevanand-jaisankar
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jeevanand-j-575676281/"
            target="_blank"
            style={{ color: "#ff2d55" }}
          >
            Profile
          </a>
        </p>

        {/* simple contact form (frontend only) */}
        <div style={{ marginTop: 20 }}>
          <input placeholder="Your Name" style={inputStyle} />
          <input placeholder="Your Email" style={inputStyle} />
          <textarea placeholder="Message" style={{ ...inputStyle, height: 80 }} />
          <button style={buttonStyle}>Send Message</button>
        </div>
      </div>
    ),
  }

  const menu = [
    ["home", "🏠"],
    ["projects", "💻"],
    ["about", "👤"],
    ["skills", "⚡"],
    ["contact", "📧"],
  ]

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: dark ? "#000" : "#fff",
        color: dark ? "#fff" : "#000",
        fontFamily: "Arial",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: sidebar ? 260 : 0,
          overflow: "hidden",
          transition: "0.3s",
          borderRight: "1px solid #222",
        }}
      >
        <div style={{ padding: 20, textAlign: "center" }}>
          <img
            src={profileImg}
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
          <h3>{typed}</h3>
        </div>

        {menu.map(([id, icon]) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            style={{
              width: "100%",
              padding: 12,
              background: active === id ? "#ff2d55" : "transparent",
              color: active === id ? "black" : "inherit",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {icon} {id}
          </button>
        ))}
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: 30 }}>
        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Internship Portfolio</h2>

          <div>
            <button onClick={() => setDark(!dark)}>🌓</button>
            <button onClick={() => setSidebar(!sidebar)}>☰</button>
          </div>
        </div>

        <hr style={{ margin: "20px 0" }} />

        {/* CONTENT */}
        <div>{sections[active]}</div>

        {/* FOOTER */}
        <div style={{ marginTop: 40, opacity: 0.6 }}>
          © 2026 Jeevanand — Internship Ready Portfolio
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 8,
  border: "1px solid #444",
  background: "transparent",
  color: "inherit",
}

const buttonStyle = {
  padding: 10,
  width: "100%",
  background: "#ff2d55",
  border: "none",
  borderRadius: 8,
  fontWeight: "bold",
  cursor: "pointer",
}
