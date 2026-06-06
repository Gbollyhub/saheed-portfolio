"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CaseNav() {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    gsap.fromTo(ref.current, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav ref={ref} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, opacity: 0, borderBottom: scrolled ? "1px solid #1d1d1d" : "1px solid transparent", background: scrolled ? "rgba(17,17,17,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "background 0.4s, border-color 0.4s" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#F5F5F5", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Exo 2', sans-serif" }}>
          SAHEED IBIKUNLE
        </a>
        <a href="/" style={{ color: "#666", fontSize: 13, textDecoration: "none", fontFamily: "'Exo 2', sans-serif", display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
        >
          ← Back to Home
        </a>
      </div>
    </nav>
  );
}
