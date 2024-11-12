import { useState } from "react";

export default function ArtShop() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }
  function delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  return (
    <div>
      <p>pending {pending}</p>
      <p>completed {completed}</p>
      <button onClick={handleClick}>buy</button>
    </div>
  );
}
