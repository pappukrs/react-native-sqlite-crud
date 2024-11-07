import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppNavigator from './src/AppNavigator';
const App = () => {

// const myIcon1 = <Icon name="comments" size={30} color="#900" />; // Defaults to regular
// const myIcon2 = <Icon name="comments" size={30} color="#900" solid />;
// const myIcon3 = <Icon name="comments" size={30} color="#900" light />;
  return (
    // <View>
    //   <Text>App</Text>
    //   <Icon name="comments" size={30} color="#900" />
    // </View>
    <>
    <AppNavigator/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})