import Component, { useEffect, useState } from "react";

const conf = {
  landing: true,
  visibile: true,
  attivo: true,
  cards: {
    visibile: true,
    visualizzazioni: true,
    contatti: true,
    attivita: true,
    visite: false,
  },
  mappa: {
    visibile: true,
    visualizzazioni: true,
    contatti: true,
    attivita: true,
    visite: true,
    preferiti: true,
  },
  "top-performers": {
    visibile: true,
    kpi: {
      visualizzazioni: true,
      contatti: true,
    },
    attivita: {
      attivita: true,
      visite: 13,
    },
  },
  preferiti: true,
};

const Tree = ({ data }) => {
  return Object.keys(data).map((k) => {
    if (typeof data[k] === "boolean") {
      return (
        <div key={k}>
          {k}: {data[k] === true ? "checked" : "non checked"}
        </div>
      );
    } else if (typeof data[k] === "number") {
      return <div key={k}>{k}: input field</div>;
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
