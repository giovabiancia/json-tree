import React from "react";

export default function Label(props) {
  const handleClick = () => {
    console.log(props.treeData[props.value]);
    /* console.log("value:", props.value);
    console.log("parentKey:", props.parentKey);
    console.log("rootKey:", props.rootKey);
    console.log("treeData:", props.treeData); */
  };
  return <p onClick={handleClick}>{props.value}</p>;
}
