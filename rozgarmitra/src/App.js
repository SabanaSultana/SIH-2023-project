import NavBar from "./Components/NavBar";
import FormSection from "./Components/FormSection";
import Cards from "./Components/Cards";
import Cards2 from "./Components/Cards2";
import ChatSection from "./Components/ChatSection";
import { useState } from "react";
import Login from "./Components/Login";
import LoginDetails from "./Components/LoginDetails";
import Language from "./Components/Language";
import AboutSection from "./Components/AboutSection";
import UserInput from "./Components/UserInput";
import Output from "./Components/Output";
import Feedback from "./Components/Feedback";
import Inconvenience from "./Components/Inconvenience";

function App() {
  const [isScreenPartVisible, setIsScreenPartVisible] = useState(true);
  const [isCardsVisible, setIsCardsVisible] = useState(true);
  const [isAboutVisible, setIsAboutVisible] = useState(true);
  const [isLanguageVisiable, setLanguageVisible] = useState(true);
  const [isLoginDetailsVisible, setIsLoginDetailsVisible] = useState(false);
  const [isChatVisible,setChatVisible]=useState(true)
  const [inputValue, setInputValue] = useState(""); 
  const [isConvent,setConvent]=useState(false);
  const [isFeedback,setFeedback]=useState(false);
  // const [isClose,se]
  const conVenienceHandler =()=>{
    setConvent(true);
  }
  const feedBackHandler=()=>{
    setFeedback(true)
  }
 
  const toggleScreenPartVisibility = () => {
    setIsScreenPartVisible(!isScreenPartVisible);
    
  };
  const toggleCardsVisibility = () => {
    setIsCardsVisible(!isCardsVisible);
  };
 
   const toggleAboutVisibility = () => {
     
      setIsAboutVisible(!isAboutVisible);
    
  }

  const toggleLoginDetailsVisibility = () => {
    setIsLoginDetailsVisible(!isLoginDetailsVisible);
  };
  const languageHandler =()=>{
      setLanguageVisible(!isLanguageVisiable)
  }
  const sendHandler =()=>{
      setChatVisible(false);
      setInputValue("");
  }
  // const  langCloseHandler=()=>{
  //   setLangClose(false);
  // }
  return (
    <div className="App h-screen overflow-y-hidden">
      <div className=" parent box w-[420px] h-full bg-white  mx-auto border-0 border-grey-100 rounded-2xl drop-shadow-2xl flex flex-col ">
          <div className="navigationMenu  fixed_item fixed-first ">
            <NavBar
             onHamburgerClick={toggleScreenPartVisibility} 
             onHomeClick={toggleAboutVisibility}
                        
             />
          </div>
          <div className={`screen-part 
           ${isScreenPartVisible ? "" : "hidden"}
           
          
           `} >
            <div className={` scrolling-content midbar mx-3 overflow-x-hidden
            ${isAboutVisible?"":"hidden"}
            ${isChatVisible? "" :"hidden"}
            ${isLanguageVisiable? "" :"hidden"}
             
            `}>
             <FormSection />
            <Cards  />
            </div>
            <div className={`chatBox fixed_item fixed-last z-0
              `} 
            >
            <ChatSection onLangClick={languageHandler}
             onSendClick={sendHandler}
             setInputValue={setInputValue}
             inputValue={inputValue}
            />
            </div>
        </div>
        <div className={`secondCard  
           fixed bottom-0 mx-3 border rounded-tl-[20px] rounded-tr-[20px]  animated-element bg-white
           ${isScreenPartVisible ? "hidden":""}
           ` } >
          <Cards2   />
          <Login onLoginButtonClick={toggleLoginDetailsVisibility} />
        </div>
        <div className={`login-details  fixed bottom-0 bc border rounded-tl-[30px] rounded-tr-[30px] bg-white w-full h-[250px] 
         ${isLoginDetailsVisible ? "" : "hidden"}
        `}>
          <LoginDetails />
        </div>
        <div className={`about  absolute top-20  bg-white 
          ${isAboutVisible ? "hidden" : ""}
          `} >
          <AboutSection/>
        </div>
         
            
                            
         
        
      <div className={`feedback  absolute top-60 left-20 bg-gray-200  border bc rounded-[10px] 
       ${isFeedback?"":"hidden"}
      `}>
        <Feedback/>
      </div>
      </div>
    </div>
    
  );
}

export default App;
