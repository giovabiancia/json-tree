import React, { useState } from "react";

function InputCheckBox({ k, data }) {
  const [checked, setChecked] = useState(data[k]);
  const handleCheckBoxChange = (data, k, e) => {
    setChecked((prev) => !prev);
    console.log("nodo: ", data);
    // dato il nodo ottieni tutti i padri es. landing ha solo ['dashboard']

    console.log("il valore del nodo da cambiare: ", data[k]);

    // data[k] = e;

    // ... copia dello stato globale.
    // aggiornamento stato globale dell' elemento nel nodo
    // treeData['dashbooard']['cards']
    console.log(k, ":", e);
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
