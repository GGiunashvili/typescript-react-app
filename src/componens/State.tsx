import { useState } from "react";
import { sculptureList } from "./Data.js";

export default function State({
  index,
  handleClick,
}: {
  index: number;
  handleClick: () => void;
}) {
  const [more, setMore] = useState(false);
  function handleMore() {
    setMore(!more);
  }
  return (
    <div>
      <button onClick={handleClick}>next</button>

      <div style={{ height: "auto", width: "1000px" }}>
        <button onClick={handleMore}>{more ? "show less" : "show more"}</button>

        {more && <p>{sculptureList[index].description}</p>}
        <h1 style={{ fontSize: "12px" }}>Sculpture List</h1>
        <div>
          <h2 style={{ fontSize: "12px" }}>{sculptureList[index].name}</h2>
          <p style={{ fontSize: "12px" }}>by {sculptureList[index].artist}</p>
          <img
            style={{ height: "100px" }}
            src={sculptureList[index].url}
            alt={sculptureList[index].alt}
          />
          <p style={{ fontSize: "12px" }}>{sculptureList[index].description}</p>
        </div>
      </div>
    </div>
  );
}
