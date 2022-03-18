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
      <label className="col-sm-2">{k}</label>

      <div className="col-sm-10">
        <div class="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={(e) => handleCheckBoxChange(data, k, e.target.checked)}
            checked={checked}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default InputCheckBox;
