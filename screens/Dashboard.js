import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Dashboard = ( Props) => {
  const {navigation} = Props;
  const PP=()=>{
     navigation.navigate("Resumedata")
  }
  const PP2=()=>{
    navigation.navigate("Downloadcv")
 }
  return (
    <ImageBackground source={require('../screens/images/img00.jpg')} style={{flex:1,}} >
            
    <View style={styles.view1}>
      <View style={styles.View2}>
        
    <TouchableOpacity  style={styles.txt2} onPress={()=>PP()}>
        <Text style={styles.txt1}>Create CV</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.txt2} onPress={()=>PP2()}>
        <Text  style={styles.txt1}>Download CV</Text>
    </TouchableOpacity>
    </View>
    </View>
    </ImageBackground>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  view1:{
         
         
  },
  View2:{
        
         alignSelf:"center",
         justifyContent:"center",
        
        
  },
  txt1:{
       fontSize:40,
       fontWeight:"800",
       textAlign:"center",
       color:"white",
       
  },
  txt2:{
      width: 300,
      height:70,
      alignSelf:"center",
      margin:100,
      backgroundColor:"gold",
      borderRadius:20
  }
})