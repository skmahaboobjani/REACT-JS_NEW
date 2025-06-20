import React, { useState, useEffect, useCallback } from "react";
import C from "./C";

function P() {
  const [count, setcount] = useState(0);

  let adding = () => {
    console.log("rendering parent");
    setcount(count + 1);
  };

  const learning = () => {};

  //   const learning = useCallback(() => {}, []);

  return (
    <div>
      <C learning={learning} />
      {count}
      <button onClick={adding}>add</button>
    </div>
  );
}
export default P;
