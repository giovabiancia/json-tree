import Component, { useEffect, useState } from "react";

const Tree = ({ data }) => {
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
      return (
        <div className="card">
          <div className="card-header" key={k} id={"heading" + k}>
            <h5 className="mb-0">
              <button
                className={
                  expanded && index === k
                    ? "btn btn-link "
                    : "btn btn-link collapsed"
                }
                data-toggle="collapse"
                data-target={"#collapse" + k}
                aria-expanded={expanded && index === k ? "true" : "false"}
                aria-controls={"collapse" + k}
                onClick={() => handleExpand(k)}
              >
                {k}
              </button>
            </h5>
          </div>
          <div
            id={"#collapse" + k}
            className={expanded && index === k ? "collapse show" : "collapse"}
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body" style={{ paddingLeft: "15px" }}>
              <Tree key={`${k}tree`} data={data[k]} />
            </div>
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
