

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
//  import type  from 'react';
 import {
   Button,
   FlatList,
   Linking,
   RefreshControl,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   TouchableOpacity,
   Pressable,
   Alert,
   ToastAndroid,
   Modal,
   Image,
   ImageBackground,
  // Button
 } from 'react-native';

//commit
import { firebase } from './config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VanshButton from './src/utils/CustomButton';

import Main from './src/screens/Main';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import Recorder from './src/screens/Recorder';

import 'react-native-gesture-handler';
import SelectFruit from './src/screens/SelectFruit';
import ForgetPassword from './src/screens/ForgetPassword';
import Verification from './src/screens/Verification';
import Support from './src/screens/Support';
import Question from './src/screens/Question';
import BananaQuestion1 from './src/screens/BananaQuestion1';
import BananaQuestion2 from './src/screens/BananaQuestion2';
import BananaQuestion3 from './src/screens/BananaQuestion3';
import AppleQuestion3 from './src/screens/AppleQuestion3';
import AppleQuestion2 from './src/screens/AppleQuestion2';
import AppleQuestion4 from './src/screens/AppleQuestion4';
import Dashboard from './src/screens/Dashboard';
import ReportBanana from './src/screens/ReportBanana';
import ReportApple from './src/screens/ReportApple';
import PickImage from './src/screens/PickImage';
import ScanReport from './src/screens/ScanReport';
const Stack=createStackNavigator();


function App()
{

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user)
  {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

 if (initializing) return null;

 if(!user)
 {
   return(
 
     <NavigationContainer >
       <Stack.Navigator
 
         initialRouteName='Login'
 
         screenOptions={{
           headerShown:true,
           swipeEnabled:true,
           gestureEnabled:true,
           headerTitleAlign:'center',
           headerStyle:{
             backgroundColor:'#0080ff'
           },
           headerTintColor:'#ffffff',
           headerTitleStyle:{
             fontSize:25,
             fontWeight:'bold',
           }
         }}
       >
       
       
         <Stack.Screen
           name="Dashboard"
           component ={Dashboard}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="PickImage"
           component ={PickImage}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="Support"
           component ={Support}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="ScanReport"
           component ={ScanReport}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="SelectFruit"
           component ={SelectFruit}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="Login"
           component ={Login}
           options={{
             headerShown:false
 
           }}
         />
         <Stack.Screen
           name="CreateAccount"
           component ={CreateAccount}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="ForgetPassword"
           component ={ForgetPassword}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="Recorder"
           component ={Recorder}
           options={{
             headerShown:false
           }}
         />
 
 
       </Stack.Navigator>
     </NavigationContainer>
 
 );
 }
 return(
   <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen
            name="Main"
            component ={Main}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="ForgetPassword"
            component ={ForgetPassword}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="Support"
            component ={Support}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="SelectFruit"
            component ={SelectFruit}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="Recorder"
            component ={Recorder}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
           name="ScanReport"
           component ={ScanReport}
           options={{
             headerShown:false
           }}
         />
  <Stack.Screen
           name="PickImage"
           component ={PickImage}
           options={{
             headerShown:false
           }}
         />
    <Stack.Screen
            name="Question"
            component ={Question}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="BananaQuestion1"
            component ={BananaQuestion1}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="ReportBanana"
            component ={ReportBanana}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="ReportApple"
            component ={ReportApple}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="BananaQuestion2"
            component ={BananaQuestion2}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="BananaQuestion3"
            component ={BananaQuestion3}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="AppleQuestion2"
            component ={AppleQuestion2}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="AppleQuestion3"
            component ={AppleQuestion3}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="AppleQuestion4"
            component ={AppleQuestion4}
            options={{
            headerShown:false
           }}
     />
     </Stack.Navigator>
   </NavigationContainer>
 )
 
 }




export default App;