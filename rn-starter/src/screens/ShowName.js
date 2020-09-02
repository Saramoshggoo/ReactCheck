import React,{useState}  from 'react' 
import { View, Text, StyleSheet, Button,TextInput } from 'react-native';
const ShowName = () => {
    const [name,setName]= useState('')
    const [pass,setPass]= useState('')
    //by default textInput style nadare bayad behesh bedim vagarna chizi to sceen nemibini
    return (
        <View>
            <Text>name </Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            value={name}
            onChangeText={(newValue)=>{setName(newValue) }}
            /> 
            <Text>my name is</Text>

            <Text>put your password</Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false}
            value={pass}
            onChangeText={(newValue)=>{setPass(newValue) }}
            /> 
            {pass.length < 4 ? <Text>your pass has to more than 4</Text>: null}
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }

})

export default ShowName
