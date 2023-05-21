import React from 'react'

function Collection() {
  return (
    <div className='mb-5'>
        <h1 className='text-center text-4xl font-bold mt-5 mb-4'>New Collection</h1> 

<div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 1" class="w-full rounded-lg"/>
    </div>
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/2065635/pexels-photo-2065635.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 2" class="w-full rounded-lg"/>
    </div>
    <div class=" bg-white shadow-md rounded-lg">
      <img src="https://images.pexels.com/photos/2527931/pexels-photo-2527931.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 3" class="w-full rounded-lg"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Collection