import Component, { useContext, useEffect, useState } from "react";
import { Card } from "./components/soluzionePatrizia/Card";
import InputCheckBox from "./components/soluzionePatrizia/InputCheckBox";
import { InputNumber } from "./components/soluzionePatrizia/InputNumber";
import { MainContext } from "./context/MainContext";

const SolTree = ({ data }) => {
  return Object.keys(data).map((k) => {
    if (typeof data[k] === "boolean") {
      return <InputCheckBox k={k} data={data} />;
    } else if (typeof data[k] === "number") {
      return <InputNumber k={k} data={data} />;
    } else {
      return <Card k={k} data={data[k]}></Card>;
    }
  });
};

export default SolTree;
