import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Resumedata = (Props) => {
  const {navigation} = Props;
  const Personal=()=>{
     navigation.navigate("PersonalDetails")
       
  }
  const Personal2=()=>{
    navigation.navigate("Education")
 
 }
 const Personal3=()=>{
  navigation.navigate("Experience")

}
const Personal4=()=>{
  navigation.navigate("Skills")

}
const Personal5=()=>{
  navigation.navigate("Objective")

}
const Personal6=()=>{
  navigation.navigate("Reference")

}
const Personal7=()=>{
  navigation.navigate("Projects")

}
const Personal8=()=>{
  navigation.navigate("Coverletter")

}
const Personal9=()=>{
  navigation.navigate("Interests")

}
const Personal10=()=>{
  navigation.navigate("Achievement")

}
const Personal11=()=>{
  navigation.navigate("Activities")

}
const Personal12=()=>{
  navigation.navigate("Publication")

}
const Personal13=()=>{
  navigation.navigate("Language")

}
const Personal14=()=>{
  navigation.navigate("Additional")

}
const Personal15=()=>{
  navigation.navigate("Signature")

}

  return (
    <View style={styles.View1}>
      <Text style={styles.txt1}>Please Select & Fill Your Details</Text>
      <TouchableOpacity style={styles.Btn1}  onPress={()=>Personal()}>
        <Text style={styles.txt2}>Personal Details</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>Personal2()}>
        <Text style={styles.txt2}>Education</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal3()}>
        <Text style={styles.txt2}>Experience</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>Personal4()}>
        <Text style={styles.txt2}>Skills</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal5()}>
        <Text style={styles.txt2}>Objective</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal6()}>
        <Text style={styles.txt2}>Reference</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal7()}>
        <Text style={styles.txt2}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal8()}>
        <Text style={styles.txt2}>Cover Letter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal9()}>
        <Text style={styles.txt2}>Interests</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal10()}>
        <Text style={styles.txt2}>Achievement & Awards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal11()}>
        <Text style={styles.txt2}>Activities</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal12()}>
        <Text style={styles.txt2}>Publications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal13()}>
        <Text style={styles.txt2}>Languages</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>Personal14()}>
        <Text style={styles.txt2}>Additional Information</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Personal15()}>
        <Text style={styles.txt2}>Signature</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Resumedata

const styles = StyleSheet.create({
  input:{
    borderRadius:10,
    borderColor:"red",
    margin:10,
    borderWidth:1,
    backgroundColor:"white"
},
View1:{
         flex:1,
        backgroundColor:"gold"
},
txt1:{
    color:"black",
    fontSize:20,
    margin:20
},
txt2:{
        color:"white",
        margin:5,
        marginLeft:20,
        fontSize:20
}
})