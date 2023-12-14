import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function VoiceChatOption({voiceChat,setVoiceChat}) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const closeHandler=()=>{
    setVoiceChat(false)
  }
  return (
    <div className='overflow-y-hidden flex flex-col  items-center box-content absolute bottom-0 bg-orange-100 shadow-2xl z-100  h-[270px] z-1000 w-[100%] border bc rounded-tl-[15px] rounded-tr-[15px] shadow-top'>
      <div 
        className=" flex justify-center items-center mt-4 gap-20   w-[100%] pl-3 pb-3 "
        >
           <p>Listening.....</p>
           <FontAwesomeIcon icon={faXmark}  className=' absolute top-6 right-10 '  onClick={closeHandler} />
        </div>  
          
         <div 
         className="  flex flex-col gap-4 mx-2 h-[150px] langs"         
         >
            <div className="text flex flex-col justify-center items-center">
                <p className='italic'>Try Saying...</p>
                <p>I want to book a Ticket</p>
            </div>
            <div className="img flex justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/mic.png'} alt="Error Loading image"  className='w-[30px]'/> {listening ? 'on' : 'off'}
            </div>
       </div>
       <div className='mb-2 flex flex-col justify-center items-center'>
          <p className='w-[full]'>{transcript}</p>
          <div className=" flex ">
              <button onClick={SpeechRecognition.startListening} className='bg-orange-500 border bc ' >Start</button>
              <button onClick={SpeechRecognition.stopListening} className='bg-sky-200 m-2' >Stop</button>
              <button onClick={resetTranscript} className='bg-blue-200 m-2'>Reset</button>
          </div>
       </div>
    </div>
  )
}
