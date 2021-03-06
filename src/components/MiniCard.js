import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MiniCard = (props)=>{
  const navigation = useNavigation();
  return(
    <TouchableOpacity
      onPress={() =>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
    >
    <View style={{flexDirection:"row", margin:10, marginBottom:0}}>
    <Image
      source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
      style={{
        width:"45%",
        height:100
      }}
    />
    <View style={{
      padding:7
    }}>
    <Text style={{
      fontSize:17,
      width:Dimensions.get("screen").width/2
    }}
      ellipsizeMode="tail"
      numberOfLines={3}
    > {props.title}</Text>
    <Text style={{
      fontSize:12
    }}>{props.channel}</Text>
    </View>
    </View>
    </TouchableOpacity>
  )
}



export default MiniCard
