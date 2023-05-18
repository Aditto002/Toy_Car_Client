import React from 'react'

function About() {
  return (
    <section className='mt-10'><h2 className='text-4xl text-center font-bold mb-8'>About Us</h2>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.pexels.com/photos/4492278/pexels-photo-4492278.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm rounded-lg shadow-2xl ml-10" />
    <div className='w-2/5'>
      <h1 className="text-5xl font-bold">We Provide You Best Toy</h1>
      <p className="py-6">Introducing the ultimate toy car for young enthusiasts! This sleek and innovative toy car combines speed, durability, and style. With its realistic design and attention to detail, it brings endless joy and imagination to playtime. Built to withstand rough play, this toy car guarantees hours of fun-filled adventures. Get ready to rev up the excitement with our exceptional toy car!</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </section>
  )
}

export default About