import React, { useState } from "react";
export function InputNumber({ k, data }) {
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
