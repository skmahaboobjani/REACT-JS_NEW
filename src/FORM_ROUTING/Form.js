import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
function From()
{
    const [data,setdata]=useState({names:[],age:[]})
    let navigate=useNavigate()

    let handlechange=(e)=>
    {
      let value=e.target.value;
      let name=e.target.name;

      setdata((pv)=>({
        ...pv,
        [name]:value
          
      }))
    }

    let handle=()=>
    {
        console.log(data);
        navigate("/results",{state:data})
    }

    return(
        <div>
            <h1>forms</h1>
            <label>name</label><br/>
            <input type={"text"} name={"names"} onChange={handlechange}/><br/>
            <label>age</label><br/>
            <input type={"number"} name={"age"} onChange={handlechange}/><br/>
            <button onClick={handle}>submit</button>
        </div>
    )

}
export default From