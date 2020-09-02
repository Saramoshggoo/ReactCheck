import React,{useReducer} from 'react'
import { Text, StyleSheet,View,FlatList } from 'react-native';

import Colors from '../components/ColorDetail'
 
const COLOR_INC=15
//reducer function hamishe kharej az fucnction asli benevis
const reducer=(state,action)=>{
    //state ==={red:number,green:number,blue:number}
    //action=== {color to change :red or green or blue}
    switch(action.type){
case 'chane_red':
     // chone dispatch nemitoone null accept kon , age shart bar garar bood man meghdare ghabli state bar migardinim
      return state.red+action.payload >255 || state.red+action.payload<0 ?state:{...state,red :state.red+action.payload}
    case 'change_blue':
    return state.blue+action.payload >255 || state.blue+action.payload<0 ?state:{...state,blue:state.blue+action.payload}
case 'change_green':
    return  state.green+action.payload >255 || state.green+action.payload<0 ?state:{...state,green:state.green+action.payload}
default:
    return
    }
}
 
const  SqureReducerScreen = () => {
    //the way use reducer melse hook ke sakhtare khas dare inam dare
    // be jaye in ke 3 ta useState estefadeh konim khate payn cover mikone 
   const[state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
   const {red,green,blue}=state;
   //dipatch dar vaghe reducer maro run mikone

    return (
        <View>
            <Colors color="red"   increase={()=>dispatch({type:'change_red',payload:COLOR_INC})} decrease={()=>dispatch({type:'change_red',payload:-1*COLOR_INC})}/>
            <Colors color="blue" increase={()=>dispatch({type:'change_blue',payload:COLOR_INC})} decrease={()=>dispatch({type:'change_blue',payload:-1*COLOR_INC})}/>
            <Colors color="green" increase={()=>dispatch({type:'change_green',payload:COLOR_INC})} decrease={()=>dispatch({type:'change_green',payload:-1*COLOR_INC})}/>
            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    )
}

export default SqureReducerScreen
