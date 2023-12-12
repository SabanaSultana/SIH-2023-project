import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import ChatSection from './ChatSection'
import { useState } from 'react'
export default function Language() {
    const label={
        label1:'English',
        label2:'हिंदी',
        label3:'ਪੰਜਾਬੀ',
    }
 
  return (
     <div className={`overflow-y-hidden flex flex-col justify-center items-center  gap-6 box-content relative z-100  
     `}
     id="language">   
        <div className="text p-3  w-full flex justify-center items-center border-b-2 bc gap-6 relative">
            <p className='montserrat font-medium font-weight '>Select Language</p>
            <FontAwesomeIcon icon={faXmark}  className=' absolute top-4 right-10 '  />
        </div>    
         <div className="langs flex flex-col gap-6 p-5">
            <div className=' lang english  flex justify-center items-center ' >{label.label1}</div>
            <div className=' lang hindi   flex justify-center items-center'>{label.label2}</div>
            <div className=' lang punjabi  flex justify-center items-center'>{label.label3}</div>
       </div>
    </div>
  )
}
