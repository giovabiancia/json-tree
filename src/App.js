import Component, { useEffect, useState } from "react";
import "./App.css";

import { JSONTree } from "react-json-tree";
import CheckBox from "./components/libreria/CheckBox.";
import Label from "./components/libreria/Label";
import Tree from "./Tree/TreeCustom";
import { DATA } from "./constants/constants";
import SolTree from "./SolTree";
import { MainContextProvider } from "./context/MainContext";
import { ButtonSave } from "./components/soluzionePatrizia/ButtonSave";

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
        let counter = 0;
        function addIds(data) {
          for (const item in data) {
            if (typeof data[item] == "object") {
              data[item].ids = counter++;
              addIds(data[item], counter);
            }
          }
        }
        addIds(data, 1);

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
      <MainContextProvider>
        <div className="row mt-4">
          <div className="col-12">
            <h4 className="text-danger">Senza libreria </h4>

            <div>
              <SolTree data={treeData} />
            </div>
          </div>
        </div>
        <ButtonSave></ButtonSave>
      </MainContextProvider>
    </div>
  );
}

export default App;
