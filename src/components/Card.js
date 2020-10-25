import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Card = (props)=>{
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.main_container}
        onPress={() =>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
      >
        <Image
          style={styles.image}
          source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{props.title}</Text>
            <Text style={styles.vote_text}> vue(s)</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{props.channel}</Text>

          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }


const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#666666',
    marginTop: 10
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 10
  }
})


export default Card
