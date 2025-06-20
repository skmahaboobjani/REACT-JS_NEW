import React, { useState } from "react"

function Start_Stop_Reset()
{
    const [count,setcount]=useState(0)

    const [ruk,setrukh]=useState()

    let start=()=>
    {
       let id= setInterval(()=>
        {
          setcount((pv)=>
          {
            return pv+1
          })
        },1000)
        setrukh(id)
    }

    let stop=()=>
    {
      clearTimeout(ruk)
    }

    let reset=()=>
{
    setcount(0)
}
    return(
        <div>
            <h1>Start_Stop_Reset</h1>
             {count}<br/>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Start_Stop_Reset















// import React, { useState } from "react";

// function App() {
//   const [count, setcount] = useState(0);
//   const [id, setid] = useState();
//   const start = () => {
//     let timing = setInterval(() => {
//       setcount((pv) => pv + 1);
//     }, 1000);
//     setid(timing);
//   };
//   const stop = () => {
//     clearInterval(id);
//   };
//   const reset = () => {
//     setcount(0);
//   };
//   return (
//     <div>
//       <span>
//         min {Math.floor(count / 60)} seconds {count % 60}
//       </span>
//       <button onClick={start}>start</button>
//       <button onClick={stop}>stop</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
// }
// export default App;
