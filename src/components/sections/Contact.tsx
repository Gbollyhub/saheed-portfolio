"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { revealWords, fadeUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { RESUME_URLS } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { label: "Email", value: "aliasgbolly@gmail.com", href: "mailto:aliasgbolly@gmail.com", note: "Best for project inquiries" },
  { label: "Phone", value: "+44 7721 651368", href: "tel:+447721651368", note: "Mon – Fri, 9am – 6pm GMT" },
  { label: "LinkedIn", value: "linkedin.com/in/saheed-ibikunle", href: "https://linkedin.com/in/saheed-ibikunle", note: "Professional network" },
  { label: "GitHub", value: "github.com/gbollyhub", href: "https://github.com/gbollyhub", note: "Open source work" },
];

function ContactRow({
  label,
  value,
  href,
  note,
}: {
  label: string;
  value: string;
  href: string;
  note: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
      rel="noreferrer"
      className="contact-link"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #1d1d1d",
        padding: "36px 0",
        paddingLeft: hovered ? 16 : 0,
        textDecoration: "none",
        transition: "padding 0.35s ease",
        opacity: 0,
        flexWrap: "wrap",
        gap: 12,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#333",
            width: 56,
            flexShrink: 0,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: "clamp(15px, 2vw, 22px)",
            color: hovered ? "#888" : "#F5F5F5",
            fontWeight: 500,
            transition: "color 0.3s",
          }}
        >
          {value}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 13, color: "#444" }}>{note}</span>
        <span style={{ fontSize: 18, color: hovered ? "#F5F5F5" : "#222", transition: "color 0.3s" }}>↗</span>
      </div>
    </a>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headRef.current) revealWords(headRef.current, section);

      gsap.fromTo(
        section.querySelector(".contact-sub"),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 68%" } }
      );

      fadeUp(section.querySelectorAll(".contact-link"), section, 0.1);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{ borderTop: "1px solid #1d1d1d" }}>
      <div className="section-wrap" style={{ paddingBottom: 0 }}>
        <div className="label-row" style={{ marginBottom: 64 }}>
          <SectionLabel index="06" title="Contact" />
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
            marginBottom: 32,
          }}
        >
          Let's Build Something Meaningful
        </h2>

        <p
          className="contact-sub"
          style={{ color: "#555", fontSize: 17, lineHeight: 1.7, maxWidth: 480, marginBottom: 80, opacity: 0 }}
        >
          I'm open to senior engineering roles, technical co-founder discussions, and high-impact
          consulting.
        </p>

        <div>
          {LINKS.map((l) => (
            <ContactRow key={l.label} {...l} />
          ))}
          {/* Resume download rows */}
          {([
            { label: "Frontend Developer", url: RESUME_URLS.frontend },
            { label: "Full Stack Developer", url: RESUME_URLS.fullstack },
          ] as const).map(({ label, url }) => (
            <a
              key={label}
              href={url}
              download
              className="contact-link"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #1d1d1d",
                padding: "36px 0",
                textDecoration: "none",
                opacity: 0,
                flexWrap: "wrap",
                gap: 12,
                transition: "padding 0.35s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "16px"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0px"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#333", width: 56, flexShrink: 0 }}>
                  Resume
                </span>
                <span style={{ fontSize: "clamp(15px, 2vw, 22px)", color: "#F5F5F5", fontWeight: 500 }}>
                  {label}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 13, color: "#444" }}>Download CV</span>
                <span style={{ fontSize: 18, color: "#222" }}>↓</span>
              </div>
            </a>
          ))}

          <div style={{ height: 1, background: "#1d1d1d" }} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1d1d1d", marginTop: 80 }}>
        <div className="footer-inner">
          <p style={{ fontSize: 12, color: "#333" }}>© 2025 Saheed Ibikunle. Designed & Built with care.</p>
          <div className="footer-right">
            <span style={{ fontSize: 12, color: "#333" }}>Full Stack Developer</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#333", display: "inline-block" }} />
            <span style={{ fontSize: 12, color: "#333" }}>London, UK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
