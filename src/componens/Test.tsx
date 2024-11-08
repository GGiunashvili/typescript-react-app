import { useState } from "react";
export default function Test() {
  const [buttonOne, setButtonOne] = useState(0);
  function eventHandler() {
    setButtonOne(buttonOne + 1);
  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={eventHandler}>you clicked me {buttonOne}</button>
      </div>
    </>
  );
}
