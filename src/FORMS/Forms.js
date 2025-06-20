import Reat, { useState } from "react"

function Forms()
{
    const [data,setdata]=useState({names:[],fullname:[],age:[]})
    const [list,setlist]=useState([])

    let handlechange=(e)=>
    {

        let value=e.target.value
        let name=e.target.name
        setdata((pv)=>({

            ...pv,
            [name]:value



        }))

    }

    let handel=()=>
    {
       setlist([...list,data])
    }
    return(
        <div>
   <label>USERNAME</label><br/>
            <input type={"text"} name={"names"} onChange={handlechange}/><br/>
            <label>Full Name</label><br/>
            <input type={"text"} name={"fullname"} onChange={handlechange}/><br/>
            <label>age</label><br/>
            <input type={"number"} name={"age"} onChange={handlechange}/><br/>
            <button onClick={handel}>submit</button>

         {list.map((x)=>
        (
            <>
            {x.names}<br/>
            {x.fullname}<br/>
            {x.age}
            </>
            
         ))}


        </div>
    )

}
export default Forms
