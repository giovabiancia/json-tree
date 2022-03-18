import { Card } from "./components/Card";
import InputCheckBox from "./components/InputCheckBox";
import { InputNumber } from "./components/InputNumber";
import { InputSelect } from "./components/InputSelect";
import { InputString } from "./components/InputString";

const SolTree = ({ data }) => {
  return Object.keys(data).map((k, i) => {
    if (k === "ids") return null;

    if (Array.isArray(data[k])) {
      return <InputSelect key={i} k={k} data={data[k]} />;
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
