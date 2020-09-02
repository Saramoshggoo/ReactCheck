import React,{useState} from 'react'
import { Text, StyleSheet,View,FlatList,Button } from 'react-native';
const ColorScreen = () => {
    const[color,SetColor]=useState([])
    return (
        <View>
            <Button title="add a Color" onPress={()=>{
                SetColor([...color,randomRGB()])
            }}/>
            <View style={{height:100,width:100,backgroundColor:randomRGB()}}/>
            <FlatList 
            keyExtractor={(item)=>item}
            data={color} renderItem={({item})=>{
                return  <View style={{height:100,width:100,backgroundColor:item}}/>
            }} />
        </View>

    )
}
const randomRGB=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`
}

export default ColorScreen
