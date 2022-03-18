import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../../context/MainContext";
export function ButtonSave({}) {
  const [mainContext, setMainContext] = useContext(MainContext);

  const handleSave = () => {
    //TODO controlla 1 solo landing true al primo livello
    //TODO che ci sia almeno una attiva e visibile
    fetch("https://www.realitycs.it/api/post", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mainContext),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <button className="btn btn-primary" onClick={handleSave}>
          Salva Configurazione
        </button>
      </div>
    </div>
  );
}
