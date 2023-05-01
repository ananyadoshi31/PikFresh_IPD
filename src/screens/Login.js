import { DrawerActions, DrawerRouter, getFocusedRouteNameFromRoute, NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,
    // CustomButton,
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from 'expo-font';


import { firebase } from '../../config';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

  export default function Login({})
  {
    

    const onPressHandlerSignup=()=>{
        navigation.navigate('CreateAccount')
      }

    
    const navigation = useNavigation()
      const [email,setEmail] = useState('');
      const[password,setPassword]=useState('');

      const loginUser= async (email,password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
            
        } catch(error){
            alert(error.message)
        }
      
    }

    const forgetPassword=()=>{
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            alert("Password reset email sent")
        }).catch((error)=>{
            alert(error)
        })
    }

    
    const [loaded]=useFonts({
        Sarabun:require('../../assets/fonts/Sarabun-Medium.ttf')
        // BreeSerif:require('../../assets/fonts/BreeSerif-Regular.ttf')
      })
  
      if(!loaded)
      {
        return null;
      }

    return (

      
        <View
            style={styles.container}
        >
            <Image style={styles.login_logo}  source = {require('../../assets/1.png')}/>
            
          <View style={styles.inner}>
            <Text style={styles.text}>
                Login to your Account
            </Text>
            <View style={styles.innerinner}>
                <Text style={styles.textmail}>
                    Email:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email)=> setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete='off'
                />
                <Text style={styles.textmail}>
                    Password:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(password)=> setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                {/* <Pressable
                    // onPress={onPressHandlerForget}
                >
                    <Text style={styles.forget}>
                        Forget Password
                    </Text>
                </Pressable> */}
                <TouchableOpacity 
                    onPress={()=> {forgetPassword()}}
                    style={styles.button2}
                >
                    
                    <Text style={styles.forget}>Forgot Password</Text>
                </TouchableOpacity>
                <Pressable style={styles.button}
                    onPress={()=> loginUser(email,password)}
                    
                >
                    
                    <Text style={styles.stylebutton}>Login</Text>
                </Pressable>
                <Text style={styles.textnew}>
                    New User? 
                </Text>
                <Pressable
                    onPress={onPressHandlerSignup}
                    style={styles.button1}
                >
                    <Text style={styles.text1}>Sign Up</Text>
                </Pressable>
            </View>
          </View>
       </View>

    )
  }
//   }
  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"#2b463c",
    },
    text1:{
        color:"#000000",
        fontFamily:'Sarabun',
        textAlign:'center',
        top:0,
        left:40,
    },
    button2:{
        // marginTop:10,
        top:45,
        // marginTop:50,
        marginLeft:55,
        width:'100%'
        // height:'30%',
        // backgroundColor:'#00bcd4',
    },
    button1:{
        marginTop:25,
        // backgroundColor:'#00bcd4'
    },
    inner:{
        backgroundColor:"#D9D9D9",
        height:568,
        width:'100%',
        borderRadius:40,
        top:250,
    },
    innerinner:{
        backgroundColor:'#ffffff',
        height:514,
        top:30,
        width:'100%',
        borderRadius:40,

    },
    text:{
        fontSize:28,
        color:'#000000',
        fontFamily:'Sarabun',
        textAlign:'center',
        top:10,
    },
    login_logo:{
        width: '60%',
        height: '40%',
        left: 70,
        top: -5,
        marginBottom:-320,
        alignItems:'center',
        
    },
    textmail:{
        fontFamily:'Sarabun',
        color:'#000000',
        top:30,
        left:40,
        fontSize:25,
        padding:15,
    },
    input:{
        top:30,
        borderColor:'#9BCCA5',
        borderWidth:1,
        borderRadius:15,
        width:'70%',
        height:50,
        left:55,
        padding:10,
    },
    forget:{
        // fontFamily:'BreeSerif',
        color:'#000000',
        // backgroundColor:'#000000',
        left:-20,
        top:-10,
        fontSize:15,
        padding:20,
        width:'100%',
    },
    button:{
        backgroundColor:"#D9D9D9",
        borderRadius:15,
        top:35,
        width: 146,
        height: 48,
        left: 120,
        alignItems:'center',
        
    },
    stylebutton:{
        fontFamily:'Sarabun',
        fontSize:20,
        color:'#000000',
        textAlign:'center',
        top:4,
        // backgroundColor:'#00bcd4',
        width:'100%',
        height:'120%',
    },
    textnew:{
        color:'#000000',
        textAlign:'center',
        top:50,
        fontFamily:'Sarabun',
        textAlign:'center',
        left:-30,
    }
  })
