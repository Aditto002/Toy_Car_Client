import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Registar() {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left w-1/2 mr-12">
        
        <img src='https://media.istockphoto.com/id/1135341047/es/vector/p%C3%A1gina-de-inicio-de-sesi%C3%B3n-en-la-pantalla-del-port%C3%A1til-cuaderno-y-formulario-de-inicio-de.jpg?s=612x612&w=0&k=20&c=nJHxr1M2kGWd7s4TNS8ff4JVTOiPnD7LUsW7kxy8WEk=' alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <form >
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
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-warning btn-outline mt-4"><FaGoogle /></button>
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