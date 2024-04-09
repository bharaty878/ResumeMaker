import { StyleSheet, Text, View,Button,TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../Redux/UserSlice'

const Education = (Props) => {
  const[data,setData]=useState("")
  const Dispatch = useDispatch();
  
    const Personal=(item)=>{
    console.warn(item)
    Alert.alert(" Data Submited")
    Dispatch(addUser(item),)   
    
    
    }
  return (
    <View>
      <Text style={styles.txt}>Education</Text>
      <TextInput  value={data} onChangeText={(e)=>setData(e)}  placeholderTextColor={"black"} placeholder='Write Here' style={styles.input}/>
      <Button key={"education"} title='Save' color={"black"} onPress={()=>Personal(data)}/>
    </View>
  )
}

export default Education

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