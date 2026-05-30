"use client";
import CaseNav from "@/components/CaseNav";
import BrowserMock from "@/components/ui/BrowserMock";
import Divider from "@/components/ui/Divider";

const SITE_URL = "authplug.vercel.app";

function Screen({ label, children }: { label: string; children: React.ReactNode }) {
  return <BrowserMock label={label} url={SITE_URL}>{children}</BrowserMock>;
}

export default function AuthPlugCase() {
  return (
    <div style={{ background: "#111111", color: "#F5F5F5", fontFamily: "'Exo 2', sans-serif", minHeight: "100vh" }}>
      <CaseNav />

      {/* Hero */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 80px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#555", marginBottom: 20 }}>
            02 / Case Study
          </p>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
            <div>
              <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.03em", color: "#F5F5F5", marginBottom: 16 }}>AuthPlug</h1>
              <p style={{ fontSize: 18, color: "#666", maxWidth: 560, lineHeight: 1.6 }}>
                A plug-and-play authentication service developers can drop into any application via REST API, with 2FA included out of the box.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
              <a href="https://authplug.vercel.app/" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#F5F5F5", border: "1px solid #333", padding: "10px 20px", textDecoration: "none", display: "inline-block", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5F5F5")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333")}
              >
                View Live App ↗
              </a>
              <div style={{ display: "flex", gap: 16, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444" }}>
                <span>Live</span>
                <span>2023</span>
                <span>Personal Project</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1d1d1d", borderBottom: "1px solid #1d1d1d", padding: "32px 0", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {[
            { l: "Type", v: "SaaS / API Service" },
            { l: "Stack", v: "Next.js · Node.js · PostgreSQL" },
            { l: "Auth", v: "JWT · TOTP 2FA · Sessions" },
            { l: "Status", v: "Live" },
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
          <div style={{ aspectRatio: "16/7", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center", padding: 40 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#1a1a2a", border: "1px solid #2a2a3a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 20 }}>🔐</div>
              <p style={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 600, color: "#F5F5F5", marginBottom: 12, letterSpacing: "-0.02em" }}>Authentication, solved.</p>
              <p style={{ fontSize: 14, color: "#555", marginBottom: 32 }}>Drop-in auth for any stack · REST API · 2FA included</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <div style={{ background: "#818cf8", color: "#000", padding: "10px 24px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>Get API Key</div>
                <div style={{ border: "1px solid #333", color: "#F5F5F5", padding: "10px 24px", borderRadius: 6, fontSize: 12 }}>View Docs</div>
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
              Developers rebuild authentication from scratch on every project.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "Registration, login, password reset, email verification, JWT token management, session expiry, two-factor authentication. Every new application needs all of this. And most developers build it from scratch every time, spending days on a problem that's already been solved thousands of times.",
                "Existing solutions either require vendor lock-in (Auth0, Clerk) with high per-user pricing at scale, or they're incomplete libraries that still leave the developer responsible for integrating all the pieces correctly.",
                "AuthPlug was built to offer a third path: a self-hostable, framework-agnostic service that you integrate once via REST API and never think about again.",
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
              One API call to register. One to log in. Everything else handled.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 40 }}>
              AuthPlug exposes a clean REST API that any application can call, regardless of the framework it uses. The calling application never stores passwords or tokens directly; AuthPlug handles all credential management and returns short-lived JWTs with configurable expiry. 2FA is opt-in per user and uses TOTP, compatible with any authenticator app.
            </p>
            <div style={{ background: "#161616", border: "1px solid #1d1d1d", borderRadius: 8, padding: 24, marginBottom: 32, fontFamily: "monospace" }}>
              <p style={{ fontSize: 11, color: "#555", marginBottom: 16, letterSpacing: "0.1em" }}>POST /auth/register</p>
              <pre style={{ fontSize: 12, color: "#818cf8", margin: 0, lineHeight: 1.8, overflow: "auto" }}>{`{
  "email": "user@example.com",
  "password": "••••••••••••"
}

// Response
{
  "token": "eyJhbGciOiJIUzI1...",
  "user": { "id": "usr_01...", "email": "..." },
  "expiresIn": 3600
}`}</pre>
            </div>
          </div>
        </div>

        <Divider />

        {/* Screenshots */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Screens</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5" }}>
            Clean flows for developers and end users.
          </h2>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Screen label="Developer Dashboard">
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: "#F5F5F5", fontWeight: 600 }}>My Project</p>
                <span style={{ fontSize: 10, background: "#1a1a2a", color: "#818cf8", padding: "3px 8px", borderRadius: 4 }}>Active</span>
              </div>
              <p style={{ fontSize: 10, color: "#444", marginBottom: 6 }}>API Key</p>
              <div style={{ background: "#1a1a1a", border: "1px solid #222", borderRadius: 6, padding: "8px 12px", marginBottom: 20 }}>
                <p style={{ fontSize: 10, color: "#555", fontFamily: "monospace" }}>ap_live_xKj8mN2pQr...</p>
              </div>
              {[{ label: "Registered users", val: "1,240" }, { label: "Active sessions", val: "89" }, { label: "2FA enabled", val: "312" }].map(s => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #1d1d1d", padding: "8px 0" }}>
                  <span style={{ fontSize: 11, color: "#555" }}>{s.label}</span>
                  <span style={{ fontSize: 11, color: "#F5F5F5" }}>{s.val}</span>
                </div>
              ))}
            </div>
          </Screen>

          <Screen label="Login Flow">
            <div style={{ padding: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#F5F5F5", marginBottom: 24 }}>Sign In</p>
              <div style={{ width: "100%", maxWidth: 260 }}>
                <div style={{ background: "#1a1a1a", border: "1px solid #222", borderRadius: 6, padding: "10px 14px", marginBottom: 10 }}>
                  <p style={{ fontSize: 11, color: "#555" }}>Email</p>
                </div>
                <div style={{ background: "#1a1a1a", border: "1px solid #818cf8", borderRadius: 6, padding: "10px 14px", marginBottom: 16 }}>
                  <p style={{ fontSize: 11, color: "#555" }}>Password</p>
                </div>
                <div style={{ background: "#818cf8", borderRadius: 6, padding: "10px 0", textAlign: "center", marginBottom: 12 }}>
                  <p style={{ fontSize: 12, color: "#000", fontWeight: 600 }}>Sign In</p>
                </div>
                <p style={{ fontSize: 10, color: "#444", textAlign: "center" }}>Forgot password?</p>
              </div>
            </div>
          </Screen>

          <Screen label="2FA Setup">
            <div style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#F5F5F5", marginBottom: 8 }}>Enable 2FA</p>
              <p style={{ fontSize: 10, color: "#555", marginBottom: 16, textAlign: "center" }}>Scan with any authenticator app</p>
              <div style={{ width: 80, height: 80, background: "#1a1a1a", border: "1px solid #222", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <div style={{ width: 60, height: 60, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
                  {Array.from({length: 9}).map((_, i) => (
                    <div key={i} style={{ background: [0,2,6,8,4].includes(i) ? "#818cf8" : "#222", borderRadius: 2 }} />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 10, color: "#555", marginBottom: 8 }}>Or enter code manually</p>
              <p style={{ fontSize: 10, color: "#818cf8", fontFamily: "monospace", marginBottom: 16 }}>JBSW Y3DP EHPK 3PXP</p>
              <div style={{ display: "flex", gap: 6 }}>
                {Array.from({length: 6}).map((_, i) => (
                  <div key={i} style={{ width: 28, height: 36, background: "#1a1a1a", border: "1px solid #222", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ fontSize: 14, color: i === 0 ? "#818cf8" : "#333" }}>{i === 0 ? "4" : ""}</p>
                  </div>
                ))}
              </div>
            </div>
          </Screen>
        </div>

        <Divider />

        {/* Features */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Key Features</p>
          <div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              Full auth, zero setup time.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { t: "REST API", d: "Clean, documented endpoints for registration, login, logout, token refresh, and user management. Works with any frontend or backend." },
                { t: "TOTP Two-Factor Auth", d: "TOTP-based 2FA compatible with Google Authenticator, Authy, and any RFC 6238 compliant app. Opt-in per user." },
                { t: "JWT Token Management", d: "Stateless authentication using signed JWTs with configurable expiry, automatic refresh, and revocation support." },
                { t: "Session Handling", d: "Persistent sessions with device tracking, concurrent session limits, and forced logout from all devices." },
                { t: "Password Reset Flow", d: "Secure password reset via time-limited email tokens, with configurable expiry and rate limiting to prevent abuse." },
                { t: "Developer Dashboard", d: "API key management, user analytics, session monitoring, and integration health checks in a single dashboard." },
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
              Authentication should be a solved problem.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "AuthPlug was built out of frustration. Every new project I started required the same authentication setup: register, log in, reset password, generate tokens, handle expiry, add 2FA if required. It's boilerplate, and yet every team rebuilds it from scratch.",
                "The goal with AuthPlug was to make it genuinely drop-in. Not a library that still requires configuration and wiring. A running service that accepts HTTP calls and returns working auth tokens. A developer should be able to add full authentication to an application in under an hour.",
                "Building it also deepened my understanding of security principles around credential storage, token signing, TOTP time windows, and safe password reset flows. These aren't things you encounter at depth unless you build the system yourself.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: "#666", lineHeight: 1.75 }}>{p}</p>
              ))}
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 20, flexWrap: "wrap" }}>
              <a href="https://authplug.vercel.app/" target="_blank" rel="noreferrer" style={{ padding: "12px 28px", background: "#F5F5F5", color: "#111", fontSize: 13, textDecoration: "none", fontWeight: 600, display: "inline-block" }}>
                View Live App ↗
              </a>
              <a href="/" style={{ padding: "12px 28px", border: "1px solid #333", color: "#F5F5F5", fontSize: 13, textDecoration: "none", display: "inline-block" }}>
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
