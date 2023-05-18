import React from 'react'

function Banner() {
  return (
    <div className="carousel w-full h-[650px]">
    <div id="slide1" className="carousel-item relative w-full ">
      <img src='https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600' className="w-full rounded-md" />
      <div className="absolute flex items-center rounded-md  bg-gradient-to-r top-0 bottom-0 from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] ">
        <div className="text-white space-y-8 w-3/5 ms-16 ">
          <h2 className="text-6xl font-bold">
            Wellcome To Toy-Car
          </h2>
          <p>
            There are many variations of passages of available, but the
            majority have suffered alteration in some form
          </p>
          <div>
            {/* <button className="btn btn-warning mr-4">Discover More</button> */}
            <button className="btn btn-outline btn-warning">
              Latest Car
            </button>
          </div>
        </div>
      </div>
    </div>

    
  </div>
  )
}

export default Banner