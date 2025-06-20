import React, { useState } from "react";

function Task_two() {
  const [data, setdata] = useState({ productname: "", productprice: "" });
  const [err, seterr] = useState({ productname: false, productprice: false });
  const [list, setlist] = useState([]);
  const [total, settotal] = useState(0);

  let handlechange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setdata((pv) => ({
      ...pv,
      [name]: value,
    }));

    seterr((err) => ({
      ...err,
      [name]: false,
    }));
  };

  let handel = () => {
    const { productname, productprice } = data;

    let validproductname = productname.length >= 3;
    let validproductprice = productprice.length >= 2;
    let prices = parseInt(productprice);

    if (!isNaN(prices)) {
      settotal(prices + total);
    }

    if (validproductname && validproductprice) {
      setlist([...list, data]);
    } else {
      seterr({
        productname: !validproductname,
        productprice: !validproductprice,
      });
    }
  };
  return (
    <div>
      <label>productname</label>
      <br />
      <input name={"productname"} type={"text"} onChange={handlechange} />
      {err.productname && <p>enter product name</p>}
      <br />
      <label>product price</label>
      <br />
      <input name={"productprice"} type={"text"} onChange={handlechange} />
      {err.productprice && <p>enter product price</p>}
      <br />
      <button onClick={handel}>submit</button>
      <br />
      {list.map((x) => (
        <li>{`${x.productname}-${x.productprice}`}</li>
      ))}
      <span>total</span>
      {total}
    </div>
  );
}
export default Task_two;
