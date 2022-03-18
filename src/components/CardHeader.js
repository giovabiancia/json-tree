import React from "react";
export function CardHeader({ k }) {
  return (
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
  );
}
