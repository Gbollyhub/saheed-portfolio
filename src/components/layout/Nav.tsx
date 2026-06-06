"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { NAV_LINKS, RESUME_URLS } from "@/data";

function scrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

const RESUME_OPTIONS = [
  { label: "Frontend Developer", url: RESUME_URLS.frontend },
  { label: "Full Stack Developer", url: RESUME_URLS.fullstack },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    gsap.fromTo(
      navRef.current,
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.3 }
    );
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!resumeOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [resumeOpen]);

  const handleNav = (link: string) => {
    setMenuOpen(false);
    scrollTo(link);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          opacity: 0,
          borderBottom: scrolled ? "1px solid #1d1d1d" : "1px solid transparent",
          background: scrolled ? "rgba(17,17,17,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <div className="nav-inner">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: "none",
              color: "#F5F5F5",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Exo 2', sans-serif",
              zIndex: 1,
            }}
          >
            SAHEED IBIKUNLE
          </button>

          {/* Desktop centred links */}
          <div className="nav-links hide-mobile">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => handleNav(l)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#888",
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "'Exo 2', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Download Resume — desktop */}
          <div ref={dropdownRef} className="hide-mobile" style={{ position: "relative", zIndex: 1, marginLeft: "auto" }}>
            <button
              onClick={() => setResumeOpen((o) => !o)}
              style={{
                background: "none",
                border: "1px solid",
                borderColor: resumeOpen ? "#F5F5F5" : "#2a2a2a",
                color: resumeOpen ? "#F5F5F5" : "#666",
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "'Exo 2', sans-serif",
                padding: "6px 14px",
                letterSpacing: "0.04em",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!resumeOpen) {
                  (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
                  (e.currentTarget as HTMLElement).style.borderColor = "#F5F5F5";
                }
              }}
              onMouseLeave={(e) => {
                if (!resumeOpen) {
                  (e.currentTarget as HTMLElement).style.color = "#666";
                  (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a";
                }
              }}
            >
              Download Resume {resumeOpen ? "↑" : "↓"}
            </button>

            {resumeOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "#161616",
                  border: "1px solid #2a2a2a",
                  minWidth: 200,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {RESUME_OPTIONS.map(({ label, url }) => (
                  <a
                    key={label}
                    href={url}
                    download
                    onClick={() => setResumeOpen(false)}
                    style={{
                      padding: "12px 16px",
                      color: "#888",
                      fontSize: 13,
                      textDecoration: "none",
                      fontFamily: "'Exo 2', sans-serif",
                      letterSpacing: "0.03em",
                      borderBottom: "1px solid #1d1d1d",
                      transition: "color 0.2s, background 0.2s",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
                      (e.currentTarget as HTMLElement).style.background = "#1d1d1d";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#888";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {label}
                    <span style={{ fontSize: 10, opacity: 0.5 }}>↓</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="show-mobile hamburger"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 1,
                  background: "#F5F5F5",
                  transformOrigin: "center",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translateY(6px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translateY(-6px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "#111111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              style={{
                background: "none",
                border: "none",
                color: "#F5F5F5",
                fontSize: 40,
                fontWeight: 300,
                cursor: "pointer",
                fontFamily: "'Exo 2', sans-serif",
              }}
            >
              {l}
            </button>
          ))}

          {/* Mobile resume options */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginTop: 8 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444" }}>
              Download Resume
            </p>
            {RESUME_OPTIONS.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                download
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#666",
                  fontSize: 16,
                  textDecoration: "none",
                  fontFamily: "'Exo 2', sans-serif",
                  borderBottom: "1px solid #333",
                  paddingBottom: 2,
                }}
              >
                {label} ↓
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
