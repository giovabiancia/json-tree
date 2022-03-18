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
    <div key={k} className="form-group row">
      <label class="col-sm-2 col-form-label">{k}</label>

      <div className="col-sm-10">
        <input
          type="checkbox"
          className="form-control"
          onChange={(e) => handleCheckBoxChange(data, k, e.target.checked)}
          checked={checked}
        ></input>
      </div>
    </div>
  );
}
export default InputCheckBox;
