import { FlatList, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import reactNativeHTMLToPdf from 'react-native-html-to-pdf'

const Downloadcv = (Props) => {
  const data = useSelector(state=>state.user)
  const[val,setVal]=useState(data)
const[unload,setLoad]=useState(false)

useEffect(() => {
  if(data === null){
   setLoad(false)
  }else if(data){
    setLoad(true)
  }
}, [data])

const qq = {val};
  const Generate =async()=>{
    const options = {
      html:`${"PERSONAL DETAILS :"+val.data15}<br></br>
            ${"EDUCATION : "+val.data}<br></br>
            ${"EXPERIENCE : "+val.data2}<br></br>
            ${"SKILLS : "+val.data3}<br></br>
            ${"OBJECTIVE : "+val.data4}<br></br>
            ${"REFERENCE : "+val.data5}<br></br>
            ${"PROJECTS : "+val.data6}<br></br>
            ${"COVER LETTER : "+val.data7}<br></br>
            ${"INTERESTS : "+val.data8}<br></br>
            ${"ACHIEVEMENTS : "+val.data9}<br></br>
            ${"ACTIVITIES : "+val.data10}<br></br>
            ${"PUBLICATIONS : "+val.data11}<br></br>
            ${"LANGUAGE : "+val.data12}<br></br>
            ${"ADDITIONAL INFORMATION : "+val.data13}<br></br>
            ${"SIGNATURE : "+val.data15}<br></br>`,
      filename:"HTML",
      directory:"Documents"

    }
     const file = await reactNativeHTMLToPdf.convert(options); 
     console.log(file)
      Alert.alert("Success",`Pdf Saved to ${file.filePath}`)
  }
  
  return (
    <ScrollView>
    <View style={{flex:1}}>
{ unload ? <>
      <Text style={{fontSize:30,color:"green",alignSelf:"center"}}>Download CV</Text>
            <Text style={styles.txt1}>{"Personal Details : "+val.data15}</Text>
            <Text style={styles.txt1}>{"Education : "+val.data}</Text>
            <Text style={styles.txt1}>{"Experience :"+val.data2}</Text>
            <Text style={styles.txt1}>{"Skills : "+val.data3}</Text>
            <Text style={styles.txt1}>{"Objective : "+val.data4}</Text>
            <Text style={styles.txt1}> {"Reference :"+val.data5}</Text>
            <Text style={styles.txt1}>{"Projects :"+val.data6}</Text>
            <Text style={styles.txt1}> {"Coverletter :"+val.data7}</Text>
            <Text style={styles.txt1}>{"Interests :"+val.data8}</Text>
            <Text style={styles.txt1}>{"Achievements :"+val.data9}</Text>
            <Text style={styles.txt1}>{"Activities : "+val.data10}</Text>
            <Text style={styles.txt1}>{"Publications :"+val.data11}</Text>
            <Text style={styles.txt1}>{"Languages :"+val.data12}</Text>
            <Text style={styles.txt1}>{"Additional Information :"+val.data13}</Text>
            <Text style={styles.txt1}>{"Signature :"+val.data14}</Text>
            <Button title='Generate Pdf' color={"gold"} onPress={Generate}/>
            <Text style={{alignSelf:"center"}}>Please Create CV then Press on Generate Pdf</Text>
            </>: <Text>"Create Your CV AND MAKE YOUR PDF"</Text>}
    </View>
    </ScrollView>
  )
}

export default Downloadcv

const styles = StyleSheet.create({
  txt1:{
      color:"black",
      margin:2,
      marginLeft:5
  }
})