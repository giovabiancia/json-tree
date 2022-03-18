import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "./../../context/MainContext";
export function ButtonSave({}) {
  const [mainContext, setMainContext] = useContext(MainContext);

  return (
    <div className="row mt-4">
      <div className="col-12">
        <button className="btn btn-primary">Salva Configurazione</button>
      </div>
    </div>
  );
}
