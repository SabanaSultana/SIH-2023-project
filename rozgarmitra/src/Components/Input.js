import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Input({inputData}) {
    const [currentTime, setCurrentTime] = useState(new Date());
     useEffect(() => {      
       const intervalId = setInterval(() => {
         setCurrentTime(new Date());
      }, 60000); 
      return () => clearInterval(intervalId);
    }, []); 
  
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  return (
    <div className=' flex w-[300px] gap-2 input-margin mr-3 my-4   pl-4 relative bg-sky-400 '>
        <div className="rest flex flex-col w-[68%] mt-1 bg-yellow-500  ">          
           <div className="text bg-gray-400  rounded-[10px] p-2 ">
                  {inputData}               
            </div>

            <div className="time text-[14px]">
                    {formattedTime}
             </div>
                
            
        </div>
        <div className="icon ">
          <img src={process.env.PUBLIC_URL + '/User in Chat.png'} alt="Error loading image" className='w-[34px] rounded-full ' />
        </div>
    </div>
  )
}
