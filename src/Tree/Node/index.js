import React from "react";

export default function Node({ item, hasChildren, level, onToggle }) {
  return (
    <div style={{ paaddingLeft: level * 16 + "px" }}>
      {item.label}
      {hasChildren && <button onClick={onToggle}>toggle</button>}
    </div>
  );
}
