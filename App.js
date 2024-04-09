import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from './screens/Dashboard'
import Resumedata from './screens/Resumedata'
import { NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import PersonalDetails from './screens/Components/PersonalDetails'
import Education from './screens/Components/Education'
import Experience from './screens/Components/Experience'
import Skills from './screens/Components/Skills'
import Objective from './screens/Components/Objective'
import Reference from './screens/Components/Reference'
import Projects from './screens/Components/Projects'
import Coverletter from './screens/Components/Coverletter'
import Interests from './screens/Components/Interests'
import Achievement from './screens/Components/Achievement'
import Activities from './screens/Components/Activities'
import Publication from './screens/Components/Publication'
import Language from './screens/Components/Language'
import Additional from './screens/Components/Additional'
import Signature from './screens/Components/Signature'
import Downloadcv from './screens/Downloadcv'

const stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerTitle:"Resume Maker",headerTintColor:"white",headerStyle:{backgroundColor:"gold"},headerTitleStyle:{fontFamily:"cursive",fontSize:30,fontWeight:"900",}}}>
          <stack.Screen name="Dashboard" component={Dashboard} />
          <stack.Screen name="Resumedata" component={Resumedata} />
          <stack.Screen name="PersonalDetails" component={PersonalDetails} />
          <stack.Screen name="Education" component={Education} />
          <stack.Screen name="Experience" component={Experience} />
          <stack.Screen name="Skills" component={Skills}/>
          <stack.Screen name="Objective" component={Objective}/>
          <stack.Screen name="Reference" component={Reference}/>
          <stack.Screen name="Projects" component={Projects}/>
          <stack.Screen name="Coverletter" component={Coverletter}/>
          <stack.Screen name="Interests" component={Interests}/>
          <stack.Screen name="Achievement" component={Achievement}/>
          <stack.Screen name="Activities" component={Activities}/>
          <stack.Screen name="Publication" component={Publication}/>
          <stack.Screen name="Language" component={Language}/>
          <stack.Screen name="Additional" component={Additional}/>
          <stack.Screen name="Signature" component={Signature}/>
          <stack.Screen name="Downloadcv" component={Downloadcv} options={{headerTitle:"Download CV"}}/>
           
        </stack.Navigator>
      </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})