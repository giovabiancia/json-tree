import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../../context/MainContext";
const _ = require("lodash");
export function InputSelect({ k, data }) {
  const [mainContext, setMainContext] = useContext(MainContext);
  const [string, setString] = useState(data.toString());
  const handleStringChange = (node, k, e) => {
    setString(e);
    var newTree = _.cloneDeep(mainContext);
    node[k] = e;
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
    <div style={{ display: "flex" }}>
      <label>{k}: </label>
      <input
        className="form-control"
        value={string}
        onChange={handleStringChange}
      ></input>
    </div>
  );
}
