import React from 'react'
import { useState } from 'react';

export default function ChatSection({onLangClick,onSendClick,setInputValue,inputValue}) {

  return (
    <div className='flex justify-between mt-10 bg-white pt-2 pb-5 shadow-top' id="chat-change">
        <img src={process.env.PUBLIC_URL + '/Language Change.png'} alt="Error Loading image" className='w-[38px] h-[35px] ml-2 cursor-pointer'onClick={onLangClick} />        
        <input type="text" placeholder='Type here...' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} 
        className='border bc border-grey-700 rounded-[6px] w-[65%] p-1 text-[17px]'
        
        />
        <img src={process.env.PUBLIC_URL + '/mic.png'} alt="Error Loading image" className='w-[25px] h-[28px]' />        
        <img src={process.env.PUBLIC_URL + '/send.png'} alt="Error Loading image" className='w-[31px] h-[30px] mr-2' onClick={onSendClick}
         
        />
    </div>
  )
}
