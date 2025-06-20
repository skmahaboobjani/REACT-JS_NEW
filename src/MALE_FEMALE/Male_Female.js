

import React, { useEffect, useState } from 'react';

 function Male_Female() {

    const [data,setdata]=useState([])
    const [genders,setgenders]=useState("all")
    const [search,setsearch]=useState('')
  useEffect(()=>
  {
    fetch("https://randomuser.me/api/?results=100")
    .then((res)=>res.json())
    .then((res)=>setdata(res.results))

  },[])
    
  return (
    <div>
        <input type={"text"} value={search} onChange={(e)=>setsearch(e.target.value)}/>
        <select value={genders} onChange={(e)=>setgenders(e.target.value)}>
            <option >all</option>
            <option>Male</option>
            <option>Female</option>
        </select>
      {data.filter((x)=>((x.gender.toLowerCase()===genders.toLowerCase()|| genders==="all"))&&(x.name.first.toLowerCase().includes(search.toLowerCase()))).map((x,y)=><li key={y}>{x.name.first} {x.gender}</li>)}
    </div>
  );
}
export default Male_Female

