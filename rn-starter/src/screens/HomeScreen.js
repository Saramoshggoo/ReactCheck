import React from 'react';
import { Text, StyleSheet,View,Button ,TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  // model button darim Button TouchableOpacity
  //modeli ke mitoonim ba click kardan be compoenent dige berimm 'props.navigation.navigate('component name')
  return (
  <View>
  <Text style={styles.text}>Hi there!</Text>
   <Button 
   onPress={()=>props.navigation.navigate('Components')}
   title="Go To Compo demo "/>
   <Button 
   onPress={()=>props.navigation.navigate('Images')}
   title="Go To Compo iamge "/>
     <Button 
   onPress={()=>props.navigation.navigate('Count')}
   title="Go To Compo count "/>
   <Button 
   onPress={()=>props.navigation.navigate('Color')}
   title="Go To Compo color"/>
    <Button 
   onPress={()=>props.navigation.navigate('SqureColor')}
   title="Go To Compo Squre"/>
     <Button 
   onPress={()=>props.navigation.navigate('SqureReducerScreen')}
   title="Go To Compo Reducer"/>
    <Button 
   onPress={()=>props.navigation.navigate('CountReducer')}
   title="Go To Compo countReducer"/>
     <Button 
   onPress={()=>props.navigation.navigate('ShowName')}
   title="Go To demo showname"/>
     <Button 
   onPress={()=>props.navigation.navigate('BoxScreen')}
   title="Go To demo box"/>

   <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
     <Text>go to list </Text>
   </TouchableOpacity>
  </View>
  )


};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
