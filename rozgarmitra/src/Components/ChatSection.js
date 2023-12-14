import React from 'react'
import { useState } from 'react';
import Language from './Language';
import VoiceChatOption from './VoiceChatOption';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import { useEffect } from 'react';

export default function ChatSection({onSendClick,setInputValue,inputValue,sendDataToParent}) {
  //Language Change
  const [language,setLanguage]=useState(false)
  const languageClickHandler=()=>{
    setLanguage(!language);
  }  
  // Voice Chat  
  const [voiceChat,setVoiceChat]=useState(false);
   const voiceChatHandler=()=>{
      setVoiceChat(!voiceChat);        
   }

  // store user Input
  let userInput=inputValue;
  useEffect(() => {
    const chatbotEndpoint = 'https://rozgarmitrabackend.azurewebsites.net/chat';  
    let existingChatHistory = localStorage.getItem('chatHistory');
    // If chatHistory doesn't exist, initialise it as an empty array
    if (!existingChatHistory) {
      localStorage.setItem('chatHistory', JSON.stringify([]));
    }    
    const requestBody = {
      user_input:userInput,
      chat_history: JSON.parse(localStorage.getItem('chatHistory'))
  
    };
    
    // Make the POST request when the component mounts
    axios.post(chatbotEndpoint, requestBody)
      .then(response => {
        // Handle the response from the server
        console.log('Server Response:', response.data['output']);
         // Assuming 'response' is a JSON object with a 'chat_history' array
        let chatHistory = [];
        let tempDic = {};

        response.chat_history.forEach((item, index) => {
          if (item.type === "human") {
            tempDic["human"] = item.content;
          } else {
            tempDic["ai"] = item.content;
          }
          if (Object.keys(tempDic).length % 2 === 0 && Object.keys(tempDic).length !== 0) {
            chatHistory.push({ ...tempDic });
            tempDic = {};
          }
        });
        
        // Storing in local storage
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory))
        
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error.message);
      });
    }, []); 
    const [dataToSend, setDataToSend] = useState(userInput);
  
    const handleButtonClick = () => {  
      setDataToSend(userInput)   
      sendDataToParent(dataToSend);
      onSendClick();
      
    };
   
   return (
     <>
    <div className='flex justify-between mt-10 bg-white pt-2 pb-5 shadow-top ' id="chat-change">
        <img src={process.env.PUBLIC_URL + '/Language Change.png'} alt="Error Loading image" className='w-[38px] h-[35px] ml-2 cursor-pointer'onClick={languageClickHandler} />        
        <input type="text" placeholder='Type here...' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} 
        className='border bc border-grey-700 rounded-[6px] w-[65%] p-1 text-[17px]'
        
        />
        <img src={process.env.PUBLIC_URL + '/mic.png'} alt="Error Loading image" className='w-[25px] h-[28px]' onClick={voiceChatHandler}/>        
        <img src={process.env.PUBLIC_URL + '/send.png'} alt="Error Loading image" className='w-[31px] h-[30px] mr-2' onClick={handleButtonClick}
         
        />
    </div>
    {language && (
      <Language language={language} setLanguage={setLanguage}/>
    )}
    {
      voiceChat && (
          <VoiceChatOption voiceChat={voiceChat} setVoiceChat={setVoiceChat} />
      )
    }
    </>
  )
}
