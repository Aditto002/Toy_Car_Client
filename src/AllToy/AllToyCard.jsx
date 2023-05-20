import React from 'react'

function AllToyCard({toy}) {
    const {customerName,email,price,photo,seller_name,category,rating,quantity} =toy
  return (
    // <div class="flex flex-wrap -mx-4">

    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={photo} className='h-[350px] w-[400px]' alt="Shoes" /></figure>
    <div className="card-body">
      <h3 className="card-title">Seller : {seller_name}</h3>
      <h3 className="card-title">Toy Name : {customerName}</h3>
      <h3 className="card-title">Sub-category : {category}</h3>
      <h3 className="card-title">Price : ${price}</h3>
      <h3 className="card-title">Available Quantity: {quantity}</h3>
      
      <div className="card-actions justify-end">
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
    //   </div>
  )
}

export default AllToyCard