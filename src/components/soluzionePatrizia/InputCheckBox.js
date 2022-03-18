import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../../context/MainContext";

const _ = require("lodash");

function InputCheckBox({ k, data }) {
  const [checked, setChecked] = useState(data[k]);
  const [mainContext, setMainContext] = useContext(MainContext);
  const handleCheckBoxChange = (node, k, e) => {
    setChecked((prev) => !prev);
    // copia dell' albero
    var newTree = _.cloneDeep(mainContext);

    // modifica il nodo
    node[k] = e;
    function updateTree(newTree, newNode) {
      // trova l' id del nodo all' interno dell' albero
      let idNewNode = newNode.ids;

      for (let key in newTree) {
        const val = newTree[key];
        if (val === idNewNode) {
          //console.log("albero a cui sostituire il nodo:", newTree);
          // sostituire il valore alla copia dell' albero nello stesso ramo
          newTree[k] = e;
        }
        // controlla se ha figli
        if (typeof val === "object") {
          updateTree(val, newNode);
        }
      }
    }
    updateTree(newTree, node, k, e);
    setMainContext(newTree);
  };

  /* useEffect(() => {
    console.log(mainContext);
  }, [checked]); */

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
