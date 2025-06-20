import React from 'react';

 function Child(props) {



    let name="mabujani"
  return (
    <div>



        <button onClick={()=>props.handel(name)}>{props.visible?"hide":"show"}</button>
      
    </div>
  );
}
export default Child
