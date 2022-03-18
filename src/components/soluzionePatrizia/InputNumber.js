import React, { useState, useContext } from "react";
import { MainContext } from "./../../context/MainContext";
export function InputNumber({ k, data }) {
  const [mainContext, setMainContext] = useContext(MainContext);
  const [number, setNumber] = useState(data[k]);
  const handleNumberChange = (e) => {
    // setta il main context
    console.log(data);
    setNumber(e);
  };
  return (
    <div key={k}>
      {k}:{" "}
      <input
        type="number"
        onChange={(e) => handleNumberChange(e.target.value)}
        value={number}
      ></input>
    </div>
  );
}
