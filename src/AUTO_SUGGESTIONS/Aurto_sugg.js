import React, { useState, useEffect } from "react";

function App() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Grape", "Lemon"];

  const [data, setdata] = useState(items);
  const [inp, setinp] = useState("");
  const [err, seterr] = useState(false);

  let filtered_data = data.filter((x) =>
    x.toLowerCase().includes(inp.toLowerCase())
  );

  useEffect(() => {
    if (filtered_data.length === 0) {
      seterr(true);
    } else {
      seterr(false);
    }
  }, [filtered_data]);

  return (
    <div>
      <h1>auto suggention</h1>
      <input
        type={"text"}
        value={inp}
        onChange={(e) => setinp(e.target.value)}
      />
      {
        // data.filter((x) => x.toLowerCase().includes(inp.toLowerCase()))
        filtered_data.map((x) => (
          <li key={x}>{x}</li>
        ))
      }
      {err && <p>items not found</p>}
    </div>
  );
}
export default App;
