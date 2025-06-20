import React, { useState } from "react";


function App() {
  const [range, setRange] = useState(0);
  const [num, setNum] = useState(null);

  const handleChange = (e) => {
    let value = parseInt(e.target.value);

    // if (!isNaN(value)) {
      setNum(value);
      setRange(value);
    // }
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Backspace') {
  //     setNum(null);
  //     setRange(0);
  //   }
  // };

  return (
    <div>
      <input 
        type="range" 
        value={range} 
        onChange={(e) => setRange(parseInt(e.target.value))} 
        className="range-input" 
      />
      <input 
        type="number" 
        value={num} 
        onChange={handleChange} 
        // onKeyDown={handleKeyDown} 
        style={{ marginTop: "10px" }} 
      />
    </div>
  );
}

export default App;
