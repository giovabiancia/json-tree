import React from "react";
import Branch from "./Branch/BranchCustom";

export default function TreeCustom({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Branch key={item.id} item={item} level={0}></Branch>
      ))}
    </div>
  );
}
