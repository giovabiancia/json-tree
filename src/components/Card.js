import Component, { useEffect, useState } from "react";
import SolTree from "../SolTree";
export function Card({ k, data, i }) {
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState("");

  const handleClickIndex = () => {
    setExpanded((prev) => !prev);
    // il numero di iterazione per ottenere il livello del nodo
  };
  return (
    <div className="card ">
      <div className="card-header" key={k} id={"heading" + k}>
        <h5 className="mb-0">
          <button
            className={expanded ? "btn btn-link" : "btn btn-link collapsed"}
            data-toggle="collapse"
            data-target={"#collapse" + k}
            aria-expanded={expanded ? "true" : "false"}
            aria-controls={"collapse" + k}
            onClick={handleClickIndex}
          >
            {k.replace(/-/g, " ")}
          </button>
        </h5>
      </div>
      <div
        id={"#collapse" + k}
        className={expanded ? "collapse show" : "collapse"}
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div
          className="card-body mt-2"
          style={{
            paddingLeft: "15px",
          }}
        >
          <SolTree key={`${k}tree`} data={data} />
        </div>
      </div>
    </div>
  );
}
