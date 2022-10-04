import React, { useState } from 'react'



function UseState() {
  
  const handleOnChange= (event)=>{

   setText(event.target.value)
  }
  const handleUpClick=()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const [text, setText] = useState('');
  return (
    
    <div className='usestate'>
   <textarea id="message" rows="4" className="block p-2.5 w-full text-sm py-4 my-5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={text} onChange ={handleOnChange} placeholder="Your message..."></textarea>
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpClick}>
  Convert To Uppercase</button>
  
    </div>
  )
}

export default UseState