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
// import * as FS from 'expo-file-system';
import { FileSystem,Permissions } from 'expo';
import * as data from './trial2.json'
// import * as FileSystem from 'expo-file-system';


  export default function ScanReport({navigation})
  {
    const onPressHandlerAppleQuestion1=()=>{
        navigation.navigate('Question')
    }

    



const result = require('../../trial2.json');
const word=data.quality
    return (
        <View
            style={styles.container}
        >
            <Text style={{color:"#000000",fontSize:35, alignSelf:"center",paddingTop:300}}>
                {word}   
            </Text>
            <TouchableOpacity style={{paddingTop:0,alignSelf:"center",backgroundColor:'#6CA55D',marginTop:40,height:'25%',width:'30%',borderRadius:10}}
              onPress={onPressHandlerAppleQuestion1}
            >
              <Text style={{fontSize:25,alignSelf:"center",paddingTop:10}}>
                Next
              </Text>
            </TouchableOpacity>
       </View>

    )
  }

  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"#ffffff",
    },
    
  })
