export default function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555" }}>
      {index} / {title}
    </p>
  );
}
