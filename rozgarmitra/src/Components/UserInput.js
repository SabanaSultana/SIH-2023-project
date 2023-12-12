import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function UserInput() {
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
    <div className=' flex w-[300px] gap-2 ml-30 mr-3 my-4  ml-20 pl-4 relative'>
        <div className="rest flex flex-col w-[68%] mt-1  ">          
           <div className="text bg-gray-400  rounded-[10px] p-2 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, inventore.                
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
