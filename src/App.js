import Component, { useEffect, useState } from "react";
import "./App.css";

import { JSONTree } from "react-json-tree";
import CheckBox from "./components/libreria/CheckBox.";
import Label from "./components/libreria/Label";
import Tree from "./Tree";
import { DATA } from "./constants/constants";
import SolTree from "./SolTree";

function App() {
  const theme = {
    scheme: "monokai",
    author: "wimer hazenberg (http://www.monokai.nl)",
    base00: "#272822",
    base01: "#383830",
    base02: "#49483e",
    base03: "#75715e",
    base04: "#a59f85",
    base05: "#f8f8f2",
    base06: "#f5f4f1",
    base07: "#f9f8f5",
    base08: "#f92672",
    base09: "#fd971f",
    base0A: "#f4bf75",
    base0B: "#a6e22e",
    base0C: "#a1efe4",
    base0D: "#66d9ef",
    base0E: "#ae81ff",
    base0F: "#cc6633",
  };
  const [treeData, setTreeData] = useState([]);
  const [mainSections, setMainSections] = useState([]);
  useEffect(() => {
    fetch("./assets/UIconfigs.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        setTreeData(data);
        setMainSections(Object.keys(data));
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4 className="text-danger">Con libreria</h4>

          {/* <JSONTree
            hideRoot
            getItemString={(type, data, itemType, itemString, keyPath) => <></>}
            theme={theme}
            data={treeData}
            invertTheme={true}
            labelRenderer={([key, parentKey, rootKey]) => (
              <Label
                value={key.replace(/-/g, " ")}
                parentKey={parentKey}
                rootKey={rootKey}
                treeData={treeData}
              ></Label>
            )}
            valueRenderer={(raw, value, keyPath) => (
              <CheckBox
                raw={raw}
                value={value}
                keyPath={keyPath}
                treeData={treeData}
              ></CheckBox>
            )}
          /> */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="text-danger">Senza libreria</h4>

          {/* <Tree data={DATA} /> */}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h4 className="text-danger">Senza libreria soluzione patrizia</h4>

          <SolTree treeData={treeData} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <button className="btn btn-primary">Salva Configurazione</button>
        </div>
      </div>
    </div>
  );
}

export default App;
