import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProbider";

function TabFilter() {
    const {user} = useContext(AuthContext);

  const [categorys, setCategorys] = useState([]);
  const handleCategory = (category,tabnumbet) => {
 
    fetch(`https://car-toy.vercel.app/category?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategorys(data));
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  };
  return (
    <div className="mt-5 mb-7">
        <h2 className="text-center text-3xl mt-4 mb-6">Sub Categorys</h2>
      <div className="tabs tabs-boxed flex justify-center mb-5">
        <a onClick={() => handleCategory("car")} className="tab ">
          car
        </a>
        <a onClick={()=>handleCategory('truck')} className="tab ">truck</a>
        <a onClick={()=>handleCategory('bus')} className="tab">Bus</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
      {categorys &&
        categorys.map((category) => {
          return (
            <>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={category.photo}
                    alt="Shoes"
                    className="h-[400px] w-[400px]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Name : {category.customerName} </h2>
                  <p>Price : {category.price}</p>
                  <p>Rating : {category.rating}</p>
                  <div className="card-actions justify-end">
                    {user?<Link to={`/details/${category._id}`}>  <button className="btn btn-primary">View more</button></Link>:<Link to="/login">  <button className="btn btn-primary">View more</button></Link> }
                 {/* <button className="btn btn-primary">View more</button>  */}
                  </div>
                </div>
              </div>
            </>
          );
          
        })
    }
    </div>
    </div>
  );
}

export default TabFilter;
