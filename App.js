import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Reportage from './src/screens/Reportage'
import Journal from './src/screens/Journal'
import Parametre from './src/screens/Parametre'
import Partager from './src/screens/Partager'



const store = createStore(reducer)
const Stack = createStackNavigator()
const ReportageStack = createStackNavigator()
const Drawer = createDrawerNavigator()


const JournalStack = createStackNavigator();
const ParametreStack = createStackNavigator();
const PartagerStack = createStackNavigator();


const ReportageStackScreen = ({navigation}) => (
  <ReportageStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#800000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <ReportageStack.Screen name="Reportage" component={Reportage}
        options={{
          title: 'Reportage',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />
      </ReportageStack.Navigator>

);

const JournalStackScreen = ({navigation}) => (
  <JournalStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <JournalStack.Screen name="Home" component={Journal} options={{
          title: 'Journal',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </JournalStack.Navigator>

);

const ParametreStackScreen = ({navigation}) => (
  <ParametreStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <ParametreStack.Screen name="Parametre" component={Parametre} options={{
          title: 'Parametre',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </ParametreStack.Navigator>

);

const PartagerStackScreen = ({navigation}) => (
  <PartagerStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <PartagerStack.Screen name="Partager" component={Partager} options={{
          title: 'Partager',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </PartagerStack.Navigator>

);




export default function App() {
  return (
    <Provider store= {store}>
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" drawerStyle={{
      backgroundColor: "#FFDD00"
    }}>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="Reportage" component={ReportageStackScreen} />
        <Drawer.Screen name="Journal" component={JournalStackScreen} />
        <Drawer.Screen name="Partager" component={PartagerStackScreen} />
        <Drawer.Screen name="Parametre" component={ParametreStackScreen} />
        <Drawer.Screen name="search" component={Search} />
        <Drawer.Screen name="videoplayer" component={VideoPlayer} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
