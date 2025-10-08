import React from "react";

function Card({username,btnText = "View More"}){ // it readability better for default btnText
    return(
        
        <div className='relative h-[400px] w-[400px] rounded-md'>
        <img className='z-0 h-full w-full rounded-2xl object-cover' src="https://images.pexels.com/photos/29401210/pexels-photo-29401210.jpeg" alt=""  />
        
      
      <div className='absolute inset-0 bg-gradient-to-t from-orange-900 to-transparent'></div>
      <div className='absolute bottom-4 left-4 text-left '>
        <h1 className='text-lg font-semibold text-white'>{username}</h1>
        <p className='mt-2 text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore aspernatur molestiae, eum asperiores vero rerum harum in adipisci voluptatum.</p>
        <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>{btnText}</button>
        {/* {also can be give as default value but  readabability} */}
      </div>
      </div>
    )
}
export default Card