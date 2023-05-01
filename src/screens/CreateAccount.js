import { CurrentRenderContext, DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
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
import { firebase } from '../../config';
import { useFonts } from 'expo-font';

  export default function CreateAccount({navigation})
  {
    const onPressHandlerLogin=()=>{
        navigation.navigate('Login')
    }
    
    const [email,setEmail] = useState('')
      const[password,setPassword]=useState('')
      const[name,setName]=useState('')
      const registerUser = async (email,password,name)=>{
            await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url:'https://pikfresh-220d7.firebaseapp.com',
                })
                .then(()=>{
                    alert('verification email sent')
                }).catch((error)=>{
                    alert(error.message)
                })
                .then(()=>{
                    firebase.firestore().collection('users')
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email,
                    })
                })
                
                .catch((error)=>{
                    alert(error.message)
                })
            }) 
            .catch((error)=>{
                alert(error.message)
            })
        
    }

    const [loaded]=useFonts({
        Sarabun:require('../../assets/fonts/Sarabun-Medium.ttf')
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
                Create New Account
            </Text>
            <View style={styles.innerinner}>
            <Text style={styles.textmail}>
                    Name:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(name)=>setName(name)}
                    autoCorrect={false}
                />
                <Text style={styles.textmail}>
                    Email:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email)=>setEmail(email)}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <Text style={styles.textmail}>
                    Password:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(password)=>setPassword(password)}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                
               
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>registerUser(email,password,name)}
                 >
                    
                    <Text style={styles.stylebutton}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.textnew}>
                    Already have an account ?
                </Text>
                <Pressable
                onPress={onPressHandlerLogin}
                >
                    <Text style={styles.text1}>Login</Text>
                </Pressable>
            </View>
          </View>
       </View>

    )
  }

  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"#2b463c",
    },
    inner:{
        backgroundColor:"#D9D9D9",
        height:568,
        width:'100%',
        borderRadius:40,
        top:250,
    },
    text1:{
        color:"#000000",
        // backgroundColor:'#00b',
        fontFamily:'Sarabun',
        textAlign:'center',
        top:45,
        left:110,
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
        left:58,
        fontSize:25,
        padding:5,
    },
    input:{
        top:30,
        borderColor:'#9BCCA5',
        borderWidth:1,
        borderRadius:15,
        width:'70%',
        height:50,
        padding:10,
        left:55,
    },
    forget:{
        fontFamily:'Sarabun',
        color:'#000000',
        left:60,
        top:35,
        fontSize:15,
    },
    button:{
        backgroundColor:"#D9D9D9",
        borderRadius:15,
        top:45,
        width: 146,
        height: 48,
        left: 120,
        alignItems:'center',

    },
    stylebutton:{
        fontFamily:'Sarabun',
        fontSize:20,
        color:'#000000',
        // backgroundColor:'#00b'
        textAlign:'center',
        top:5,
    },
    textnew:{
        color:'#000000',
        textAlign:'center',
        top:70,
        fontFamily:'Sarabun',
        textAlign:'center',
    }
  })
