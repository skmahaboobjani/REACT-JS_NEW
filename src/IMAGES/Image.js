import React, { useState } from "react"

function Image()
{
    const container=[
        "https://images.pexels.com/photos/17168372/pexels-photo-17168372/free-photo-of-two-chairs-on-waterfront-against-brooklyn-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/17168343/pexels-photo-17168343/free-photo-of-hot-air-balloon-flying-over-man-riding-on-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/16146838/pexels-photo-16146838/free-photo-of-woman-reading-a-book.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        
        
        
      ]

      const [size,setsize]=useState(0);
      const [image,setimage]=useState(container[size])

      let previous=()=>
      {
        if(size>0)
        {
            setsize(size-1);
            setimage(container[size-1])
        }

      }

      let next=()=>
      {
        if(size<container.length-1)
        {
            setsize(size+1);
            setimage(container[size+1])
        }

      }
    return(
        <div>

  <h1>images</h1>

    <img src={image} alt={"img"} width={"100px"}/><br/>
    <button onClick={previous}>previous</button>
    <button onClick={next}>next</button>

        </div>
    )
}
export default Image