import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../context/MainContext";

const _ = require("lodash");
export function InputNumber({ k, data }) {
  const [mainContext, setMainContext] = useContext(MainContext);
  const [number, setNumber] = useState(data[k]);
  const handleNumberChange = (node, k, e) => {
    setNumber(e);
    var newTree = _.cloneDeep(mainContext);
    function updateTree(newTree, newNode) {
      let idNewNode = newNode.ids;
      for (let key in newTree) {
        const val = newTree[key];
        if (val === idNewNode) {
          newTree[k] = parseInt(e);
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
    <div key={k} className="form-group row">
      <label className="col-sm-2 col-form-label">{k}</label>
      <div className="col-sm-10">
        <input
          type="number"
          className="form-control"
          onChange={(e) => handleNumberChange(data, k, e.target.value)}
          value={number}
        ></input>
      </div>
    </div>
  );
}
