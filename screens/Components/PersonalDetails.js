import { StyleSheet, Text, View,TextInput, Button,Alert } from 'react-native'
import React, {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser15 } from '../Redux/UserSlice'

const PersonalDetails = () => {
  const[data,setData]=useState("")
  const[data2,setData2]=useState("")
  const[data3,setData3]=useState("")
  const[data4,setData4]=useState("")  
  const Dispatch = useDispatch();

  const Personal=(item)=>{
    Alert.alert(" Data Submited")
   Dispatch(addUser15(item))   
  }
  return (
    <View>
      <Text style={styles.txt}>Personal Details</Text>
      <TextInput value={data} onChangeText={(e)=>setData(e)} placeholderTextColor={"black"} placeholder='Write Name' style={styles.input}/>
      <TextInput  value={data2} onChangeText={(e)=>setData2(e)} placeholderTextColor={"black"} placeholder='Write E-mail' style={styles.input}/>
      <TextInput  value={data3} onChangeText={(e)=>setData3(e)} placeholderTextColor={"black"} placeholder='Write Address' style={styles.input1}/>
      <TextInput  value={data4} onChangeText={(e)=>setData4(e)} placeholderTextColor={"black"} placeholder='Write Phone Number' style={styles.input}/>
      <Button title='Save' color={"black"} onPress={()=>Personal([data,data2,data3,data4])}/>
      
    </View>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
    txt:{
         fontSize:40,
         color:"black",
         fontWeight:"800"
    },
    input:{
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