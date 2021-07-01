import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile'

const Stack = createStackNavigator();

const App = () =>{
  return(
    <View style={Styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Employee" component={CreateEmployee} />
      </Stack.Navigator>
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e6e6e6'
    // justifyContent:'center',
    // alignItems:'center'
  }
})

export default ()=>{
    return(
      <NavigationContainer>
        <App />
      </NavigationContainer>
    )
}