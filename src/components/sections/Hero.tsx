"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TECH } from "@/data";
import { splitWords } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const META = [
  { l: "What", v: "Full Stack Developer" },
  { l: "Where", v: "London, UK" },
  { l: "How", v: "End-to-End Ownership" },
  { l: "When", v: "Available Now" },
];

const techDouble = [...TECH, ...TECH, ...TECH];

export default function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline word reveal
      if (headRef.current) {
        const words = splitWords(headRef.current);
        gsap.to(words, { y: 0, duration: 1.1, ease: "power4.out", stagger: 0.055, delay: 0.7 });
      }

      // Sub + actions fade up
      gsap.fromTo(
        [subRef.current, actionsRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15, delay: 1.1 }
      );

      // Marquee
      if (marqueeRef.current) {
        const w = marqueeRef.current.scrollWidth / 2;
        gsap.to(marqueeRef.current, { x: -w, duration: 30, ease: "none", repeat: -1 });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="hero-inner">
        <p style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#555", marginBottom: 48 }}>
          00 / Intro
        </p>

        <h1
          ref={headRef}
          style={{
            fontSize: "clamp(40px, 6.5vw, 96px)",
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: "#F5F5F5",
            maxWidth: 900,
            marginBottom: 48,
          }}
        >
          Building Products, Platforms &amp; Experiences That Scale
        </h1>

        <div className="hero-bottom">
          <p
            ref={subRef}
            style={{ color: "#666", fontSize: 17, lineHeight: 1.7, maxWidth: 480, opacity: 0 }}
          >
            Full Stack Developer with 6+ years building payment infrastructure, enterprise SaaS
            products, and modern web applications.
          </p>
          <div
            ref={actionsRef}
            className="hero-actions"
            style={{ display: "flex", gap: 32, opacity: 0 }}
          >
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid #F5F5F5",
                paddingBottom: 2,
                color: "#F5F5F5",
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "'Exo 2', sans-serif",
              }}
            >
              View Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid #333",
                paddingBottom: 2,
                color: "#666",
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "'Exo 2', sans-serif",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-meta">
          {META.map(({ l, v }) => (
            <div key={l}>
              <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#444", marginBottom: 8 }}>{l}</p>
              <p style={{ fontSize: 13, color: "#F5F5F5", fontWeight: 500 }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech marquee */}
      <div style={{ borderTop: "1px solid #1d1d1d", overflow: "hidden" }}>
        <div
          ref={marqueeRef}
          style={{ display: "flex", whiteSpace: "nowrap", padding: "18px 0", willChange: "transform" }}
        >
          {techDouble.map((t, i) => (
            <span
              key={i}
              style={{ color: "#444", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", paddingRight: 48, flexShrink: 0 }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
