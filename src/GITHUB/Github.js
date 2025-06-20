import React, { useState } from 'react';

 function Github() {

    const [profile,setprofile]=useState('')
    const [data,setdata]=useState(null)
let handel=()=>
{

    fetch(`https://api.github.com/users/${profile}`)
   .then((res)=>
   {
    if(!res.ok)
    {
      setdata(null)
        throw new Error("not finded")
       
    }
    
    return res.json()
   
   }).then((res)=>
   {
    setdata(res)
   })
   

}
   
  return (
    <div>
      <h1>github</h1>

      <input type={"text"} onChange={(e)=>setprofile(e.target.value)}/>
      <button onClick={handel}>find</button><br/>
      {/* {data && <p>followers{data.followers}</p>} */}
      {data &&(<div>
        <p>followers:{data.followers}</p>
        <p>following:{data.following}</p>
        <p>{<img src={data.avatar_url}/>}</p>
        </div>)}
      
    </div>
  );
}

export default Github
