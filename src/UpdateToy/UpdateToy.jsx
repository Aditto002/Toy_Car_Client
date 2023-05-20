import React from 'react'
import { useLoaderData } from 'react-router-dom'

function UpdateToy() {
     const updatedata = useLoaderData();
     console.log(updatedata);


  return (
    <div className="mb-5">
    <h3 className="text-center text-3xl font-bold">Update Toy</h3>
    <form >
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
           <div className="card-body space-y-7">
              <div className="form-control">

                <input
                  type="text"
                  name='photo'
                  
                  placeholder="photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder='Name'
                  className="input input-bordered"
                />

              </div>
            </div>     
           <div className="card-body space-y-7">
              <div className="form-control">

                <input
                  type="text"
                  name='seller_name'
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
                  name='category'
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
                  name='rating'
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
                  name='description'
                  placeholder='Description'
                  className="input input-bordered"
                />
              </div>
              
              </div>
              </div> 
              <input type="submit" className="btn btn-primary btn-block pr-20" value="Order now" />
    </form>
  </div>
  )
}

export default UpdateToy