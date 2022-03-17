import Component, { useEffect, useState } from "react";

const Tree = ({ data }) => {
  const handleIndex = (title, value) => {
    console.log(title, value);
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
      return (
        <div key={k}>
          {k}
          <div style={{ padding: "5px" }}>
            <Tree key={`${k}tree`} data={data[k]} />
          </div>
        </div>
      );
    }
  });
};

function SolTree(props) {
  return (
    <div>
      <Tree data={props.treeData} />
    </div>
  );
}

export default SolTree;
