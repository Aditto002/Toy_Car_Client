import React, { useContext, useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProbider';
import useTitle from '../../hook/useTitle';

function Registar() {
    const {createUser} =useContext(AuthContext)
    const [error , setError] = useState('')
    useTitle('Register');
    // useTitle('Regiter');
    const handeRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo =form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);

        // localStorage.setItem('photo', JSON.stringify(photo))
        
        setError('')
        if(password.length<6){
            setError('password must be 6 characters')
            return
          }
        createUser(email,password)
        .then(result =>{
            const createUser = result.user;
            form.reset();
            console.log(createUser);
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left w-1/2 mr-12">
        
        <img src='https://media.istockphoto.com/id/1135341047/es/vector/p%C3%A1gina-de-inicio-de-sesi%C3%B3n-en-la-pantalla-del-port%C3%A1til-cuaderno-y-formulario-de-inicio-de.jpg?s=612x612&w=0&k=20&c=nJHxr1M2kGWd7s4TNS8ff4JVTOiPnD7LUsW7kxy8WEk=' alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <form onSubmit={handeRegister}>
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name='name'
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name='email'
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name='password'
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name='photo'
              type="text"
              placeholder="url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Regiter</button>
          </div>
        </form>
        <p className="text-center my-4">Have any account ? <Link to='/login' className="text-orange-600 font-bold">Sing In</Link></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Registar