import { useEffect, useState } from "react";

const presets = [
  { name: "Aurora", bg: "linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)" },
  { name: "Warm Sunset", bg: "linear-gradient(135deg,#ff7a5a 0%,#ffb86b 100%)" },
  { name: "Minimal Light", bg: "#F7F8FA" },
  { name: "Modern Ocean", bg: "linear-gradient(135deg,#052A4A 0%,#023E73 100%)" },
  { name: "Violet Dream", bg: "linear-gradient(135deg,#3a1c71 0%,#d76d77 100%)" },
];

function ThemePreview() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--bg", presets[idx].bg);
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
