import React, { useState } from "react"

function Todo_App()
{
    const [data,setdata]=useState("")
    const [list,setlist]=useState([])

    let handel=()=>
    {
        setdata("")
        setlist([...list,data])

    }
    let removed=(y)=>
    {
        setlist(list.filter((m,n)=>n!=y))

    }
    return(
        <div>
            <h1>todo app</h1>
            <input type={"text"} value={data} onChange={(e)=>setdata(e.target.value)}/>
            <button onClick={handel}>add</button>
            {list.map((x,y)=><li key={y}>{x}<button onClick={()=>removed(y)}>delete</button></li>)}
        </div>
    )
}
export default Todo_App