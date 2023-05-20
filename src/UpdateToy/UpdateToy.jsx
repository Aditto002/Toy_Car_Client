import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProbider";

function UpdateToy() {
  const updatedata = useLoaderData();
  console.log(updatedata);
  let { id } = useParams();
  const {user} = useContext(AuthContext)

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


    fetch(`http://localhost:5000/addtoy/${id}`,{
      method: 'PUT',
      headers:{
          'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      // Swal.fire({
      //     title: 'Do you want to save the changes?',
      //     showDenyButton: true,
      //     showCancelButton: true,
      //     confirmButtonText: 'Save',
      //     denyButtonText: `Don't save`,
      //   }).then((result) => {
      //     /* Read more about isConfirmed, isDenied below */
      //     if (result.acknowledged) {
      //       Swal.fire('Saved!', '', 'success')
      //     }
      //     //  else if (result.isDenied) {
      //     //   Swal.fire('Changes are not saved', '', 'info')
      //     // }
      //   })
        
    })

}


  return (
    <div className="mb-5">
      <h3 className="text-center text-3xl font-bold">Update Toy</h3>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
          <div className="card-body space-y-7">
            <div className="form-control">
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
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
                //   defaultValue={user?.displayname}
                placeholder="Seller_name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                //   defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="card-body space-y-7">
            <div className="form-control">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
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
                //   defaultValue={user?.displayname}
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="quantity"
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
