import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../providers/AuthProbider'

function ClientCar() {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/addtoy?email=${user.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
  return (
    <div>ClientCar</div>
  )
}

export default ClientCar