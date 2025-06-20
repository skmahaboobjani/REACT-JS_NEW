import React, { useState }  from "react";

function App()
{
  const statesAndCities = [
    {
      state: "California",
      cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"]
    },
    {
      state: "New York",
      cities: ["New York City", "Buffalo", "Rochester", "Albany"]
    },
    {
      state: "Texas",
      cities: ["Houston", "Dallas", "Austin", "San Antonio"]
    },
    {
      state: "Florida",
      cities: ["Miami", "Orlando", "Tampa", "Jacksonville"]
    }
  ]

  const [select,setselected]=useState("")

  const logic=statesAndCities.find(((x)=>x.state===select))

  return(
          <div>
           <select  onChange={(e)=>setselected(e.target.value)} >
              {statesAndCities.map((x)=>(
              <option>{x.state}</option>
              ))}
           </select >
           <select>
            { logic && logic.cities.map((x)=>(
            <option >{x}</option>
            ))}
           </select>
          </div>
       )
}
export default App