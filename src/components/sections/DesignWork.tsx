"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DESIGN_PROJECTS } from "@/data";
import { fadeUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

function DesignCardThumb({ project }: { project: (typeof DESIGN_PROJECTS)[number] }) {
  const mockContent: Record<string, React.ReactNode> = {
    // Zenith Bank — Liquid Glass aesthetic: blurred layered panels
    "zenith-banking": (
      <div style={{ padding: 16, width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Glass nav bar */}
        <div style={{ borderRadius: 8, background: `${project.accentText}12`, backdropFilter: "blur(8px)", border: `1px solid ${project.accentText}20`, padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 7, color: project.accentText, fontWeight: 600 }}>Zenith</p>
          <div style={{ display: "flex", gap: 6 }}>
            {["Home", "Transfer", "Loans"].map(n => <p key={n} style={{ fontSize: 6, color: `${project.accentText}77` }}>{n}</p>)}
          </div>
        </div>
        {/* Glass balance card */}
        <div style={{ borderRadius: 10, background: `linear-gradient(135deg, ${project.accentText}18, ${project.accentText}08)`, border: `1px solid ${project.accentText}25`, padding: "10px 12px", backdropFilter: "blur(12px)" }}>
          <p style={{ fontSize: 7, color: `${project.accentText}77`, marginBottom: 3 }}>Total Balance</p>
          <p style={{ fontSize: 18, fontWeight: 700, color: project.accentText, letterSpacing: "-0.02em" }}>₦4,820,000</p>
          <p style={{ fontSize: 6, color: `${project.accentText}55`, marginTop: 2 }}>•••• •••• •••• 7821</p>
        </div>
        {/* Glass action row */}
        <div style={{ display: "flex", gap: 6 }}>
          {["Transfer", "History", "Loans"].map(a => (
            <div key={a} style={{ flex: 1, borderRadius: 6, background: `${project.accentText}10`, border: `1px solid ${project.accentText}1a`, padding: "6px 0", textAlign: "center" }}>
              <p style={{ fontSize: 6, color: project.accentText }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    // Coop Admin — health overview + member table
    "coop-admin": (
      <div style={{ padding: 14, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
          {[{ l: "Contributions", v: "₦12.4M" }, { l: "Pending Loans", v: "7" }, { l: "Withdrawals", v: "3" }, { l: "Overdue", v: "2" }].map(s => (
            <div key={s.l} style={{ border: `1px solid ${project.accentText}20`, borderRadius: 4, padding: "6px 8px", background: `${project.accentText}08` }}>
              <p style={{ fontSize: 6, color: `${project.accentText}66`, marginBottom: 2 }}>{s.l}</p>
              <p style={{ fontSize: 10, fontWeight: 700, color: project.accentText }}>{s.v}</p>
            </div>
          ))}
        </div>
        {[{ n: "A. Okonkwo", s: "Approved", a: "₦500k" }, { n: "F. Adeyemi", s: "Pending", a: "₦250k" }].map(r => (
          <div key={r.n} style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${project.accentText}15`, padding: "5px 0", alignItems: "center" }}>
            <p style={{ fontSize: 7, color: `${project.accentText}88` }}>{r.n}</p>
            <p style={{ fontSize: 6, color: r.s === "Approved" ? project.accentText : `${project.accentText}55` }}>{r.s}</p>
            <p style={{ fontSize: 7, color: project.accentText }}>{r.a}</p>
          </div>
        ))}
      </div>
    ),
    // Paysure Core — system health + provider status
    "paysure-core": (
      <div style={{ padding: 14, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <p style={{ fontSize: 8, fontWeight: 600, color: project.accentText }}>System Health</p>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80" }} />
            <p style={{ fontSize: 6, color: "#4ade80" }}>All Systems Operational</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
          {[{ l: "APIs", v: "24" }, { l: "Providers", v: "9" }, { l: "Products", v: "12" }].map(s => (
            <div key={s.l} style={{ flex: 1, border: `1px solid ${project.accentText}20`, borderRadius: 4, padding: "5px 0", textAlign: "center", background: `${project.accentText}08` }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: project.accentText }}>{s.v}</p>
              <p style={{ fontSize: 6, color: `${project.accentText}55` }}>{s.l}</p>
            </div>
          ))}
        </div>
        {[{ n: "Paystack", u: "99.9%" }, { n: "Interswitch", u: "99.6%" }, { n: "MTN MoMo", u: "98.2%" }].map(p => (
          <div key={p.n} style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${project.accentText}12`, padding: "4px 0" }}>
            <p style={{ fontSize: 7, color: `${project.accentText}77` }}>{p.n}</p>
            <p style={{ fontSize: 7, color: project.accentText }}>{p.u}</p>
          </div>
        ))}
      </div>
    ),
    // CoolPay Kids — child-facing: big balance, tasks, savings jar
    "coolpay-kids": (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: 16 }}>
        {/* Balance */}
        <div style={{ background: `${project.accentText}18`, border: `1px solid ${project.accentText}33`, borderRadius: 12, padding: "8px 20px", textAlign: "center", width: "100%" }}>
          <p style={{ fontSize: 7, color: `${project.accentText}88`, marginBottom: 2 }}>Your Money</p>
          <p style={{ fontSize: 22, fontWeight: 800, color: project.accentText, letterSpacing: "-0.02em" }}>₦3,200</p>
        </div>
        {/* Tasks */}
        {[{ t: "Clean room", r: "₦500", done: true }, { t: "Do homework", r: "₦300", done: false }].map(tk => (
          <div key={tk.t} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${project.accentText}${tk.done ? "33" : "15"}`, borderRadius: 6, padding: "5px 8px", background: tk.done ? `${project.accentText}10` : "transparent" }}>
            <p style={{ fontSize: 7, color: tk.done ? project.accentText : `${project.accentText}55` }}>{tk.t}</p>
            <p style={{ fontSize: 7, color: project.accentText, fontWeight: 700 }}>{tk.r}</p>
          </div>
        ))}
        {/* Savings bar */}
        <div style={{ width: "100%", background: `${project.accentText}15`, borderRadius: 4, height: 6, overflow: "hidden" }}>
          <div style={{ width: "65%", height: "100%", background: project.accentText, borderRadius: 4 }} />
        </div>
        <p style={{ fontSize: 6, color: `${project.accentText}77` }}>Savings goal: 65% · New Sneakers</p>
      </div>
    ),
  };

  return (
    <a
      href={`/designs#${project.slug}`}
      style={{
        display: "block",
        textDecoration: "none",
        border: "1px solid #1d1d1d",
        overflow: "hidden",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#444")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1d1d1d")}
    >
      {/* Thumbnail */}
      <div
        style={{
          aspectRatio: "4/3",
          background: project.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Faint grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${project.accentText}08 1px, transparent 1px), linear-gradient(90deg, ${project.accentText}08 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />
        {/* Figma-style frame label */}
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <p style={{ fontSize: 8, color: `${project.accentText}55`, letterSpacing: "0.15em", textTransform: "uppercase" }}>Frame 1</p>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          {mockContent[project.slug]}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #1d1d1d",
          padding: "18px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#111111",
        }}
      >
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#F5F5F5", letterSpacing: "-0.01em", marginBottom: 4 }}>
            {project.name}
          </p>
          <p style={{ fontSize: 11, color: "#555" }}>{project.type}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          <p style={{ fontSize: 11, color: "#444" }}>{project.year}</p>
          <p style={{ fontSize: 10, color: project.accentText, letterSpacing: "0.08em" }}>View →</p>
        </div>
      </div>
    </a>
  );
}

export default function DesignWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      fadeUp(section.querySelector(".design-header"), section);
      fadeUp(section.querySelector(".design-body"), section, 0, 0.1);
      fadeUp(section.querySelectorAll(".design-card"), section, 0.07, 0.1);
      fadeUp(section.querySelector(".design-cta"), section, 0, 0.3);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="design" ref={sectionRef} style={{ borderTop: "1px solid #1d1d1d" }}>
      <div className="section-wrap">
        {/* Header */}
        <div className="label-row design-header" style={{ marginBottom: 64, opacity: 0 }}>
          <SectionLabel index="04" title="Design Work" />
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
              Where It All Started
            </h2>
          </div>
        </div>

        {/* Intro paragraph */}
        <div className="label-row design-body" style={{ marginBottom: 64, opacity: 0 }}>
          <div />
          <p
            style={{
              color: "#666",
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            Before writing a line of production code, I started in Figma. Design was how I first learned
            to think about products, not just what they do, but how they feel to use. That foundation in
            UI/UX shaped everything that followed: the frontend instincts around spacing, hierarchy, and
            interaction detail, the backend thinking around how data should be modelled to support what a
            screen needs to show, and eventually the full-stack ownership I practise today. The work below
            traces that earlier practice, and the visual thinking that still informs how I build.
          </p>
        </div>

        {/* 2×2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            marginBottom: 56,
            background: "#1d1d1d",
          }}
        >
          {DESIGN_PROJECTS.map((p) => (
            <div key={p.slug} className="design-card" style={{ opacity: 0, background: "#111111" }}>
              <DesignCardThumb project={p} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="design-cta" style={{ opacity: 0, display: "flex", justifyContent: "flex-end", paddingBottom: 8 }}>
          <a
            href="/designs"
            style={{
              fontSize: 13,
              color: "#F5F5F5",
              textDecoration: "none",
              borderBottom: "1px solid #F5F5F5",
              paddingBottom: 2,
              letterSpacing: "0.05em",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "color 0.2s, border-color 0.2s",
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
            More Designs →
          </a>
        </div>

        <div style={{ height: 1, background: "#1d1d1d", marginTop: 56 }} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
