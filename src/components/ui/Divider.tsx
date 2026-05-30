export default function Divider({ margin = 80 }: { margin?: number }) {
  return <div style={{ height: 1, background: "#1d1d1d", margin: `${margin}px 0` }} />;
}
