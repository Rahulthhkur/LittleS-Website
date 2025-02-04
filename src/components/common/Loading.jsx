import React from 'react'

function Loading() {
    return (
        <div className='flex space-x-2 justify-center items-center bg-black h-screen dark:invert'>
            <span className='sr-only'>Loading...</span>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.10s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.8s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.6s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.4s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.2s]'></div>
   
           
        </div>
    )
}

export default Loading