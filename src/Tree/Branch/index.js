import React from "react";
import { useState } from "react";
import Node from "../Node";

export default function Branch({ item, level }) {
  const [selected, setSelected] = useState(item.selected ?? false);

  const checkIfHasChildren = (item) => {
    // controlla che item non ha figli tra tutte le proprietà
    // e che i figli.length !== 0

    Object.keys(item).map((key) => {
      if (typeof item[key] !== "string") {
        return true;
      }
    });

    return false;
  };

  console.log(checkIfHasChildren(item));
  const hasChildren = item.children && item.children.length !== 0;

  const renderBranches = () => {
    if (hasChildren) {
      const newLevel = level + 1;

      return item.children.map((child) => {
        return <Branch key={child.id} item={child} level={newLevel}></Branch>;
      });
    }
    return null;
  };
  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };
  return (
    <>
      <Node
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleSelected}
      ></Node>

      {selected && renderBranches()}
    </>
  );
}
