import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProbider'

function AllToyCard({toy}) {
  const {user} = useContext(AuthContext);
    const {_id,customerName,email,price,photo,seller_name,category,rating,quantity} =toy
  return (
  //   // <div class="flex flex-wrap -mx-4">

  //   <div className="card card-compact w-96 bg-base-100 shadow-xl">
  //   <figure><img src={photo} className='h-[350px] w-[400px]' alt="Shoes" /></figure>
  //   <div className="card-body">
  //     <h3 className="card-title">Seller : {seller_name}</h3>
  //     <h3 className="card-title">Toy Name : {customerName}</h3>
  //     <h3 className="card-title">Sub-category : {category}</h3>
  //     <h3 className="card-title">Price : ${price}</h3>
  //     <h3 className="card-title">Available Quantity: {quantity}</h3>
      
  //     <div className="card-actions justify-end">
  //       {
  //         user ?<Link to={`/details/${_id}`}> <button className="btn btn-primary">View Details</button></Link>:<Link to='/login'> <button className="btn btn-primary">View Details</button></Link>
  //       }
        
       
  //     </div>
  //   </div>
  // </div>
    //   </div>
    <tr>
  
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{customerName}</div>
          <div className="text-sm opacity-50">{email}</div>
        </div>
      </div>
    </td>
    <td>
      {price}
    </td>
    <td>{category}</td>
    <td>{quantity}</td>
    <th>
    {/* to={`/update/${_id}}`} */}
        {/* <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs" >Update</button></Link> */}
        { user ?<Link to={`/details/${_id}`}> <button className="btn btn-primary">View Details</button></Link>:<Link to='/login'> <button className="btn btn-primary">View Details</button></Link>}
    
        
      
    </th>

  </tr>
  )
}

export default AllToyCard