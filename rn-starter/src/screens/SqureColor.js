import React,{useState} from 'react'
import { Text, StyleSheet,View,FlatList } from 'react-native';
import ColorDetail from '../components/ColorDetail'

const SqureColor = () => {
  const [red,setRed]=useState(0)
  const [blue,setBlue]=useState(0)
  const [green,setGreen]=useState(0)
  const COLOR_INC=15
  const setColor = (color,change) => {
      //color ==='red','green',"blue"
      //change == +15-15
    switch(color){
        case 'red':
        red+ change > 255 || red + change < 0 ? null :setRed(red + change);
        return;
        case 'green':
        green+ change > 255 || green + change < 0 ? null :setGreen(green + change);
        return;
        case 'blue':
            blue+ change > 255 || blue + change < 0 ? null :setBlue(blue+ change);
            return;
        default:
            return
  }
}
    return (
        <View>
            <ColorDetail color="red"   increase={()=>setColor('red',COLOR_INC)} decrease={()=>setColor('red',-1* COLOR_INC)}/>
            <ColorDetail color="blue" increase={()=>setColor('blue',COLOR_INC)} decrease={()=>setColor('blue',-1* COLOR_INC)}/>
            <ColorDetail color="green" increase={()=>setColor('green',COLOR_INC)} decrease={()=>setColor('green',-1* COLOR_INC)}/>
            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    )
}

export default SqureColor
