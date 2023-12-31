import React from 'react'

function Gallery() {
  return (
    <div className='mt-10'><h2 className='text-4xl font-bold text-center mb-5'>Car Gallery</h2>

<div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=600" alt="Card 1" class="w-full rounded-lg"/>
    </div>
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/1186477/pexels-photo-1186477.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/12217108/pexels-photo-12217108.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 2" class="w-full rounded-lg"/>
    </div>
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&w=600" alt="Card 3" class="w-full rounded-lg"/>
    </div>
  </div>
</div>
<div class="container mx-auto mt-5 mb-5">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 1" class="w-full rounded-lg"/>
    </div>
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/163546/radpanzer-model-military-vehicle-163546.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 2" class="w-full rounded-lg"/>
    </div>
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/12217108/pexels-photo-12217108.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 3" class="w-full rounded-lg"/>
    </div>
  </div>
</div>


    </div>
  )
}

export default Gallery