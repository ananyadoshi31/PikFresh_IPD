import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
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
  
  export default function Verification({navigation})
  {


    return (
        <View
            style={styles.container}
        >    
          <View style={styles.inner}>
            <View style={styles.innerinner}>
                <Text style={styles.text}>
                    Enter verifation code:
                </Text>
                <TextInput
                style={styles.input}
                />
                <Text style={styles.textmail}>
                    Resend OTP
                </Text>                
                <Pressable style={styles.button} >  
                    <Text style={styles.stylebutton}>Verify</Text>
                </Pressable>  
            </View>
          </View>
       </View>
    )
  }

  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"#9BCCA5",
    },
    inner:{
        backgroundColor:"#D9D9D9",
        height:700,
        width:'100%',
        borderRadius:40,
        top:200,
    },

    innerinner:{
        backgroundColor:'#ffffff',
        height:700,
        top:80,
        width:'100%',
        borderRadius:40,

    },
    text:{
        fontSize:25,
        color:'#000000',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        top:30,
    },
    textmail:{
        fontFamily:'JosefinSans-SemiBold',
        color:'#000000',
        top:50,
        left:222,
        fontSize:15,
        padding:15,
    },
    input:{
        top:50,
        borderColor:'#9BCCA5',
        borderWidth:1,
        borderRadius:15,
        width:'70%',
        left:55,
    },

    button:{
        backgroundColor:"#9BCCA5",
        borderRadius:15,
        top:65,
        width: 146,
        height: 48,
        left: 120,
        alignItems:'center',

    },
    stylebutton:{
        fontFamily:'JosefinSans-SemiBold',
        fontSize:20,
        color:'#000000',
        textAlign:'center',
        top:9,
        alignSelf:'center',
    },


    
     
  })