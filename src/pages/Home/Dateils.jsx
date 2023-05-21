import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dateils() {
  const { id } = useParams();
  const [views, setViews] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:5000/addtoy/${id}`)
    fetch(`https://car-toy.vercel.app/addtoy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setViews(data);
      });
  }, []);
  const {_id,customerName,email,price,photo,seller_name,category,rating,quantity,dadescriptionte} =views;
  return (
    <div  className="flex justify-center mt-7 mb-6"> 
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Shoes"
            className="h-[400px] w-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {seller_name}</h2>
          <p>Price : {price}</p>
          <p>Category : {category}</p>
          <p>Rating : {rating}</p>
          <p>Quantity : {quantity}</p>
          <p>Description : {dadescriptionte}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dateils;
