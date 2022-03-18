import React, { useState, useContext } from "react";
import { MainContext } from "./../../context/MainContext";
const _ = require("lodash");
export function InputNumber({ k, data }) {
  const [mainContext, setMainContext] = useContext(MainContext);
  const [number, setNumber] = useState(data[k]);
  const handleNumberChange = (node, k, e) => {
    // setta il main context
    console.log(data);
    setNumber(e);
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
  }, [number]); */
  return (
    <div key={k}>
      {k}:{" "}
      <input
        type="number"
        onChange={(e) => handleNumberChange(data, k, e.target.value)}
        value={number}
      ></input>
    </div>
  );
}
