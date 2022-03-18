import Component, { useContext, useEffect, useState } from "react";
import { Card } from "./components/soluzionePatrizia/Card";
import InputCheckBox from "./components/soluzionePatrizia/InputCheckBox";
import { InputNumber } from "./components/soluzionePatrizia/InputNumber";
import { MainContext } from "./context/MainContext";
import { InputString } from "./components/soluzionePatrizia/InputString";
import { InputSelect } from "./components/soluzionePatrizia/InputSelect";

const SolTree = ({ data }) => {
  return Object.keys(data).map((k, i) => {
    if (k === "ids") return null;

    //TODO gestisci campo array

    if (Array.isArray(data[k])) {
      const Select = <InputSelect data={data[k]} k={k} />;

      return Select;
    }

    if (typeof data[k] === "boolean") {
      return <InputCheckBox key={i} k={k} data={data} />;
    } else if (typeof data[k] === "number") {
      return <InputNumber key={i} k={k} data={data} />;
    } else if (typeof data[k] === "string") {
      return <InputString key={i} k={k} data={data} />;
    } else {
      return <Card key={i} k={k} data={data[k]}></Card>;
    }
  });
};

export default SolTree;
