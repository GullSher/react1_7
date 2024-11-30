import React,{useEffect}  from 'react'
import axios from 'axios'
import { useState } from 'react'



function Item() {
  const[Item,setItem] = useState([])

useEffect(() => {
  // axios.get('http://localhost:3001/item')
  axios.get('http://localhost:3001/')
  // .then(res => console.log(res))
  // .catch(err =>console.log(err));
  .then(res => setItem(res.data))
  .catch(err =>console.log(err));
 },[])


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <button className='btn btn-success'>Add Item</button>
<table className='table'> 
<thead>
<tr>
  <th scope='col'>Item ID</th>
  <th scope='col'>Item Name</th>
  
  <th scope='col'>Item Quantity</th>
  <th scope='col'>Item Price</th>

  <th scope='col'>Item Supplier</th>
  <th scope='col'>Item Category</th>
  <th scope='col'>Item Description</th>
</tr>
</thead>
<tbody>
{
  Item.map((items) => {
    return (
      <tr>
        <th scope='row'>{items.item_id}</th>
        <td>{items.item_name}</td>
        <td>{items.item_quantity}</td>
        <td>{items.item_price}</td>
        <td>{items.item_category}</td>
        <td>{items.item_supplier}</td>
        <td>{items.item_category}</td>
        <td>{items.item_supplier}</td>


        {/* <td>{item.quantity}</td> */}
        {/* <td>{item.supplier}</td> */}
        {/* <td>{item.category}</td> */}
        {/* <td>{item.description}</td> */}
      </tr>
    )
  })
 } 

{/* <tr> */}
  {/* <th scope='row'></th> */}
  {/* <td>Mark</td>
  <td>Otto</td> */}
  {/* <td></td> */}
  {/* <td></td> */}
  {/* <td>@mdo</td> */}
  {/* <td>@mdo</td> */}
  {/* <td>@mdo</td> */}
  {/* <td>@mdo</td> */}
 {/* </tr> */}
</tbody>
</table>
      </div>
    </div>
  )
}

export default Item