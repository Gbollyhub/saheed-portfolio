"use client";
import CaseNav from "@/components/CaseNav";
import BrowserMock from "@/components/ui/BrowserMock";
import Divider from "@/components/ui/Divider";

const SITE_URL = "mycrosspay.vercel.app";

function Screen({ label, children }: { label: string; children: React.ReactNode }) {
  return <BrowserMock label={label} url={SITE_URL}>{children}</BrowserMock>;
}

export default function CrossPayCase() {
  return (
    <div style={{ background: "#111111", color: "#F5F5F5", fontFamily: "'Exo 2', sans-serif", minHeight: "100vh" }}>
      <CaseNav />

      {/* Hero */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 40px 80px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "#555", marginBottom: 20 }}>
            01 / Case Study
          </p>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
            <div>
              <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.03em", color: "#F5F5F5", marginBottom: 16 }}>CrossPay</h1>
              <p style={{ fontSize: 18, color: "#666", maxWidth: 560, lineHeight: 1.6 }}>
                A cross-border payments platform that removes the cost and delay of traditional banking intermediaries for UK to Africa transfers.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
              <a href="https://mycrosspay.vercel.app/" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#F5F5F5", border: "1px solid #333", padding: "10px 20px", textDecoration: "none", display: "inline-block", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F5F5F5")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333")}
              >
                View Live App ↗
              </a>
              <div style={{ display: "flex", gap: 16, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444" }}>
                <span>Live</span>
                <span>2024</span>
                <span>Personal Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary bar */}
        <div style={{ borderTop: "1px solid #1d1d1d", borderBottom: "1px solid #1d1d1d", padding: "32px 0", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {[
            { l: "Type", v: "Full Stack" },
            { l: "Stack", v: "Next.js · Node.js · PostgreSQL" },
            { l: "Payments", v: "Stripe · Flutterwave" },
            { l: "Status", v: "Live" },
          ].map(({ l, v }) => (
            <div key={l}>
              <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: 6 }}>{l}</p>
              <p style={{ fontSize: 13, color: "#F5F5F5" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero screenshot mockup */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 80px" }}>
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #1d1d1d", background: "#161616" }}>
          <div style={{ height: 40, background: "#1a1a1a", borderBottom: "1px solid #1d1d1d", display: "flex", alignItems: "center", padding: "0 16px", gap: 8 }}>
            {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
              <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.6 }} />
            ))}
            <div style={{ marginLeft: 16, height: 20, flex: 1, borderRadius: 6, background: "#222", maxWidth: 280, display: "flex", alignItems: "center", paddingLeft: 10 }}>
              <span style={{ fontSize: 11, color: "#444" }}>mycrosspay.vercel.app</span>
            </div>
          </div>
          <div style={{ aspectRatio: "16/7", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            {/* Simulated landing page */}
            <div style={{ textAlign: "center", padding: 40 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#1a2a1a", border: "1px solid #2a3a2a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 20 }}>💸</div>
              <p style={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 600, color: "#F5F5F5", marginBottom: 12, letterSpacing: "-0.02em" }}>Send Money Home</p>
              <p style={{ fontSize: 14, color: "#555", marginBottom: 32 }}>UK to Africa · Near-instant · Low fees</p>
              <div style={{ display: "inline-block", background: "#4ade80", color: "#000", padding: "12px 32px", borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Get Started</div>
            </div>
            <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 16 }}>
              {["Send", "Receive", "Exchange", "History"].map((item) => (
                <span key={item} style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em" }}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 120px" }}>

        {/* Problem */}
        <Divider />
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>The Problem</p>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              International transfers are slow, expensive, and opaque.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "Traditional cross-border transfers between the UK and Africa pass through a chain of correspondent banks. Each hop adds cost and delay. A transfer that should take seconds takes 3 to 5 business days, and fees compound at every stage, typically consuming 5 to 8% of the amount sent.",
                "The recipient has no visibility into where their money is. The sender has no guarantee of the rate they'll receive. And banks profit from the opacity at every step.",
                "For families sending money home, or businesses paying suppliers across borders, this is a broken experience. The infrastructure was never designed for speed or fairness. It was designed for intermediary profit.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: "#666", lineHeight: 1.75 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* How */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>The Approach</p>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              Money doesn't cross borders. Settlement does.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 40 }}>
              CrossPay uses a liquidity pool model. Instead of routing money through correspondent banks, the platform holds locally denominated funds in the UK (via Stripe) and in Africa (via Flutterwave). When a user sends money, the platform deducts from the UK pool and simultaneously disburses the equivalent from the African pool, after applying a live exchange rate with a transparent margin.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {[
                { step: "01", title: "User initiates a transfer", desc: "Sender enters the amount and recipient details. Live exchange rate is displayed with full fee breakdown before confirmation." },
                { step: "02", title: "UK pool deducted via Stripe", desc: "Funds are debited from the sender's account through Stripe's payment infrastructure, reducing the UK liquidity balance." },
                { step: "03", title: "African pool disbursed via Flutterwave", desc: "The equivalent local-currency amount is immediately released from the Flutterwave-managed African pool." },
                { step: "04", title: "Reconciliation on the backend", desc: "The system logs the transaction, updates both pool balances, and flags any drift for automated rebalancing." },
              ].map((s) => (
                <div key={s.step} style={{ border: "1px solid #1d1d1d", padding: 24 }}>
                  <p style={{ fontSize: 28, fontWeight: 600, color: "#1d1d1d", marginBottom: 16, letterSpacing: "-0.02em" }}>{s.step}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#F5F5F5", marginBottom: 8 }}>{s.title}</p>
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* Screenshots */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start", marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Screens</p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5" }}>
            Built for clarity at every step.
          </h2>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Screen label="Dashboard">
            <div style={{ padding: 24 }}>
              <p style={{ fontSize: 11, color: "#4ade80", marginBottom: 16 }}>Balance</p>
              <p style={{ fontSize: 32, fontWeight: 600, color: "#F5F5F5", marginBottom: 4 }}>£2,450.00</p>
              <p style={{ fontSize: 11, color: "#555", marginBottom: 24 }}>Available to send</p>
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {["Send","Receive","Exchange"].map(btn => (
                  <div key={btn} style={{ flex: 1, background: "#1a2a1a", border: "1px solid #2a3a2a", borderRadius: 6, padding: "8px 0", textAlign: "center" }}>
                    <p style={{ fontSize: 10, color: "#4ade80" }}>{btn}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 10, color: "#333", marginBottom: 8 }}>Recent</p>
              {[{ to: "Lagos, NG", amt: "₦85,000", date: "Today" }, { to: "Accra, GH", amt: "GH₵320", date: "Yesterday" }].map((tx, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #1d1d1d", padding: "8px 0" }}>
                  <span style={{ fontSize: 11, color: "#555" }}>{tx.to}</span>
                  <span style={{ fontSize: 11, color: "#F5F5F5" }}>{tx.amt}</span>
                </div>
              ))}
            </div>
          </Screen>

          <Screen label="Send Money">
            <div style={{ padding: 24 }}>
              <p style={{ fontSize: 11, color: "#555", marginBottom: 16 }}>Send to</p>
              <div style={{ background: "#1a1a1a", border: "1px solid #222", borderRadius: 6, padding: "10px 14px", marginBottom: 16 }}>
                <p style={{ fontSize: 12, color: "#F5F5F5" }}>recipient@email.com</p>
              </div>
              <p style={{ fontSize: 11, color: "#555", marginBottom: 8 }}>You send</p>
              <div style={{ background: "#1a1a1a", border: "1px solid #4ade80", borderRadius: 6, padding: "10px 14px", marginBottom: 4, display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: 16, color: "#F5F5F5", fontWeight: 600 }}>100.00</p>
                <p style={{ fontSize: 12, color: "#555" }}>GBP</p>
              </div>
              <p style={{ fontSize: 10, color: "#4ade80", marginBottom: 16 }}>Rate: 1 GBP = 1,620 NGN</p>
              <p style={{ fontSize: 11, color: "#555", marginBottom: 8 }}>They receive</p>
              <div style={{ background: "#1a2a1a", border: "1px solid #2a3a2a", borderRadius: 6, padding: "10px 14px", marginBottom: 24 }}>
                <p style={{ fontSize: 16, color: "#4ade80", fontWeight: 600 }}>162,000 NGN</p>
              </div>
              <div style={{ background: "#4ade80", borderRadius: 6, padding: "10px 0", textAlign: "center" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#000" }}>Confirm Transfer</p>
              </div>
            </div>
          </Screen>

          <Screen label="Exchange Rates">
            <div style={{ padding: 20 }}>
              <p style={{ fontSize: 12, color: "#F5F5F5", marginBottom: 16, fontWeight: 600 }}>Live Rates</p>
              {[
                { pair: "GBP / NGN", rate: "1,620.50", change: "+0.8%" },
                { pair: "GBP / GHS", rate: "16.42", change: "+1.2%" },
                { pair: "GBP / KES", rate: "168.30", change: "-0.3%" },
                { pair: "GBP / ZAR", rate: "23.85", change: "+0.5%" },
              ].map((r) => (
                <div key={r.pair} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #1d1d1d", padding: "10px 0" }}>
                  <span style={{ fontSize: 11, color: "#666" }}>{r.pair}</span>
                  <span style={{ fontSize: 12, color: "#F5F5F5" }}>{r.rate}</span>
                  <span style={{ fontSize: 10, color: r.change.startsWith("+") ? "#4ade80" : "#f87171" }}>{r.change}</span>
                </div>
              ))}
            </div>
          </Screen>
        </div>

        <Divider />

        {/* Key features */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Key Features</p>
          <div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              Everything needed to move money simply.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { t: "Wallet Management", d: "Multi-currency wallet with real-time balance tracking and transaction history across all supported corridors." },
                { t: "Live Exchange Engine", d: "Real-time exchange rate calculation with transparent fee breakdown shown before every transaction confirmation." },
                { t: "Liquidity Settlement", d: "Pool-based architecture using Stripe (UK) and Flutterwave (Africa) for near-instant local disbursement without correspondent banking." },
                { t: "Transaction Ledger", d: "Full audit trail for every transfer including timestamps, rates applied, pool movements, and reconciliation status." },
                { t: "KYC Verification", d: "Identity verification flow integrated into the onboarding process to meet regulatory requirements for money transmission." },
                { t: "Recipient Management", d: "Save and manage recipient details for frequent transfers, with bank account validation for each supported country." },
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
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>Conclusion</p>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F5F5F5", marginBottom: 32 }}>
              A payments infrastructure I'd use myself.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "CrossPay was built to solve a real problem I've observed directly: sending money from the UK to family and friends in Nigeria is still harder, slower, and more expensive than it should be in 2024. The technology to fix this exists. It just hadn't been assembled in the right way.",
                "The liquidity pool approach was the key architectural decision. By pre-funding both ends and handling reconciliation asynchronously, the user experience becomes near-instant even though the underlying settlement is complex. That tradeoff, hiding backend complexity to deliver a simple frontend experience, is something I care deeply about.",
                "This project also gave me hands-on experience building financial systems end to end: designing the transaction ledger, handling exchange rate drift, integrating two payment providers with different APIs and edge cases, and making the whole thing reliable enough to trust with real money.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: "#666", lineHeight: 1.75 }}>{p}</p>
              ))}
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 20, flexWrap: "wrap" }}>
              <a href="https://mycrosspay.vercel.app/" target="_blank" rel="noreferrer" style={{ padding: "12px 28px", background: "#F5F5F5", color: "#111", fontSize: 13, textDecoration: "none", fontWeight: 600, display: "inline-block" }}>
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
