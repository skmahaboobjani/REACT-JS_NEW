import React, { useState } from "react"

function Show_Hide()
{

    const [data,setdata]=useState(false)

    let handel=()=>
    {
       setdata(!data)
    }
    return(
        <div>
            <h1>show hide</h1>

            {data&&<p  onChange={(e)=>setdata(e.target.value)} >iam mahaboob jani</p>}

            <button onClick={handel}>{data ? "hide" :"show"}</button>
        </div>
    )
}
export default Show_Hide