import React, { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";

function AllToy() {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addtoy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>AllToy:{toys.length}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

      
      {toys.map(toy=><AllToyCard
      key={toy._id}
      toy={toy}></AllToyCard>)}
    </div>
    </div>
  );
}

export default AllToy;
