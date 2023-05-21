import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProbider";

function AllToyCard({ toy }) {
  const { user } = useContext(AuthContext);
  const {
    _id,
    customerName,
    email,
    price,
    photo,
    seller_name,
    category,
    rating,
    quantity,
  } = toy;
  return (
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
      <td>{price}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <th>
        {user ? (
          <Link to={`/details/${_id}`}>
            {" "}
            <button className="btn btn-primary">View Details</button>
          </Link>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn btn-primary">View Details</button>
          </Link>
        )}
      </th>
    </tr>
  );
}

export default AllToyCard;
