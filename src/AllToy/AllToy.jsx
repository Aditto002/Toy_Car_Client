import React, { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";
import useTitle from "../hook/useTitle";

function AllToy() {
  const [limit, setLimit] = useState(20);
  const [showAll, setShowAll] = useState(false);
  const handleShowMore = () => {
    if (showAll) {
      setLimit(20);
      setShowAll(false);
    } else {
      setLimit(toys.length);
      setShowAll(true);
    }
  };
  // -----------
  const [toys, setToys] = useState([]);
  useTitle("AllToy");
  useEffect(() => {
    // fetch("http://localhost:5000/addtoy")
    fetch("https://car-toy.vercel.app/addtoy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full mb-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.slice(0, limit).map((toy) => (
              <AllToyCard key={toy._id} toy={toy}></AllToyCard>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 mb-5 flex justify-center">
        <div>
          {!showAll && (
            <button
              onClick={handleShowMore}
              className="btn btn-outline btn-primary"
            >
              Show More
            </button>
          )}
          {showAll && (
            <button
              onClick={handleShowMore}
              className="btn btn-outline btn-primary"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllToy;
