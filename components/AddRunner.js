import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Task = (props) => {
    
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <View style={styles.square}>
                    <Image source={require('../assets/pexels-frank-cone-2291874.jpg')} style={styles.athletesImage}></Image>
                </View>
                <View style={styles.athletesDesc}>
                    <Text style={styles.itemText}></Text>
                    <Text style={styles.itemsTextName}>John Doe</Text>
                    <Text style={styles.itemsTextEmail}>{props.text}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
      backgroundColor:'#E8EAED',
      padding:15,
      borderRadius:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom: 20
    },
    itemLeft: {
      flexDirection:'row',
      alignItems:'center',
      flexWrap:'wrap'
    },
    itemsTextName: {
      maxWidth:'100%',
      fontWeight: 'bold',
    },
    itemsTextEmail: {
    maxWidth:'100%',
    opacity:0.5,
    },
    square: {
      width:50,
      height:50,
      opacity:1,
      borderRadius:5,
      marginRight:15,
    },
    athletesDesc: {
      flexDirection:'column',
      alignItems:'left',
      flexWrap:'wrap',
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
    athletesImage:{
      width: '100%',
      height: '100%',
      marginLeft: 5,
      marginRight: 5,
      borderRadius: '50%',
  },
});
  
export default Task;
  