import React, { useEffect, useState } from 'react';
import "./Pagination.css"

 function Pagination() {

  const [data,setdata]=useState([])
  const [page,setpage]=useState(10);
  const [num,setnum]=useState(1)

  console.log("data.length",data.length);

  const page_len=Math.ceil((data.length)/page);
  console.log("page_len",page_len);

 const create_array_for_pages=[...new Array(page_len+1).keys()].slice(1);
 console.log(create_array_for_pages);

 let last_index=page*num;
 console.log("last_index",last_index);

 let first_index=last_index-page;
 console.log("first_index",first_index);

 let visbleindex=data.slice(first_index,last_index)

  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((res)=>setdata(res))
  },[])
  let handel=(x)=>
  {
     setnum(x)
  }

  let previous=()=>
  {
    if(num>0)
    {
      setnum(num-1)
    }
  }
  let next=()=>
  {
    
      setnum(num+1)
    
  }
  return (
    <div>
      <h1>paginations</h1>
      {visbleindex.map((x,y)=><li key={y}>{x.title}</li>)}

      {create_array_for_pages.map((x)=><span className={num===x?"active":""} onClick={()=>handel(x)}>{`${x} |`}</span>)}<br/>
      <button onClick={previous}> previous</button>
      <button onClick={next}>next</button>
       
    </div>
  );
}
export default Pagination
