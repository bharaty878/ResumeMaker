import { StyleSheet, Text, View,Button,TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser3 } from '../Redux/UserSlice'

const Skills = (Props) => {
  const[data3,setData]=useState("")
  const Dispatch = useDispatch();  
    const Personal=(item)=>{
      Alert.alert(" Data Submited")
    Dispatch(addUser3(item))   
  
    }
  return (
    <View>
      <Text style={styles.txt}>Skills</Text>
      <TextInput value={data3} onChangeText={(e)=>setData(e)}  placeholderTextColor={"black"} placeholder='Write Here' style={styles.input}/>
      <Button title='Save' color={"black"} onPress={()=>Personal(data3)}/>
    </View>
  )
}

export default Skills

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