import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProbider";
import useTitle from "../hook/useTitle";

function UpdateToy() {
  const updatedata = useLoaderData();
  console.log(updatedata);
  let { id } = useParams();
  const {user} = useContext(AuthContext)
  useTitle('update')

  const handleUpdate = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const seller_name = form.seller_name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const dadescriptionte = form.description.value;
    const email = user?.email;
    const order = {
      name,
      email,
      price,
      photo,
      seller_name,
      category,
      rating,
      quantity,
      dadescriptionte
    }
    console.log(order)


    fetch(`https://car-toy.vercel.app/addtoy/${id}`,{
      method: 'PUT',
      headers:{
          'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.acknowledged){
        alert('update successfuly')
        form.reset();
      }
          
    })

}


  return (
    <div className="mb-5">
      <h3 className="text-center text-3xl font-bold">Update Toy </h3>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
          <div className="card-body space-y-7">
            <div className="form-control">
              <input
                type="text"
                name="photo"
                defaultValue={updatedata?.photo}
                placeholder="photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="card-body space-y-7">
            <div className="form-control">
              <input
                type="text"
                name="seller_name"
                defaultValue={updatedata?.customerName}
                placeholder="Seller_name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                  defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="card-body space-y-7">
            <div className="form-control">
              <input
                type="text"
                name="category"
                defaultValue={updatedata?.category}
                placeholder="category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
                defaultValue={updatedata?.price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="card-body space-y-7">
            <div className="form-control">
              <input
                type="text"
                name="rating"
                defaultValue={updatedata?.rating}
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="quantity"
                defaultValue={updatedata?.quantity}
                placeholder="quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="card-body space-y-7">
            <div className="form-control">
              <input
                type="text"
                name="description"
                defaultValue={updatedata?.dadescriptionte}
                placeholder="Description"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block pr-20"
          value="Order now"
        />
      </form>
    </div>
  );
}

export default UpdateToy;
