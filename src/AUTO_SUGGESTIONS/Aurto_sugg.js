import React, { useState, useEffect } from "react";

function App() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Grape", "Lemon"];

  const [data, setdata] = useState("");
  const [err, seterr] = useState(false);

  let filtereditems = items.filter((x, y) =>
    x.toLowerCase().includes(data.toLowerCase())
  );

  useEffect(() => {
    if (filtereditems.length === 0) {
      seterr(true);
    } else {
      seterr(false);
    }
  }, [filtereditems]);
  return (
    <div>
      <input
        placeholder={"type something"}
        onChange={(e) => setdata(e.target.value)}
      />
      {filtereditems.map((x, y) => (
        <li> {x}</li>
      ))}
      {err && <p>not found {err}</p>}
    </div>
  );
}

export default App;
