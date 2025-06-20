import React, { useState } from "react";

function App() {
  const employees = [
    {
      id: 1,
      first_name: "Jaymee",
      last_name: "Imm",
      email: "jimm0@craigslist.org",
      gender: "Genderqueer",
      age: 80,
    },
    {
      id: 2,
      first_name: "Jody",
      last_name: "Themann",
      email: "jthemann1@skyrock.com",
      gender: "Agender",
      age: 29,
    },
    {
      id: 3,
      first_name: "Cece",
      last_name: "Carlet",
      email: "ccarlet2@jalbum.net",
      gender: "Male",
      age: 69,
    },
    {
      id: 4,
      first_name: "Elton",
      last_name: "Allinson",
      email: "eallinson3@jugem.jp",
      gender: "Male",
      age: 31,
    },
  ];

  const [list, setlist] = useState([]);
  
  let adding = (x) => {
    let exist_name = list.find((m, n) => m.first_name === x.first_name);

    if (exist_name) {
      setlist((pvlist) => {
        return pvlist.map((m, n) =>
          m.first_name === x.first_name ? { ...m, count: m.count + 1 } : m
        );
      });
    } else {
      setlist([...list, { ...x, count: 1 }]);
    }
  };

  let removed = (x) => {
    let exist_empl = list.find((m, n) => m.first_name === x.first_name);

    if (exist_empl && exist_empl.count > 0) {
      setlist((pvlist) => {
        return pvlist.map((m, n) =>
          m.first_name === x.first_name ? { ...m, count: m.count - 1 } : m
        );
      });
    } else {
      setlist((pvlist) =>
        pvlist.filter((m, n) => m.first_name !== x.first_name)
      );
    }
  };

  return (
    <div>
      {employees.map((x) => (
        <li>
          {x.first_name}
          <button onClick={() => adding(x)}>+</button>
          <button onClick={() => removed(x)}>-</button>
        </li>
      ))}
      {list.map((x) => (
        <li>
          {x.first_name}-Count:{x.count}
        </li>
      ))}
    </div>
  );
}
export default App;
