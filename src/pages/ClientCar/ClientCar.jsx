import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProbider'
import ClientCard from './ClientCard';
import useTitle from '../../hook/useTitle';

function ClientCar() {
    const {user} = useContext(AuthContext);
    useTitle('MyCar');
    const [toys , setToys] = useState([])
    const url = `http://localhost:5000/addtoy?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    const handleDelete =id =>{
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/addtoy/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                alert('delete successfully')
                const remaining = toys.filter(toy => toy._id !== id);
                setToys(remaining)
            }
        })
        }
    }
  return (
    <div>
        {/* <h2>Total toy : {toys.length}</h2> */}

        <div className="overflow-x-auto w-full mb-10">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
             Delete
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
    {
        toys.map(toy => <ClientCard
        key={toy._id}
        toy={toy}
        handleDelete={handleDelete}></ClientCard>)
    }
    

    </tbody>
    
    
  </table>
</div>
    </div>
  )
}

export default ClientCar