import { View, Text,StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { firebase } from '../../config';


const Dashboard=() =>{

    const[name,setNames]=useState('')
    useEffect(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setNames(snapshot.data())
            }
            else{
                console.log('User does not exists!')
            }
        })
    },[])
  return (
    <SafeAreaView  style={styles.conatiner}>

      <Text style={{fontSize:20, fontWeight:'bold'}}
      
      >Hello, {name.name}</Text>

      <TouchableOpacity 
      onPress={()=>{firebase.auth().signOut()}}
      style={styles.button}
        >
            <Text style={{fontSize:22,fontWeight:'bold'}}>
                Sign Out
            </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


export default Dashboard;
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#9BCCA5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
})