import React from 'react'
import { Text, StyleSheet,View,FlatList } from 'react-native';
import ImageDetails from '../components/ImageDetails'
const ImageScreen = () => {
    return (
        <View>
           < ImageDetails title='forest'  imageSource={require("../../assets/forest.jpg")} score ="score 10"/>
           < ImageDetails title='ocean' imageSource={require("../../assets/beach.jpg")} score ="score 20"/>
           < ImageDetails  title='mountain' imageSource={require("../../assets/mountain.jpg")} score ="score 12"/>
        
        

        </View>
    )
}

export default ImageScreen
