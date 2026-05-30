"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILL_ROWS, type SkillRowData } from "@/data";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

function SkillRow({ row, label, dir }: SkillRowData) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const w = track.scrollWidth / 3;
    const anim = gsap.to(track, {
      x: dir > 0 ? -w : w,
      duration: 30 + Math.random() * 10,
      ease: "none",
      repeat: -1,
      startAt: dir < 0 ? { x: -w } : { x: 0 },
    });

    const el = track.parentElement!;
    const pause = () => anim.timeScale(0);
    const resume = () => anim.timeScale(1);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      anim.kill();
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [dir]);

  const triple = [...row, ...row, ...row];

  return (
    <div style={{ borderTop: "1px solid #1d1d1d", overflow: "hidden", position: "relative", cursor: "default" }}>
      <div
        ref={trackRef}
        style={{ display: "flex", whiteSpace: "nowrap", padding: "18px 0", willChange: "transform" }}
      >
        {triple.map((s, i) => (
          <span key={i} style={{ fontSize: 13, color: "#F5F5F5", fontWeight: 500, paddingRight: 40, flexShrink: 0 }}>
            {s}{" "}
            <span style={{ color: "#222", paddingRight: 40, fontSize: 10 }}>·</span>
          </span>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#111111",
          padding: "0 12px",
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#444" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: header, start: "top 80%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" style={{ borderTop: "1px solid #1d1d1d" }}>
      <div className="section-wrap" style={{ paddingBottom: 80 }}>
        <div ref={headerRef} className="label-row" style={{ marginBottom: 64, opacity: 0 }}>
          <SectionLabel index="04" title="Skills" />
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#F5F5F5",
            }}
          >
            Technologies I Use
          </h2>
        </div>
      </div>

      {SKILL_ROWS.map((r) => (
        <SkillRow key={r.label} {...r} />
      ))}

      <div style={{ height: 1, background: "#1d1d1d" }} />
    </section>
  );
}
