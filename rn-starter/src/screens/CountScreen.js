import React,{useState} from 'react'
import { Text, StyleSheet,View,FlatList,Button } from 'react-native';
const CountScreen = () => {
    const [counter,setCounter]=useState(0)
    return (
        <View>
            <Button title="Increase" onPress={()=>{
               setCounter(counter+1)
            }}/>
            <Button title="Decrease" onPress={()=>{
                setCounter(counter-1)
            }}/>
        <Text>
            current count:{counter}
        </Text>
        </View>
    )
}

export default CountScreen
