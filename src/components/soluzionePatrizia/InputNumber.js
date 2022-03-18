import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../../context/MainContext";
const _ = require("lodash");
export function InputNumber({ k, data }) {
  const [mainContext, setMainContext] = useContext(MainContext);
  const [number, setNumber] = useState(data[k]);
  const handleNumberChange = (nodo, k, e) => {
    // setta il main context
    console.log(data);
    setNumber(e);
    // copia dell' albero
    var newAlbero = _.cloneDeep(mainContext);
    // modifica il nodo
    nodo[k] = e;
    function updateTree(newAlbero, nuovoNodo) {
      // trova l' id del nodo all' interno dell' albero
      let idNuovoNodo = nuovoNodo.ids;

      for (let key in newAlbero) {
        const val = newAlbero[key];
        if (val === idNuovoNodo) {
          //console.log("albero a cui sostituire il nodo:", newAlbero);
          // sostituire il valore alla copia dell' albero nello stesso ramo
          newAlbero[k] = e;
        }
        // controlla se ha figli
        if (typeof val === "object") {
          updateTree(val, nuovoNodo);
        }
      }
    }
    updateTree(newAlbero, nodo, k, e);
    setMainContext(newAlbero);
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
