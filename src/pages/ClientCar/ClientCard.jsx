import React from 'react'
import { Link } from 'react-router-dom';
import UpdateToy from '../../UpdateToy/UpdateToy';

function ClientCard({toy,handleDelete}) {
    const {_id,customerName,email,price,photo,category,quantity} = toy;
    

    // const handleUpdate =id =>{
    //     const proceed = confirm('Are you sure you want to Update');
    //     if(proceed){
    //         fetch(`http://localhost:5000/addtoy/${id}`,{
    //             method:'PUT'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //         console.log(data)
           
    //     })
    //     }
    // }

    
  return (
    <tr>
    <th>
    <button onClick={()=> handleDelete(_id)} className="btn btn-sm btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    </th>
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
        <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs" >Update</button></Link>
        {/* <button  className="btn btn-ghost btn-xs">Update</button> */}
    
        
      
    </th>

  </tr>
  )
}

export default ClientCard