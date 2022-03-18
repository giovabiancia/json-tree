import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../../context/MainContext";

const _ = require("lodash");

function InputCheckBox({ k, data }) {
  const [checked, setChecked] = useState(data[k]);
  const [mainContext, setMainContext] = useContext(MainContext);
  const handleCheckBoxChange = (nodo, k, e) => {
    setChecked((prev) => !prev);
    // copia dell' albero
    var newAlbero = _.cloneDeep(mainContext);

    // modifica il nodo

    nodo[k] = e;

    function updateTree(newAlbero, nuovoNodo) {
      // trova l' id del nodo all' interno dell' albero
      let idNuovoNodo = nuovoNodo.id;

      for (let key in newAlbero) {
        const val = newAlbero[key];
        if (val === idNuovoNodo) {
          //console.log("albero a cui sostituire il nodo:", newAlbero);
          // sostituire il valore alla copia dell' albero nello stesso ramo
          newAlbero[k] = e;
          //console.log("nodo trovato da sostituire ad albero ", nuovoNodo);
          //TODO   sostituisci il nuovo nodo nell' albero
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
