import React from "react";
import { useState } from "react";

import NodeCustom from "../Node/NodeCustom";

export default function BranchCustom({ item, level }) {
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
        return (
          <BranchCustom
            key={child.id}
            item={child}
            level={newLevel}
          ></BranchCustom>
        );
      });
    }
    return null;
  };
  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };
  return (
    <>
      <NodeCustom
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleSelected}
      ></NodeCustom>

      {selected && renderBranches()}
    </>
  );
}
