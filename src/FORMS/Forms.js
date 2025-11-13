// import Reat, { useState } from "react"

// function Forms()
// {
//     const [data,setdata]=useState({names:[],fullname:[],age:[]})
//     const [list,setlist]=useState([])

//     let handlechange=(e)=>
//     {

//         let value=e.target.value
//         let name=e.target.name
//         setdata((pv)=>({

//             ...pv,
//             [name]:value



//         }))

//     }

//     let handel=()=>
//     {
//        setlist([...list,data])
//     }
//     return(
//         <div>
//    <label>USERNAME</label><br/>
//             <input type={"text"} name={"names"} onChange={handlechange}/><br/>
//             <label>Full Name</label><br/>
//             <input type={"text"} name={"fullname"} onChange={handlechange}/><br/>
//             <label>age</label><br/>
//             <input type={"number"} name={"age"} onChange={handlechange}/><br/>
//             <button onClick={handel}>submit</button>

//          {list.map((x)=>
//         (
//             <>
//             {x.names}<br/>
//             {x.fullname}<br/>
//             {x.age}
//             </>
            
//          ))}
//         </div>
//     )

// }
// export default Forms












import React, { useState } from "react";
function App() {
  const [data, setdata] = useState({ name: "", email: "", number: "" });
  const [err, seterr] = useState("");

  let handlechange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = () => {
    if (!data.name || !data.email || !data.number) {
      seterr("please enter all details before submitting");
    } else {
      seterr("");
      console.log(data);

      alert("form submitted succesfully");
    }
  };
  return (
    <div>
      <h1>forms</h1>
      <input
        type={"text"}
        value={data.name}
        name={"name"}
        onChange={handlechange}
      />
      <br />
      <input
        type={"email"}
        value={data.email}
        name={"email"}
        onChange={handlechange}
      />
      <br />
      <input
        type={"number"}
        value={data.number}
        name={"number"}
        onChange={handlechange}
      />
      <br />
      <button onClick={submit}>submit</button>
      <br />
      <p style={{ color: "red" }}>{err}</p>
      {/* {err} */}
    </div>
  );
}
export default App;



















