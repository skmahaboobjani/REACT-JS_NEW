

import React, { useState, useMemo } from "react";

function App() {
  const [count_one, setcount_one] = useState(0);
  const [count_two, setcount_two] = useState(0);

  let counter_one = () => {
    setcount_one(count_one + 1);
  };

  let counter_two = () => {
    setcount_two(count_two + 1);
  };

  // let even = useMemo(() => {
  //   console.log("something");
  //   i = 0;
  //   while (i < 200000) {
  //     return count_one % 2 == 0;
  //   }
  // }, [count_one]);

  function even() {
    console.log("rendering");
    let i = 0;
    while (i < 200) {
      i++;
      return count_one % 2 == 0;
    }
  }

  return (
    <div>
      <h1>use memeo</h1>
      {count_one}
      <span>{even() ? "even" : "odd"}</span>
      <br />
      <button onClick={counter_one}>counter_one</button>
      <br />
      {count_two}
      <br />
      <button onClick={counter_two}>counter_two</button>
    </div>
  );
}
export default App;
