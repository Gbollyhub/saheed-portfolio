"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data";
import { revealWords, fadeUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const STORY = [
  "Full Stack Developer with 6+ years specialising in fintech and enterprise SaaS. I've built and shipped corporate card systems, payment gateways, and cross-border payment infrastructure used by thousands of users across the UK and Africa.",
  "I build independently end to end, from API architecture and database design through to polished, production-ready frontends. Core stack: React, Next.js, Node.js, Python, TypeScript, GraphQL, PostgreSQL, AWS.",
  "Comfortable leading platform rewrites, owning complex data migrations, and making architectural decisions that improve scalability and delivery speed across distributed teams.",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const h2 = section.querySelector("h2") as HTMLElement | null;
      if (h2) revealWords(h2, section);
      fadeUp(section.querySelectorAll(".about-p"), section, 0.1);
      fadeUp(section.querySelectorAll(".stat-box"), section, 0.08);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ borderTop: "1px solid #1d1d1d" }}>
      <div className="section-wrap">
        {/* Label row */}
        <div className="label-row" style={{ marginBottom: 64 }}>
          <SectionLabel index="01" title="About" />
          <div />
        </div>

        {/* Offset grid */}
        <div className="about-offset">
          <div /> {/* blank spacer */}
          <div className="about-cols">
            {/* Story */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 52px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#F5F5F5",
                  marginBottom: 40,
                }}
              >
                Engineer. Builder. Problem Solver.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {STORY.map((p, i) => (
                  <p
                    key={i}
                    className="about-p"
                    style={{ color: "#666", fontSize: 15, lineHeight: 1.75, opacity: 0 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div style={{ marginTop: 40, display: "flex", gap: 32 }}>
                <a
                  href="mailto:aliasgbolly@gmail.com"
                  style={{ color: "#F5F5F5", fontSize: 13, borderBottom: "1px solid #F5F5F5", paddingBottom: 2, textDecoration: "none" }}
                >
                  aliasgbolly@gmail.com
                </a>
                <a
                  href="https://github.com/gbollyhub"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#555", fontSize: 13, borderBottom: "1px solid #333", paddingBottom: 2, textDecoration: "none" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="stat-box"
                  style={{ border: "1px solid #1d1d1d", padding: 28, opacity: 0 }}
                >
                  <p style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600, color: "#F5F5F5", letterSpacing: "-0.02em", marginBottom: 8 }}>
                    {s.number}
                  </p>
                  <p style={{ fontSize: 12, color: "#555", letterSpacing: "0.05em" }}>{s.label}</p>
                </div>
              ))}
              <div
                className="stat-box"
                style={{ gridColumn: "span 2", border: "1px solid #1d1d1d", padding: 28, opacity: 0 }}
              >
                <p style={{ fontSize: 15, fontWeight: 600, color: "#F5F5F5", marginBottom: 4 }}>
                  MSc Software Engineering
                </p>
                <p style={{ fontSize: 12, color: "#444", marginBottom: 12 }}>
                  University of Hertfordshire · 2024
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#F5F5F5", marginBottom: 4 }}>
                  BEng Computer Engineering
                </p>
                <p style={{ fontSize: 12, color: "#444" }}>Bells University of Technology · 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
