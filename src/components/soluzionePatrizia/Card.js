import React from "react";
import Tree from "./../../Tree/index";
export function Card({ k, data }) {
  return (
    <div className="card">
      <div className="card-header" key={k} id={"heading" + k}>
        <h5 className="mb-0">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target={"#collapse" + k}
            aria-expanded="false"
            aria-controls={"collapse" + k}
          >
            {k}
          </button>
        </h5>
      </div>
      <div
        id={"#collapse" + k}
        className="collapse "
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div
          className="card-body"
          style={{
            paddingLeft: "15px",
          }}
        >
          <Tree key={`${k}tree`} data={data} />
        </div>
      </div>
    </div>
  );
}
