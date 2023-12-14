import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import ChatSection from './ChatSection'
import { useState } from 'react'
import { initReactI18next } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import i18next from "i18next"

i18next.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: {
        "select_language": "Select Language"
      }
    },
    hi: {
      translation: {
        "select_language": "भाषा चुने"
      }
    }
  },
  lng:"hi",
  fallbackLng:"en",
  interpolation:{
    escapeValue:false
  }
});
export default function Language({Language,setLanguage}) {
    const label={
        label1:'English',
        label2:'हिंदी',
        label3:'ਪੰਜਾਬੀ',
    }
    const closeHandler=()=>{
      setLanguage(false);
    }
  //  const {t,i18n}=useTranslation()
   const changeLanguage = (language) => {
    // i18n.changeLanguage(language);
  };
  const{ t } = useTranslation();
  return (
     <div className={`overflow-y-hidden flex flex-col gap-10 items-center box-content absolute bottom-0 bg-white shadow-2xl z-100  h-[270px] z-1000 w-[100%] border bc rounded-tl-[15px] rounded-tr-[15px] shadow-top
      `}
     id="language">   
        <div 
        className=" flex justify-center items-center mt-4 gap-20 border-b bc  w-[100%] pl-3 pb-3 "
        >
            <p className='montserrat font-medium font-weight '>{t('select_language')}</p>
            <FontAwesomeIcon icon={faXmark}  className=' absolute top-6 right-10 '  onClick={closeHandler} />
        </div>  
          
         <div 
         className="  flex flex-col gap-4 mx-2 h-[150px] langs"         
         >
            <div className=' lang english  flex justify-center items-center ' 
            onClick={()=>
              i18next.changeLanguage('en')
            }          
            >{label.label1}</div>
            <div className=' lang hindi   flex justify-center items-center' 
            onClick={()=>
              i18next.changeLanguage('hi')
            }
            >{label.label2}</div>
            <div className=' lang punjabi  flex justify-center items-center ' 
          //  onClick={()=>
          //   changeLanguage('pu')
          // } 
            >{label.label3}</div>
            
       </div>
    </div>
  )
}
