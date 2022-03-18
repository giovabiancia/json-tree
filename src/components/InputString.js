import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../context/MainContext";

const _ = require("lodash");
export function InputString({ k, data }) {
  const [mainContext, setMainContext] = useContext(MainContext);
  const [string, setString] = useState(data[k]);
  const handleStringChange = (node, k, e) => {
    setString(e);
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
        type="string"
        onChange={(e) => handleStringChange(data, k, e.target.value)}
        value={string}
      ></input>
    </div>
  );
}
