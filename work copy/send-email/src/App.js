import React,{useState,useEffect} from 'react';

import axios from 'axios'
const App=()=>{
  const [sentemail,setSentemail]=useState({

  
      recipient: 'sara.moshkgou@gmail.com',
      sender: 'saratestm1364@gmail.com',
      subject: 'helloo',
      text: 'let do it '
    })
    const[error,setError]=useState([])
    
    useEffect(() => {
      if (error.length){
      const interval = setInterval(() => {
        sendEmail()
        console.log('This will run every second!');
      }, 60000)
      return () => clearInterval(interval);}
    
    }, )
 

  const sendEmail = _ => {
   
    axios.post(`http://127.0.0.1:2020/send-email?recipient=${sentemail.recipient}&sender=${sentemail.sender}&topic=${sentemail.subject}&text=${sentemail.text}`) //query string url
      .catch(err => console.error(err))
  }


  
    
    return (
      <div></div>
    );
  }

export default App;
