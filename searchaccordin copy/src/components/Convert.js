import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Convert = ({language,text}) => {
    const [tarnslated,setTranslated]=useState('')
    const[debouncedText,setDebounedText]=useState(text)
    useEffect(()=>{
        const TimeId = setTimeout(()=>{
            setDebounedText(text)
        },500);
        return()=>{
            clearTimeout(TimeId);
        };

    },[text]);
    useEffect(()=>{
        const doTranslation=async()=>
        {const {data}= await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
              params:{
                 q:debouncedText,
                 target:language.value ,
                 key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
              }
          })
          setTranslated(data.data.translations[0].translatedText)
    }
    doTranslation()
},[language,debouncedText])
    return (
        <div>
            <h1 >{tarnslated}</h1>
        </div>
    )
}

export default Convert
