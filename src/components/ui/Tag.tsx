export default function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#666",
        border: "1px solid #222",
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "'Exo 2', sans-serif",
      }}
    >
      {label}
    </span>
  );
}
