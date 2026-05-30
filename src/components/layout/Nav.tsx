"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { NAV_LINKS } from "@/data";

function scrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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

          {/* Email — desktop */}
          <a
            href="mailto:aliasgbolly@gmail.com"
            className="hide-mobile"
            style={{
              marginLeft: "auto",
              color: "#666",
              fontSize: 13,
              textDecoration: "none",
              transition: "color 0.2s",
              zIndex: 1,
              fontFamily: "'Exo 2', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            aliasgbolly@gmail.com
          </a>

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
        </div>
      )}
    </>
  );
}
