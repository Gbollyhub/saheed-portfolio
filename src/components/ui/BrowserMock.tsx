/** Shared browser-chrome frame used in case study screenshot sections. */
export default function BrowserMock({
  label,
  url,
  children,
}: {
  label: string;
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ flex: 1, minWidth: 280 }}>
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#555",
          marginBottom: 12,
        }}
      >
        {label}
      </p>
      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #1d1d1d",
          background: "#161616",
        }}
      >
        {/* Chrome bar */}
        <div
          style={{
            height: 32,
            background: "#1a1a1a",
            borderBottom: "1px solid #1d1d1d",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: 6,
          }}
        >
          {(["#ff5f57", "#febc2e", "#28c840"] as const).map((c) => (
            <span
              key={c}
              style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.6 }}
            />
          ))}
          <div
            style={{
              marginLeft: 12,
              height: 16,
              flex: 1,
              borderRadius: 4,
              background: "#222",
              maxWidth: 200,
              display: "flex",
              alignItems: "center",
              paddingLeft: 8,
            }}
          >
            <span style={{ fontSize: 9, color: "#444" }}>{url}</span>
          </div>
        </div>
        {/* Content area */}
        <div
          style={{
            aspectRatio: "16/10",
            background: "#111",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
