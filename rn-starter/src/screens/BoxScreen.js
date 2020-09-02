import React from 'react'
import { View, Text, StyleSheet, Button,TextInput } from 'react-native';
const BoxScreen = () => {
    return (
        <View style={styles.viewStyles}>
       <Text style={styles.textoneStyles}>   salam  </Text>
       <Text style={styles.texttwoStyles}>   dovom </Text>
       <Text style={styles.textthreeStyles}>   sevom  </Text>
        </View>
    )
}



const styles=StyleSheet.create({
 viewStyles:{
     borderWidth:1,
     borderColor:'black',
     //andazye text faza migire
     alignItems:'flex-start',
     //childeran kenar ham ghara migiran
     flexDirection:'row',
     //bacheha har kodm age 2 ye khar bashan age in add kon bacheha vasat safe shara migiran
     justifyContent:'center',
     height:200

 },
 textoneStyles:{
    borderWidth:1,
    borderColor:'red',
    // margin top and buttom
    marginVertical:20,
    // in bahes mishe ke in child az hame bishtar faza begire
    //flex:1
  
 },
 texttwoStyles:{
    borderWidth:1,
    borderColor:'red',
    // margin top and buttom
    marginVertical:20,
    //location bacharo mitooni in tori taghir bedim 
    //alignSelf:'center'
  
 },
 textthreeStyles:{
    borderWidth:1,
    borderColor:'red',
    // margin top and buttom
    marginVertical:20,
    //

  
 }


})

export default BoxScreen
