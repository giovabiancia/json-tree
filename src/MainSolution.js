import React from "react";
import SolTree from "./SolTree";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { ButtonSave } from "./components/soluzionePatrizia/ButtonSave";

export default function MainSolution() {
  const [mainContext, setMainContext] = useContext(MainContext);
  return (
    <div className="row mt-4">
      <div className="col-12">
        <h4 className="text-danger">Senza libreria </h4>

        <div>
          <SolTree data={mainContext} />
          <ButtonSave></ButtonSave>
        </div>
      </div>
    </div>
  );
}
