import React, { useState } from "react"

function Product_filter()
{
    const products = [
        { id: 1, name: 'Product 1', category: 'Electronics', price: 199.99 },
        { id: 2, name: 'Product 2', category: 'Clothing', price: 29.99 },
        { id: 3, name: 'Product 3', category: 'Electronics', price: 149.99 },
        { id: 4, name: 'Product 4', category: 'Books', price: 9.99 },
        // Add more products as needed
      ];
      const [data,setdata]=useState('')
      const [prices,setprices]=useState('')

      let handelchange=(e)=>
      {
        
          setdata(e.target.value)

      }
      let handel=(e)=>
      {
        setprices(e.target.value)
      }
    return(
        <div>
            <input type={"text"} placeholder="product_name" onChange={handelchange}/>
            <input type={"number"} placeholder="product_price" onChange={handel}/>
            {products.filter((x)=>(x.category.toLowerCase().includes(data.toLowerCase()))&&( prices=="" || x.price===parseFloat(prices))).map((x)=><li>{x.category}-{x.price}</li>)}
        </div>
    )
}
export default Product_filter