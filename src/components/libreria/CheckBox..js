import React from "react";

export default function CheckBox(props) {
  const handleCheckBox = (e) => {
    /* props.raw
      props.value
      props.keyPath
      props.treeData */

    console.log("valore checkbox: ", e.target.checked);
    console.log("keypath: ", props.keyPath);
  };
  return (
    <>
      {props.raw !== "true" && props.raw !== "false" && (
        <input type="text" value={props.raw}></input>
      )}

      {props.raw === "true" && (
        <input
          type="checkbox"
          checked={JSON.parse(props.raw)}
          onChange={(e) => handleCheckBox(e)}
        ></input>
      )}
      {props.raw === "false" && (
        <input
          type="checkbox"
          checked={JSON.parse(props.raw)}
          onChange={(e) => handleCheckBox(e)}
        ></input>
      )}
    </>
  );
}
