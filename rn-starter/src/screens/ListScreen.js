import React from 'react'
import { Text, StyleSheet,View,FlatList } from 'react-native';
const ListScreen = () => {
    const firends=[
        // key has to be unique mitoonim to list add kon masaln  {name:'firend1',key:'1'}, ya inja vared mikonim model dovom 
        {name:'firend1',age:23},
        {name:'firend2',age:24},
        {name:'firend3',age:24},
        {name:'firend4',age:24},
        {name:'firend5',age:24},
        {name:'firend6',age:24},
        
        

    ]
    return (
        //let me to show the list but has 2 require porps data , renderItem
        <FlatList 
        
       
        //model dovom in model behtare ke khate payin fieldo estefadeh mikonim ke unique
        keyExtractor={(firend)=>firend.name}
        data={firends}
         renderItem={({item})=>{
         return <Text  style={Styles.textStyle}>{item.name}- age {item.age}</Text>
         }}/>
    )
}
const Styles=StyleSheet.create({
    textStyle:{
        marginVertical:70
    }
})

export default ListScreen
