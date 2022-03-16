import React from "react";
import Branch from "./Branch";

export default function Tree({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Branch key={item.id} item={item} level={0}></Branch>
      ))}
    </div>
  );
}
