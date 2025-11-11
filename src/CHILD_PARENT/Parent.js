import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [data, setdata] = useState();

  let handle = (name) => {
    setdata(name);
    alert("recived data from child to parent");
  };
  return (
    <div>
      <h1>iam parent</h1>
      <Child handle={handle} />
      {data}
    </div>
  );
}
export default Parent;
