import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Constant from 'expo-constants'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/screens/VideoPlayer'
import Explore from './src/screens/Explore'
import Suscribe from './src/screens/Suscribe'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './src/reducers/reducer'


const store = createStore(reducer)
const Stack = createStackNavigator()


export default function App() {
  return (
    <Provider store= {store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoplayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
