import React from 'react';
import { useLocation} from "react-router-dom"
 function Result()
  {
  
    let location= useLocation()
    let data=location.state

    if(!data)
    {
       return(
        <div>
            <h1>no data available</h1>
        </div>
       )

    }
  return (
    <div>
       
      {data.names}<br/>
      {data.age}
    </div>
  );
}
export default Result
