import { useEffect, useState } from "react";

const presets = [
  {
    name: "Aurora",
    bg: "linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)",
    text: "#d8e7ec", textH: "#ffffff", card: "rgba(10, 25, 32, 0.72)",
    accent: "#67e8f9", accentText: "#08232b", border: "rgba(164, 231, 244, 0.24)",
    code: "rgba(0, 0, 0, 0.25)", accentBg: "rgba(103, 232, 249, 0.14)",
  },
  {
    name: "Warm Sunset",
    bg: "linear-gradient(135deg,#ff7a5a 0%,#ffb86b 100%)",
    text: "#4a211a", textH: "#2c1110", card: "rgba(255, 246, 232, 0.72)",
    accent: "#9a3412", accentText: "#ffffff", border: "rgba(92, 34, 18, 0.2)",
    code: "rgba(255, 255, 255, 0.45)", accentBg: "rgba(154, 52, 18, 0.1)",
  },
  {
    name: "Minimal Light",
    bg: "#F7F8FA",
    text: "#4b5563", textH: "#0b2545", card: "#ffffff",
    accent: "#0B3D91", accentText: "#ffffff", border: "rgba(11, 37, 69, 0.12)",
    code: "#f1f5f9", accentBg: "rgba(11, 61, 145, 0.06)",
  },
  {
    name: "Modern Ocean",
    bg: "linear-gradient(135deg,#052A4A 0%,#023E73 100%)",
    text: "#c8e4f5", textH: "#ffffff", card: "rgba(3, 28, 54, 0.76)",
    accent: "#67e8f9", accentText: "#052A4A", border: "rgba(103, 232, 249, 0.25)",
    code: "rgba(0, 0, 0, 0.25)", accentBg: "rgba(103, 232, 249, 0.14)",
  },
  {
    name: "Violet Dream",
    bg: "linear-gradient(135deg,#3a1c71 0%,#d76d77 100%)",
    text: "#f7eafa", textH: "#ffffff", card: "rgba(53, 22, 81, 0.68)",
    accent: "#f0abfc", accentText: "#3a1c71", border: "rgba(240, 171, 252, 0.28)",
    code: "rgba(36, 10, 58, 0.3)", accentBg: "rgba(240, 171, 252, 0.16)",
  },
];

function ThemePreview() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const theme = presets[idx];
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== "name") {
        const cssKey = key
          .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
          .replace("card", "card-bg");
        root.style.setProperty(`--${cssKey}`, value);
      }
    });
  }, [idx]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % presets.length), 3500);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div className="theme-preview" aria-live="polite">
      <div className="tp-controls">
        <button className="tp-btn" onClick={() => setIdx((i) => (i - 1 + presets.length) % presets.length)} aria-label="Previous">‹</button>
        <button className="tp-btn tp-play" onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
        <button className="tp-btn" onClick={() => setIdx((i) => (i + 1) % presets.length)} aria-label="Next">›</button>
      </div>
      <div className="tp-label">Preview: {presets[idx].name}</div>
    </div>
  );
}

export default ThemePreview;
