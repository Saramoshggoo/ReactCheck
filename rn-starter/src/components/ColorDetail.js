import React from 'react'
import { Text, StyleSheet,View,FlatList,Button } from 'react-native';
const colorDetail = ({color,increase ,decrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`increase ${color}`} onPress={()=>increase()}/>
            <Button title={`decrese ${color}`} onPress={()=>decrease()}/>
           </View>
    )
}

export default colorDetail
