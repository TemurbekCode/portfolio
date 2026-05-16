import { useEffect, useRef } from "react";
import "./Skills.css";

const TOTAL_PIXELS = 20;

const skillGroups = [
  {
    category: "// frontend",
    color: "#378ADD",
    items: [
      { name: "HTML5 & CSS3",      pct: 95 },
      { name: "JavaScript (ES6+)", pct: 88 },
      { name: "React & Vite",      pct: 98 },
      { name: "Bootstrap 5",       pct: 20 },
      { name: "Git & GitHub",      pct: 85 },
    ],
  },
];

function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

function litColor(color, index, max) {
  const { r, g, b } = hexToRgb(color);
  const alpha = +(0.38 + (index / max) * 0.62).toFixed(2);
  return `rgba(${r},${g},${b},${alpha})`;
}

function PixelRow({ name, pct, color }) {
  const litCount = Math.round((pct / 100) * TOTAL_PIXELS);
  const pixelRefs = useRef([]);

  const handleMouseEnter = () => {
    pixelRefs.current.forEach((px, i) => {
      if (!px) return;
      setTimeout(() => {
        if (i < litCount) {
          px.style.background = litColor(color, i, TOTAL_PIXELS - 1);
          px.style.borderColor = "transparent";
          px.classList.add("pixel--lit");
          px.classList.remove("pixel--pop");
          void px.offsetWidth;
          px.classList.add("pixel--pop");
        } else {
          px.style.background = "";
          px.style.borderColor = "";
          px.classList.remove("pixel--lit", "pixel--pop");
        }
      }, i * 28);
    });
  };

  return (
    <div className="skill-row" onMouseEnter={handleMouseEnter}>
      <span className="skill-name">{name}</span>

      <div className="pixel-track" aria-hidden="true">
        {Array.from({ length: TOTAL_PIXELS }, (_, i) => (
          <div
            key={i}
            ref={(el) => (pixelRefs.current[i] = el)}
            className={`pixel ${i < litCount ? "pixel--lit" : ""}`}
            style={i < litCount ? { background: litColor(color, i, TOTAL_PIXELS - 1), borderColor: "transparent" } : {}}
          />
        ))}
      </div>

      <span className="skill-pct">{pct}%</span>
    </div>
  );
}

function Skills() {
  return (
    <div className="skillsContainer">
      <section className="skills-section">

        <div className="skills-header">
          <div>
            <p className="skills-eyebrow">what i bring</p>
            <h1 className="skills-title">
              my <span className="skills-title__accent">skills_</span>
            </h1>
          </div>
          <div className="legend">
            <div className="legend-item">
              <div className="legend-box legend-box--empty" />
              <span>empty</span>
            </div>
            <div className="legend-item">
              <div className="legend-box legend-box--filled" />
              <span>filled</span>
            </div>
          </div>
        </div>

        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="category-label" style={{ color: group.color }}>
              {group.category}
            </p>
            {group.items.map((skill, idx) => (
              <div key={skill.name}>
                <PixelRow
                  name={skill.name}
                  pct={skill.pct}
                  color={group.color}
                />
                {idx < group.items.length - 1 && (
                  <div className="row-divider" />
                )}
              </div>
            ))}
          </div>
        ))}

      </section>
    </div>
  );
}

export default Skills;