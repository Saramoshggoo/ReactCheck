import React from 'react';
import { Text, StyleSheet,View } from 'react-native';

const ComponentsScreen = () => {
  const greeting="helo"
  return(
    //view using for showing multi text it has to rapped by view
   <View>
  <Text style={styles.textStyle}>This is the components screen</Text>
  <Text>{greeting}</Text>
  </View>)
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30, 
    color:'red'
  }
});

export default ComponentsScreen;
