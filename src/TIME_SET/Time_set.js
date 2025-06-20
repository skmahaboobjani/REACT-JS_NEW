import React, { useEffect, useState } from "react"

function Time_set()
{
    const[count,setcount]=useState(0)
    const[time,settime]=useState(10)

    let increment=()=>
    {
        setcount(count+1)
    }

    useEffect(()=>
    {
       let id= setInterval(()=>
        {

            settime((pv)=>pv>0? pv-1:0)
        
        },1000)
        //clean up function
        return ()=>clearInterval(id)
    },[])
    return(
        <div>
            {count}<br/>
            {time>0 &&<button onClick={increment}>increment</button>}<br/>
            {time}
        </div>
    )
}
export default Time_set