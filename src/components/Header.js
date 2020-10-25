import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
  const navigation = useNavigation()
  const mycolor = "white"
  return (
    <View style={{
      marginTop: Constant.statusBarHeight,
      height:45,
      backgroundColor:"black",
      flexDirection:"row",
      justifyContent:"space-between",

    }}>
      <View style={{flexDirection:"row",
    margin:5}}>
    <Icon.Button name='ios-menu' size={25}
        backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
        ></Icon.Button>
        <Text style={{
          fontSize:22,
          marginLeft:5,
          color:mycolor
        }}> UAC WEB TV </Text>
      </View>
      <View style={{
        flexDirection :"row",
        justifyContent:"space-around",
        width:100,
        margin:5
      }}>
        <FontAwesome name="search" size={30} color={mycolor} onPress={ ()=>navigation.navigate("search")} />
        <MaterialIcons name="notifications-none" size={30} color={mycolor} />
      </View>
    </View>
  );
}
