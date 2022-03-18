import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";

const _ = require("lodash");

function InputCheckBox({ k, data }) {
  const [checked, setChecked] = useState(data[k]);
  const [mainContext, setMainContext] = useContext(MainContext);
  const handleCheckBoxChange = (node, k, e) => {
    setChecked((prev) => !prev);
    var newTree = _.cloneDeep(mainContext);
    function updateTree(newTree, newNode) {
      let idNewNode = newNode.ids;
      for (let key in newTree) {
        const val = newTree[key];
        if (val === idNewNode) {
          newTree[k] = e;
        }
        if (typeof val === "object") {
          updateTree(val, newNode);
        }
      }
    }
    updateTree(newTree, node, k, e);
    setMainContext(newTree);
  };

  return (
    <div key={k}>
      {k}:{" "}
      <input
        type="checkbox"
        onChange={(e) => handleCheckBoxChange(data, k, e.target.checked)}
        checked={checked}
      ></input>
    </div>
  );
}
export default InputCheckBox;
