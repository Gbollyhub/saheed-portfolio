"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data";
import { fadeUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

gsap.registerPlugin(ScrollTrigger);

function ProjectThumb({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="proj-thumb"
      style={{
        flexShrink: 0,
        width: 200,
        height: 140,
        borderRadius: 12,
        background: project.accent,
        border: "1px solid #222",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        transition: "transform 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
        (e.currentTarget as HTMLElement).style.borderColor = "#444";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.borderColor = "#222";
      }}
    >
      {/* Browser dots */}
      <div
        style={{
          height: 28,
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: 5,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          flexShrink: 0,
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <span key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c, opacity: 0.7 }} />
        ))}
      </div>
      {/* Mock content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: 16,
        }}
      >
        <p style={{ fontSize: 15, fontWeight: 600, color: project.accentText, letterSpacing: "-0.01em" }}>
          {project.name}
        </p>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {project.status}
        </p>
        <div style={{ width: "80%", height: 1, background: "rgba(255,255,255,0.05)", marginTop: 4 }} />
        <div style={{ width: "60%", height: 1, background: "rgba(255,255,255,0.04)" }} />
        <div style={{ width: "70%", height: 1, background: "rgba(255,255,255,0.04)" }} />
      </div>
    </a>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      section.querySelectorAll(".proj-block").forEach((block) => {
        fadeUp(block.querySelector(".proj-num"), block);
        fadeUp(block.querySelector(".proj-content"), block, 0, 0.05);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} style={{ borderTop: "1px solid #1d1d1d" }}>
      <div className="section-wrap">
        <div className="label-row" style={{ marginBottom: 64 }}>
          <SectionLabel index="03" title="Projects" />
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 52px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#F5F5F5",
                marginBottom: 16,
              }}
            >
              Featured Work
            </h2>
            <p style={{ color: "#555", fontSize: 15, maxWidth: 440, lineHeight: 1.65 }}>
              Selected projects built end-to-end, from architecture to deployment.
            </p>
          </div>
        </div>

        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="proj-block label-row"
            style={{ borderTop: "1px solid #1d1d1d", paddingTop: 56, paddingBottom: 56 }}
          >
            <div className="proj-num" style={{ opacity: 0 }}>
              <p
                style={{
                  fontSize: "clamp(48px, 5vw, 80px)",
                  fontWeight: 600,
                  color: "#1d1d1d",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {p.num}
              </p>
            </div>

            <div
              className="proj-content"
              style={{ opacity: 0, display: "flex", gap: 40, alignItems: "flex-start" }}
            >
              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 20,
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "clamp(20px, 2vw, 26px)",
                        fontWeight: 600,
                        color: "#F5F5F5",
                        letterSpacing: "-0.01em",
                        marginBottom: 6,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 13, color: "#555" }}>{p.line}</p>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#444",
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>
                  {p.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                  {p.stack.map((t) => <Tag key={t} label={t} />)}
                </div>

                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  <a
                    href={`/projects/${p.slug}`}
                    style={{
                      borderBottom: "1px solid #F5F5F5",
                      paddingBottom: 2,
                      color: "#F5F5F5",
                      fontSize: 12,
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#888";
                      (e.currentTarget as HTMLElement).style.borderBottomColor = "#888";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
                      (e.currentTarget as HTMLElement).style.borderBottomColor = "#F5F5F5";
                    }}
                  >
                    Case Study →
                  </a>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      borderBottom: "1px solid #333",
                      paddingBottom: 2,
                      color: "#555",
                      fontSize: 12,
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
                      (e.currentTarget as HTMLElement).style.borderBottomColor = "#F5F5F5";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#555";
                      (e.currentTarget as HTMLElement).style.borderBottomColor = "#333";
                    }}
                  >
                    Live App ↗
                  </a>
                </div>
              </div>

              {/* Thumbnail */}
              <ProjectThumb project={p} />
            </div>
          </div>
        ))}

        <div style={{ height: 1, background: "#1d1d1d" }} />
      </div>
    </section>
  );
}
