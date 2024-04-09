import { StyleSheet, Text, View,Button,TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser14 } from '../Redux/UserSlice'

const Signature = (Props) => {
  const[data,setData]=useState("")
  const Dispatch = useDispatch();
  
    const Personal=(item)=>{
      Alert.alert(" Data Submited Check Your CV in Download Folder")
    Dispatch(addUser14(item))   
  
    }
  return (
    <View>
      <Text style={styles.txt}>Signature</Text>
      <TextInput  value={data} onChangeText={(e)=>setData(e)} placeholderTextColor={"black"} placeholder='Write Here' style={styles.input}/>
      <Button title='Save' color={"black"} onPress={()=>Personal(data)}/>
    </View>
  )
}

export default Signature

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