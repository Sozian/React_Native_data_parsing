import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import DataView from './DataView'


const Stack =createStackNavigator();  // creating the StackNavigator object via Stack

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouterName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DataView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App