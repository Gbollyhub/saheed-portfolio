"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS } from "@/data";
import { fadeUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      section.querySelectorAll(".job-block").forEach((block) => {
        fadeUp(block.querySelector(".job-year"), block);
        fadeUp(block.querySelector(".job-content"), block, 0, 0.05);
        fadeUp(block.querySelectorAll(".job-bullet"), block, 0.06, 0.1);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ borderTop: "1px solid #1d1d1d" }}>
      <div className="section-wrap">
        <div className="label-row" style={{ marginBottom: 64 }}>
          <SectionLabel index="02" title="Experience" />
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#F5F5F5",
            }}
          >
            Where I've Built Things
          </h2>
        </div>

        {JOBS.map((job, i) => (
          <div
            key={i}
            className="job-block label-row"
            style={{ borderTop: "1px solid #1d1d1d", paddingTop: 56, paddingBottom: 56 }}
          >
            <div className="job-year" style={{ opacity: 0 }}>
              <p
                style={{
                  fontSize: "clamp(48px, 5vw, 80px)",
                  fontWeight: 600,
                  color: "#1d1d1d",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {job.year}
              </p>
            </div>

            <div className="job-content" style={{ opacity: 0 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24,
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3
                      style={{
                        fontSize: "clamp(20px, 2vw, 26px)",
                        fontWeight: 600,
                        color: "#F5F5F5",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {job.company}
                    </h3>
                    {i === 0 && (
                      <span
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          border: "1px solid #F5F5F5",
                          padding: "3px 8px",
                          color: "#F5F5F5",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 13, color: "#555" }}>
                    {job.role} · {job.location}
                  </p>
                </div>
                <p style={{ fontSize: 13, color: "#444" }}>{job.period}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {job.bullets.map((b, j) => (
                  <div
                    key={j}
                    className="job-bullet"
                    style={{ display: "flex", gap: 20, alignItems: "flex-start", opacity: 0 }}
                  >
                    <span style={{ fontSize: 10, color: "#333", marginTop: 4, flexShrink: 0 }}>
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: 14, color: "#888", lineHeight: 1.65 }}>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {job.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
