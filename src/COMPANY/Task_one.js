// import React, { useState } from "react";


// function Task_one() {
//   const employees = [
//     {
//       id: 1,
//       first_name: "Jaymee",
//       last_name: "Imm",
//       email: "jimm0@craigslist.org",
//       gender: "Genderqueer",
//       age: 80,
//     },
//     {
//       id: 2,
//       first_name: "Jody",
//       last_name: "Themann",
//       email: "jthemann1@skyrock.com",
//       gender: "Agender",
//       age: 29,
//     },
//     {
//       id: 3,
//       first_name: "Cece",
//       last_name: "Carlet",
//       email: "ccarlet2@jalbum.net",
//       gender: "Male",
//       age: 69,
//     },
//     {
//       id: 4,
//       first_name: "Elton",
//       last_name: "Allinson",
//       email: "eallinson3@jugem.jp",
//       gender: "Male",
//       age: 31,
//     },
//     {
//       id: 5,
//       first_name: "Garvy",
//       last_name: "Shaddick",
//       email: "gshaddick4@rediff.com",
//       gender: "Male",
//       age: 32,
//     },
//     {
//       id: 6,
//       first_name: "Fin",
//       last_name: "Realy",
//       email: "frealy5@unc.edu",
//       gender: "Male",
//       age: 26,
//     },
//     {
//       id: 7,
//       first_name: "Minnaminnie",
//       last_name: "Fransseni",
//       email: "mfransseni6@aboutads.info",
//       gender: "Agender",
//       age: 52,
//     },
//     {
//       id: 8,
//       first_name: "Fernando",
//       last_name: "Pagon",
//       email: "fpagon7@blogs.com",
//       gender: "Male",
//       age: 40,
//     },
//   ];
//   const [data, setdata] = useState(employees);

//   const [list, setlist] = useState([]);
//   const [average, setaverage] = useState("");

//   let adding = (x) => {
//     setlist([...list, x]);
//     setdata(data.filter((m, n) => m !== x));
//   };

//   let removed = (x) => {
//     setdata([...data, x]);

//     setlist(list.filter((m, n) => m !== x));
//   };

//   let sorting = () => {
//     let sortwhole = [...list];
//     sortwhole.sort((a, b) => a.age - b.age);
//     setlist(sortwhole);
//   };

//   let calculate = () => {
//     let total = list.reduce((acc, curr) => acc + curr.age, 0);
//     let len = list.length;
//     let whole_average = total / len;
//     setaverage(whole_average);
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ border: "1px solid black", marginRight: "10px" }}>
//         <h1>employyes</h1>
//         {data.map((x, y) => (
//           <li key={y}>
//             {`${x.first_name}-${x.age}`}
//             <button onClick={() => adding(x)}>add</button>
//           </li>
//         ))}
//       </div>
//       <div style={{ border: "1px solid black" }}>
//         <h1>cards</h1>
//         {list.map((x) => (
//           <li>
//             {`${x.first_name}-${x.age}`}{" "}
//             <button onClick={() => removed(x)}>remove</button>
//           </li>
//         ))}
//         <button onClick={sorting}>sort</button>
//         <span>{average}</span>
//         <button onClick={calculate}>calculate_average</button>
//       </div>
//     </div>
//   );
// }
// export default Task_one;















import React,{useState} from "react"
function App()
    {

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
    {
      id: 5,
      first_name: "Garvy",
      last_name: "Shaddick",
      email: "gshaddick4@rediff.com",
      gender: "Male",
      age: 32,
    },
    {
      id: 6,
      first_name: "Fin",
      last_name: "Realy",
      email: "frealy5@unc.edu",
      gender: "Male",
      age: 26,
    },
    {
      id: 7,
      first_name: "Minnaminnie",
      last_name: "Fransseni",
      email: "mfransseni6@aboutads.info",
      gender: "Agender",
      age: 52,
    },
    {
      id: 8,
      first_name: "Fernando",
      last_name: "Pagon",
      email: "fpagon7@blogs.com",
      gender: "Male",
      age: 40,
    },
  ];

        const [data,setdata]=useState(employees)
        const [list,setlist]=useState([])

        const add=(x)=>
            {
                 setlist([x,...list])
                 setdata(data.filter((m)=>m.id!=x.id))
            }

        const remove=(x)=>
            {
                setdata([x,...data])
                setlist(list.filter((m)=>m.id!=x.id))
            }
        return(
            <div  style={{ display: "flex", gap: "30px", padding: "20px" }} >
                <div  
                     style={{
         
          border: "2px solid black",
          padding: "15px",
          // borderRadius: "10px",
          // backgroundColor: "#f8f9fa",
        }}
                    >
                {data.map((x)=><li key={x}>{x.first_name}<button onClick={()=>add(x)}>add</button>
                </li>)}
                    </div>
                <div
                    style={{border:"2px solid black",padding:"15px",width:"140px"}}>
                {list.map((x)=><li>{x.first_name}<button onClick={()=>remove(x)}>remove</button></li>)}
                </div>
                
            </div>
        )
    
}
export default App
