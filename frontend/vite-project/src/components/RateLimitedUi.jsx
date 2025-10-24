import React from 'react'

const RateLimitedUi = () => {
  return (
    <div className='p-20' >
        <div className="bg-primary  text-red-500 max-w-7xl  ">
            <div className=" p-4 mt-6">
       <h1 className='text-center text-6xl '>
        <marquee >You are pressing too much !!! please refresh again...
        </marquee>
        </h1> 
       </div>
       </div>
        
    </div>
  )
}

export default RateLimitedUi