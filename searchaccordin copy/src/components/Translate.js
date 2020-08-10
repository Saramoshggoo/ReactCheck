import React,{useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options=[
   { 
    label:'Persian',
    value:'fa'},
    {
     label:'Arabic',
     value:'ar'
    },
    {
        label:'Handi',
        value:'hi'
       }

]

const Translate = () => {
    const[language,setLanguage]=useState(options[0])
    const [text,setText]=useState('');
    return (
        <div>
            <div className="ui form">
            <div className="feild">
            <label>Enter Text</label>
           <input onChange={(e)=>setText(e.target.value)} value={text}/>
            </div>
            </div>
            <Dropdown options={options} onSelectedChange={setLanguage} selected={language} label="select langouage"/>
            <h3 className="header">output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate
