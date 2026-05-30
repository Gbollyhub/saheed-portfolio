"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitWords } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  { n: "01", t: "Product Thinking", b: "Every architectural decision is framed around user outcomes and business goals." },
  { n: "02", t: "Scalability First", b: "I build with scale in mind from the first commit. 100 users or 100,000." },
  { n: "03", t: "Full Ownership", b: "Architecture, implementation, deployment, monitoring. No handoff culture." },
  { n: "04", t: "Performance as UX", b: "Performance optimisation is woven into every layer of the stack." },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headRef.current) {
        const words = splitWords(headRef.current);
        gsap.to(words, {
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.07,
          scrollTrigger: { trigger: section, start: "top 72%" },
        });
      }

      gsap.fromTo(
        section.querySelector(".phil-sub"),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 68%" } }
      );

      gsap.fromTo(
        section.querySelectorAll(".pillar-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section.querySelector(".pillar-grid"), start: "top 78%" },
        }
      );

      gsap.fromTo(
        section.querySelector(".phil-quote"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: section.querySelector(".phil-quote"), start: "top 82%" } }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{ borderTop: "1px solid #1d1d1d", background: "#161616" }}
    >
      <div className="section-wrap">
        <div className="label-row" style={{ marginBottom: 64 }}>
          <SectionLabel index="05" title="Philosophy" />
          <div />
        </div>

        <h2
          ref={headRef}
          style={{
            fontSize: "clamp(40px, 7vw, 100px)",
            fontWeight: 600,
            lineHeight: 1.03,
            letterSpacing: "-0.03em",
            color: "#F5F5F5",
            marginBottom: 40,
            maxWidth: 900,
          }}
        >
          I Build Products End-to-End
        </h2>

        <p
          className="phil-sub"
          style={{ color: "#555", fontSize: 18, lineHeight: 1.7, maxWidth: 600, marginBottom: 80, opacity: 0 }}
        >
          Shipping is a team sport, but great engineers take complete ownership, from system design
          to production monitoring.
        </p>

        <div className="pillar-grid" style={{ marginBottom: 80 }}>
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="pillar-card"
              style={{
                border: "1px solid #1d1d1d",
                padding: 28,
                background: "#111111",
                opacity: 0,
              }}
            >
              <p style={{ fontSize: 28, fontWeight: 600, color: "#1d1d1d", marginBottom: 24, letterSpacing: "-0.02em" }}>{p.n}</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#F5F5F5", marginBottom: 12 }}>{p.t}</p>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{p.b}</p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #1d1d1d", paddingTop: 64 }}>
          <p
            className="phil-quote"
            style={{
              fontSize: "clamp(16px, 2.5vw, 28px)",
              color: "#F5F5F5",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: 720,
              opacity: 0,
            }}
          >
            "The best software I've shipped wasn't just well-engineered. It solved real problems
            for real people, at scale, reliably."
          </p>
        </div>
      </div>
    </section>
  );
}
