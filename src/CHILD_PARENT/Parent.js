import React, { useState } from 'react';
import Child from './Child';

 function Parent() {

    const [name,setname]=useState('')
    const [visible,setvisible]=useState(false)


    let handel=(cb)=>
    {
        setvisible(!visible)

        if(!visible)
        {
            setname(cb)
        }
        else
        {
            setname("")
        }
        
   
    }
  return (
    <div>
      <Child handel={handel} visible={visible}/>
      {name}
    </div>
  );
}
export default Parent
