


// import React, { useState } from "react";

// function Ekkk() {
//   const [data, setdata] = useState({ names: "", price: "" });
//   const [namelist, setnamelist] = useState([]);
//   const [total, settotal] = useState(0);
//   const [errors, setErrors] = useState({ names: "", price: "" });

//   let handlechange = (e) => {
//     let value = e.target.value;
//     let name = e.target.name;

//     setdata((pv) => ({
//       ...pv,
//       [name]: value,
//     }));

//     // Clear errors when input changes
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   let handle = () => 
//   {
//     let isValid = true;

//     // Validate product name
//     if (data.names.length === 0) 
//     {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         names: true,
//       }));
//       isValid = false;
//     }

//     // Validate product price
//     if (isNaN(data.price) || data.price === "")
//      {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         price: true,
//       }));
//       isValid = false;
//     }

//     if (isValid) 
//     {
//       setnamelist([...namelist, data]);
//       settotal((pvto) => pvto + parseInt(data.price));
//       setdata({ names: "", price: "" }); // Clear input fields after successful submission
//     }
//   };

//   return (
//     <div>
//       <label>product name</label>
//       <br />
//       <input
//         name={"names"}
//         onChange={handlechange}
//         type={"text"}
//         value={data.names}
//       />
//       {errors.names && <p>{errors.names}enter name</p>}
//       <br />
//       <label>product price</label>
//       <br />
//       <input
//         name={"price"}
//         onChange={handlechange}
//         type={"text"}
//         value={data.price}
//       />
//       {errors.price && <p>{errors.price} enter price</p>}
//       <br />
//       <button onClick={handle}>submit</button>
//       {namelist.map((x, index) => (
//         <li key={index}>{`${x.names}-${x.price}`}</li>
//       ))}
//       {total !== 0 && <p>total: {total}</p>}
//     </div>
//   );
// }

// export default Ekkk;


import React, { useState } from "react";

function App() {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  const [data, setdata] = useState(items);
  const [list, setlist] = useState([]);

  let add = (x) => {
    setlist([...list, x]);
    setdata(data.filter((m) => m != x));
  };

  let remove = (x) => {
    setlist(list.filter((m) => m != x));
    setdata([...data, x]);
  };
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div
        style={{
          border: "2px solid black",
          margin: "10px",
          height: "130px",
          width: "130px",
        }}
      >
        {data.map((x) => (
          <li>
            {x}
            <button onClick={() => add(x)}>add</button>
          </li>
        ))}
      </div>
      <div
        style={{
          border: "2px solid black",
          margin: "10px",
          height: "130px",
          width: "170px",
        }}
      >
        {list.map((x) => (
          <li>
            {x}
            <button onClick={() => remove(x)}>remove</button>
          </li>
        ))}
      </div>
    </div>
  );
}
export default App;



