"use client";
import CaseNav from "@/components/CaseNav";
import BrowserMock from "@/components/ui/BrowserMock";
import Divider from "@/components/ui/Divider";

const SITE_URL = "blockui-storybook.vercel.app";

function Screen({ label, children }: { label: string; children: React.ReactNode }) {
  return <BrowserMock label={label} url={SITE_URL}>{children}</BrowserMock>;
}

export default function BlockUICase() {
  return (
    <div style={{ background: "#111111", color: "#F5F5F5", fontFamily: "'Exo 2', sans-serif", minHeight: "100vh" }}>
      <CaseNav />

      {/* Hero */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 80px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#555", marginBottom: 20 }}>
            03 / Case Study
          </p>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
            <div>
              <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.03em", color: "#F5F5F5", marginBottom: 16 }}>BlockUI</h1>
              <p style={{ fontSize: 18, color: "#666", maxWidth: 560, lineHeight: 1.6 }}>
                An open-source React component library. Production-ready, accessible, and themeable components installable from npm in seconds.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
              <a href="https://blockui-storybook.vercel.app/" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#F5F5F5", border: "1px solid #333", padding: "10px 20px", textDecoration: "none", display: "inline-block", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5F5F5")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333")}
              >
                View Storybook ↗
              </a>
              <a href="https://www.npmjs.com/package/@saheedibikunle/blockui" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#666", border: "1px solid #222", padding: "10px 20px", textDecoration: "none", display: "inline-block" }}>
                npm Package ↗
              </a>
              <div style={{ display: "flex", gap: 16, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444" }}>
                <span>Open Source</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1d1d1d", borderBottom: "1px solid #1d1d1d", padding: "32px 0", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {[
            { l: "Type", v: "Component Library" },
            { l: "Stack", v: "React · TypeScript · Storybook" },
            { l: "Distribution", v: "npm · @saheedibikunle/blockui" },
            { l: "Status", v: "Open Source" },
          ].map(({ l, v }) => (
            <div key={l}>
              <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: 6 }}>{l}</p>
              <p style={{ fontSize: 13, color: "#F5F5F5" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero mockup */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 80px" }}>
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #1d1d1d", background: "#161616" }}>
          <div style={{ height: 40, background: "#1a1a1a", borderBottom: "1px solid #1d1d1d", display: "flex", alignItems: "center", padding: "0 16px", gap: 8 }}>
            {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
              <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.6 }} />
            ))}
          </div>
          <div style={{ aspectRatio: "16/7", background: "#111", display: "flex" }}>
            {/* Storybook sidebar */}
            <div style={{ width: 200, background: "#161616", borderRight: "1px solid #1d1d1d", padding: 16, flexShrink: 0 }}>
              <p style={{ fontSize: 11, color: "#fb923c", marginBottom: 16, fontWeight: 600 }}>BlockUI</p>
              {["Button","Input","Modal","Card","Badge","Alert","Tooltip","Select"].map((c, i) => (
                <p key={c} style={{ fontSize: 11, color: i === 0 ? "#F5F5F5" : "#444", padding: "4px 8px", background: i === 0 ? "#222" : "transparent", borderRadius: 4, marginBottom: 2 }}>{c}</p>
              ))}
            </div>
            {/* Component preview */}
            <div style={{ flex: 1, padding: 32, display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ fontSize: 14, color: "#F5F5F5", fontWeight: 600 }}>Button</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  { label: "Primary", bg: "#fb923c", color: "#000" },
                  { label: "Secondary", bg: "transparent", color: "#F5F5F5", border: "1px solid #333" },
                  { label: "Danger", bg: "#f87171", color: "#000" },
                  { label: "Ghost", bg: "transparent", color: "#666", border: "1px solid transparent" },
                ].map(btn => (
                  <div key={btn.label} style={{ padding: "8px 18px", background: btn.bg, color: btn.color, border: btn.border, borderRadius: 6, fontSize: 12, fontWeight: 500 }}>
                    {btn.label}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #1d1d1d", paddingTop: 20 }}>
                <p style={{ fontSize: 10, color: "#444", marginBottom: 8 }}>Props</p>
                <div style={{ background: "#161616", border: "1px solid #1d1d1d", borderRadius: 6, padding: 12, fontFamily: "monospace" }}>
                  <p style={{ fontSize: 10, color: "#fb923c" }}>variant: "primary" | "secondary" | "danger" | "ghost"</p>
                  <p style={{ fontSize: 10, color: "#818cf8" }}>size: "sm" | "md" | "lg"</p>
                  <p style={{ fontSize: 10, color: "#4ade80" }}>disabled: boolean</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 120px" }}>

        <Divider />

        {/* Problem */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>The Problem</p>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              Teams waste hours rebuilding the same UI components on every project.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "Every frontend project starts the same way: build a button. Build an input. Build a modal, a card, a badge, a dropdown. These are solved problems, but every team solves them again in slightly different ways, producing inconsistent UIs and wasted hours.",
                "Existing open-source libraries like shadcn/ui and MUI are excellent but opinionated. They either require specific styling systems, impose their own design language, or make it hard to extract just the components you need without pulling in the entire library.",
                "BlockUI was built to offer something simpler: a small, well-tested set of components that you install once, use everywhere, and style to match your own design system without fighting the library.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: "#666", lineHeight: 1.75 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* How */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>The Approach</p>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              npm install. Import. Done.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 40 }}>
              Components are built with TypeScript for type safety and developer experience, styled with plain CSS variables for maximum theming flexibility, and bundled with Rollup for clean tree-shakeable output. Every component is documented in Storybook with live examples, prop tables, and usage guidelines.
            </p>
            <div style={{ background: "#161616", border: "1px solid #1d1d1d", borderRadius: 8, padding: 24, marginBottom: 32, fontFamily: "monospace" }}>
              <p style={{ fontSize: 11, color: "#555", marginBottom: 12 }}>Terminal</p>
              <p style={{ fontSize: 13, color: "#4ade80" }}>$ npm install @saheedibikunle/blockui</p>
              <br />
              <p style={{ fontSize: 11, color: "#555", marginBottom: 12 }}>Usage</p>
              <pre style={{ fontSize: 12, color: "#F5F5F5", margin: 0, lineHeight: 1.8 }}>{`import { Button, Input, Modal } from '@saheedibikunle/blockui';

export default function App() {
  return (
    <Button variant="primary" size="md">
      Get Started
    </Button>
  );
}`}</pre>
            </div>
          </div>
        </div>

        <Divider />

        {/* Screenshots */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Screens</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5" }}>
            Interactive docs for every component.
          </h2>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Screen label="Component Catalogue">
            <div style={{ display: "flex", height: "100%" }}>
              <div style={{ width: 140, background: "#161616", borderRight: "1px solid #1d1d1d", padding: 12 }}>
                <p style={{ fontSize: 9, color: "#555", marginBottom: 10, letterSpacing: "0.15em" }}>COMPONENTS</p>
                {["Button","Input","Modal","Card","Badge","Alert"].map((c, i) => (
                  <p key={c} style={{ fontSize: 10, color: i === 0 ? "#fb923c" : "#444", padding: "3px 6px", marginBottom: 2 }}>{c}</p>
                ))}
              </div>
              <div style={{ flex: 1, padding: 16 }}>
                <p style={{ fontSize: 12, color: "#F5F5F5", marginBottom: 12, fontWeight: 600 }}>Input</p>
                <div style={{ background: "#1a1a1a", border: "1px solid #222", borderRadius: 4, padding: "6px 10px", marginBottom: 8 }}>
                  <p style={{ fontSize: 10, color: "#555" }}>Default input...</p>
                </div>
                <div style={{ background: "#1a1a1a", border: "1px solid #fb923c", borderRadius: 4, padding: "6px 10px", marginBottom: 8 }}>
                  <p style={{ fontSize: 10, color: "#F5F5F5" }}>Focused input</p>
                </div>
                <div style={{ background: "#1a1a1a", border: "1px solid #f87171", borderRadius: 4, padding: "6px 10px" }}>
                  <p style={{ fontSize: 10, color: "#f87171" }}>Error state</p>
                </div>
              </div>
            </div>
          </Screen>

          <Screen label="Component Props">
            <div style={{ padding: 16 }}>
              <p style={{ fontSize: 12, color: "#F5F5F5", marginBottom: 16, fontWeight: 600 }}>Badge</p>
              <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                {[
                  { label: "Default", color: "#333" },
                  { label: "Success", color: "#166534" },
                  { label: "Warning", color: "#854d0e" },
                  { label: "Error", color: "#7f1d1d" },
                ].map(b => (
                  <span key={b.label} style={{ fontSize: 9, background: b.color, color: "#F5F5F5", padding: "2px 8px", borderRadius: 20, letterSpacing: "0.05em" }}>{b.label}</span>
                ))}
              </div>
              <div style={{ background: "#161616", border: "1px solid #1d1d1d", borderRadius: 4, padding: 10, fontFamily: "monospace" }}>
                <p style={{ fontSize: 9, color: "#818cf8" }}>variant: "default" | "success" | "warning" | "error"</p>
                <p style={{ fontSize: 9, color: "#4ade80" }}>size: "sm" | "md"</p>
                <p style={{ fontSize: 9, color: "#fb923c" }}>rounded: boolean</p>
              </div>
            </div>
          </Screen>

          <Screen label="npm Package">
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, background: "#fb923c", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ fontSize: 14, color: "#000", fontWeight: 600 }}>B</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#F5F5F5", fontWeight: 600 }}>@saheedibikunle/blockui</p>
                  <p style={{ fontSize: 10, color: "#555" }}>v1.2.0</p>
                </div>
              </div>
              {[
                { label: "Weekly downloads", val: "1.2k" },
                { label: "Unpacked size", val: "48.3 kB" },
                { label: "License", val: "MIT" },
                { label: "TypeScript", val: "Yes" },
              ].map(s => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #1d1d1d", padding: "7px 0" }}>
                  <span style={{ fontSize: 10, color: "#555" }}>{s.label}</span>
                  <span style={{ fontSize: 10, color: "#F5F5F5" }}>{s.val}</span>
                </div>
              ))}
            </div>
          </Screen>
        </div>

        <Divider />

        {/* Features */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Key Features</p>
          <div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              What ships with BlockUI.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { t: "TypeScript First", d: "Every component ships with full TypeScript types. Prop tables are auto-generated from type definitions, keeping docs always in sync." },
                { t: "Storybook Documentation", d: "Interactive Storybook with live component rendering, prop controls, accessibility checks, and copy-paste code examples." },
                { t: "Accessible by Default", d: "Components follow WAI-ARIA patterns. Focus management, keyboard navigation, and screen reader announcements are built in, not bolted on." },
                { t: "Themeable", d: "Styling is driven by CSS custom properties. Override any token at the root level and every component responds, with no class name conflicts." },
                { t: "Tree Shakeable", d: "Bundled with Rollup for clean ESM output. Import only the components you use and the rest never enters your bundle." },
                { t: "npm Distribution", d: "Published to npm under @saheedibikunle/blockui. Install with npm, yarn, or pnpm. No peer dependency conflicts on modern React projects." },
              ].map((f) => (
                <div key={f.t} style={{ border: "1px solid #1d1d1d", padding: 24 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#F5F5F5", marginBottom: 10 }}>{f.t}</p>
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.65 }}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* Conclusion */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Conclusion</p>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              Tooling built for the developer next to you.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "BlockUI started as an internal toolkit I built at Lumina Learning. The frontend team kept duplicating component work across projects, and each version was slightly inconsistent. I extracted the common patterns into a shared library and over time it became a proper open-source package.",
                "Building it taught me a lot about the non-obvious challenges of library authorship: how to write components that are flexible enough to be useful in any context without becoming a framework themselves, how to bundle for both CommonJS and ESM without breaking anything, and how to write documentation that makes adoption obvious rather than frustrating.",
                "The experience also gave me genuine appreciation for the work behind libraries like Radix UI and Headless UI. Good component libraries are hard to do well. The API design matters as much as the implementation.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: "#666", lineHeight: 1.75 }}>{p}</p>
              ))}
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 20, flexWrap: "wrap" }}>
              <a href="https://blockui-storybook.vercel.app/" target="_blank" rel="noreferrer" style={{ padding: "12px 28px", background: "#F5F5F5", color: "#111", fontSize: 13, textDecoration: "none", fontWeight: 600, display: "inline-block" }}>
                View Storybook ↗
              </a>
              <a href="https://www.npmjs.com/package/@saheedibikunle/blockui" target="_blank" rel="noreferrer" style={{ padding: "12px 28px", border: "1px solid #333", color: "#F5F5F5", fontSize: 13, textDecoration: "none", display: "inline-block" }}>
                npm Package ↗
              </a>
              <a href="/" style={{ padding: "12px 28px", border: "1px solid #222", color: "#555", fontSize: 13, textDecoration: "none", display: "inline-block" }}>
                ← Back to Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        body { font-family: 'Exo 2', sans-serif; }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 200px"] { grid-template-columns: 1fr !important; gap: 16px !important; }
          div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="padding: 120px 40px"] { padding: 88px 24px 60px !important; }
          div[style*="padding: 0 40px"] { padding: 0 24px !important; }
        }
      `}</style>
    </div>
  );
}
