import React from "react";

function SkillsBar({ skill, value, isScrolled, isTechnical }) {
  return (
    <div style={{ width: "95%", marginBottom: '1.5rem' }}>
      <p className="lead mb-2" style={{
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 500
      }}>
        {skill}
      </p>
      {!isTechnical && (
        <div style={{
          background: 'var(--ai-navy-700)',
          borderRadius: '8px',
          overflow: 'hidden',
          height: '10px'
        }}>
          <div
            className={!isScrolled ? "progress" : "progress-bar-animation skill-bar-gradient"}
            style={{
              width: `${value}%`,
              transition: 'width 1s ease-out',
              height: '100%'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SkillsBar;
