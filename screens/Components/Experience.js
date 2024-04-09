import { StyleSheet, Text, View,Button,TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser2 } from '../Redux/UserSlice'


const Experience = (Props) => {
  const[data1,setData]=useState("")
  const Dispatch = useDispatch();
  
    const Personal=(item)=>{
    
      Alert.alert(" Data Submited")
    Dispatch(addUser2(item))   
    
    }
  return (
    <View>
      <Text style={styles.txt}>Experience</Text>
      <TextInput value={data1} onChangeText={(e)=>setData(e)}  placeholderTextColor={"black"} placeholder='Write Here' style={styles.input}/>
      <Button key={"experience"}  title='Save' color={"black"} onPress={()=>Personal(data1)}/>
    </View>
  )
}

export default Experience

const styles = StyleSheet.create({
    txt:{
        fontSize:40,
        color:"black",
        fontWeight:"800"
   },
   input:{
       height: 100,
       borderRadius:10,
       borderColor:"red",
       margin:10,
       borderWidth:1,
       backgroundColor:"white"
   },
   input1:{
       height:100,
       borderRadius:10,
       borderColor:"red",
       margin:10,
       borderWidth:1,
       backgroundColor:"white"
   },
})