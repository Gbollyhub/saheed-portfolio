"use client";
import CaseNav from "@/components/CaseNav";
import { DESIGN_PROJECTS } from "@/data";
import Tag from "@/components/ui/Tag";

function DesignHero() {
  return (
    <div className="dh-hero">
      <p style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#555", marginBottom: 20 }}>
        04 / Design Work
      </p>
      <h1
        style={{
          fontSize: "clamp(40px, 6vw, 80px)",
          fontWeight: 600,
          lineHeight: 1.04,
          letterSpacing: "-0.03em",
          color: "#F5F5F5",
          marginBottom: 24,
          maxWidth: 700,
        }}
      >
        UI/UX Designs
      </h1>
      <p style={{ fontSize: 16, color: "#666", maxWidth: 560, lineHeight: 1.75 }}>
        A collection of interface and experience design work spanning fintech, SaaS, and developer tools.
        Every project here started in Figma before a single line of code was written.
      </p>

      <div className="dh-stats">
        {[
          { l: "Discipline", v: "UI / UX Design" },
          { l: "Primary Tool", v: "Figma" },
          { l: "Projects", v: `${DESIGN_PROJECTS.length} Case Studies` },
        ].map(({ l, v }) => (
          <div key={l}>
            <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: 6 }}>{l}</p>
            <p style={{ fontSize: 13, color: "#F5F5F5" }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignProjectSection({ project, isLast }: { project: (typeof DESIGN_PROJECTS)[number]; isLast: boolean }) {
  return (
    <div id={project.slug} className="dh-section" style={{ scrollMarginTop: 80 }}>
      <div className="dh-section-inner" style={{ paddingBottom: isLast ? 120 : 80 }}>

        {/* Project header */}
        <div className="dh-header" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 16, flexWrap: "wrap" }}>
              <p
                style={{
                  fontSize: "clamp(48px, 5vw, 72px)",
                  fontWeight: 600,
                  color: "#1d1d1d",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {project.num}
              </p>
              <div>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3.5vw, 48px)",
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "#F5F5F5",
                    marginBottom: 6,
                  }}
                >
                  {project.name}
                </h2>
                <p style={{ fontSize: 13, color: "#555" }}>{project.type} · {project.year}</p>
              </div>
            </div>
            <p style={{ fontSize: 16, color: "#888", lineHeight: 1.6, maxWidth: 560, fontStyle: "italic" }}>
              {project.tagline}
            </p>
          </div>

          {/* Figma CTA */}
          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="dh-figma-btn"
            style={{ borderColor: "#333", color: "#F5F5F5" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = project.accentText;
              (e.currentTarget as HTMLElement).style.color = project.accentText;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#333";
              (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
              <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
              <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
              <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
              <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
            </svg>
            View in Figma ↗
          </a>
        </div>

        {/* Accent preview bar */}
        <div
          style={{
            borderRadius: 8,
            background: project.accent,
            border: "1px solid #222",
            padding: "40px 32px",
            marginBottom: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 120,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${project.accentText}08 1px, transparent 1px), linear-gradient(90deg, ${project.accentText}08 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: `${project.accentText}66`, marginBottom: 8 }}>Design Preview</p>
            <p style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: project.accentText, letterSpacing: "-0.02em" }}>
              {project.name}
            </p>
            <p style={{ fontSize: 12, color: `${project.accentText}55`, marginTop: 8 }}>Open in Figma to view the full design</p>
          </div>
        </div>

        {/* About */}
        <div className="dh-2col" style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>About</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {project.about.map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: "#666", lineHeight: 1.75 }}>{para}</p>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="dh-2col">
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Tools</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tools.map((t) => <Tag key={t} label={t} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesignsPage() {
  return (
    <div style={{ background: "#111111", color: "#F5F5F5", fontFamily: "'Exo 2', sans-serif", minHeight: "100vh" }}>
      <CaseNav />
      <DesignHero />

      {DESIGN_PROJECTS.map((p, i) => (
        <DesignProjectSection key={p.slug} project={p} isLast={i === DESIGN_PROJECTS.length - 1} />
      ))}

      <style>{`
        .dh-hero {
          max-width: 1320px;
          margin: 0 auto;
          padding: 120px 40px 80px;
        }
        .dh-stats {
          border-top: 1px solid #1d1d1d;
          margin-top: 56px;
          padding-top: 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .dh-section {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .dh-section-inner {
          border-top: 1px solid #1d1d1d;
          padding-top: 80px;
        }
        .dh-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: flex-start;
        }
        .dh-figma-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid;
          padding: 12px 22px;
          text-decoration: none;
          font-size: 13px;
          font-family: 'Exo 2', sans-serif;
          letter-spacing: 0.03em;
          transition: border-color 0.2s, color 0.2s;
          white-space: nowrap;
          align-self: flex-start;
        }
        .dh-2col {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .dh-hero { padding: 88px 24px 56px; }
          .dh-stats { grid-template-columns: 1fr; gap: 20px; margin-top: 40px; }
          .dh-section { padding: 0 24px; }
          .dh-section-inner { padding-top: 48px; }
          .dh-header { grid-template-columns: 1fr; gap: 24px; }
          .dh-figma-btn { align-self: auto; }
          .dh-2col { grid-template-columns: 1fr; gap: 12px; }
        }

        @media (max-width: 480px) {
          .dh-hero { padding: 80px 20px 48px; }
          .dh-section { padding: 0 20px; }
        }
      `}</style>
    </div>
  );
}
