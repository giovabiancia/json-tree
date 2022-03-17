import Component, { useEffect, useState } from "react";
import { Card } from "./components/soluzionePatrizia/Card";

const SolTree = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState("");
  const handleIndex = (title, value) => {
    console.log(title, value);
  };

  const handleExpand = (k) => {
    setIndex(k);
    setExpanded((prev) => !prev);
  };
  const handleInputChange = () => {};

  return Object.keys(data).map((k) => {
    if (typeof data[k] === "boolean") {
      return (
        <div key={k} onClick={() => handleIndex(k, data[k])}>
          {k}:{" "}
          <input
            type="checkbox"
            onChange={() => handleInputChange(k, data[k])}
            checked={data[k]}
          ></input>
        </div>
      );
    } else if (typeof data[k] === "number") {
      return (
        <div key={k}>
          {k}:{" "}
          <input
            type="number"
            onChange={() => handleInputChange(k, data[k])}
            value={data[k]}
          ></input>
        </div>
      );
    } else {
      return <Card k={k} data={data[k]}></Card>;
    }
  });
};

export default SolTree;
