import { View, Text ,Alert,StyleSheet,Image} from 'react-native'
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { render } from 'react-dom';
import { useFonts } from 'expo-font';

const ReportBanana = ({route}) => {
  // let var1;
   
  const [loaded]=useFonts({
    Barlow:require('../../assets/fonts/BarlowCondensed-Regular.ttf'),
    BreeSerif:require('../../assets/fonts/BreeSerif-Regular.ttf')

  })

  if(!loaded)
  {
    return null;
  }

    if(route.params.paramKey4=='Black' || route.params.paramKey4=='Brown')
    {
        if(route.params.paramKey5=='darkyellow')
        {
            if(route.params.paramKey6=='low' || route.params.paramKey6=="moderate")
            {
                 return (
                  <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.header}>  
                        Report
                      </Text>  
                    </View>
                    <View style={styles.logo}>
                    <Image style={styles.banana_logo}  source = {require('../../assets/banana_img.jpeg')}/>
                    </View>
                    <View style={styles.boxcontent}>
                    <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                          <Text style={styles.reporttxt}>Quality: RIPE</Text>
                          <Text style={styles.reporttxt}>Expected Survival: 2-3 DAYS</Text>
                          <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                    </View>
                  </View>
                 )
            }
            else if(route.params.paramKey6=="high")
            {
              return (
                <View style={styles.container}>
                  <View style={[styles.card, styles.shadowProp]}>  
                    <Text style={styles.header}>  
                      Report
                    </Text>  
                  </View>
                  <View style={styles.logo}>
                  <Image style={styles.banana_logo}  source = {require('../../assets/banana_overripe.png')}/>
                  </View>
                  <View style={styles.boxcontent}>
                  <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                        <Text style={styles.reporttxt}>Quality: OVER RIPE</Text>
                        <Text style={styles.reporttxt}>Expected Survival: 0-1 DAY</Text>
                        <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                  </View>
                </View>
               )
            }
        }
        else if(route.params.paramKey5=="green" || route.params.paramKey5=="greenishyellow")
        {
          if(route.params.paramKey6=="low" || route.params.paramKey6=="moderate" || route.params.paramKey6=="high")
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.banana_logo}  source = {require('../../assets/green_banana.jpg')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                      <Text style={styles.reporttxt}>Quality: UNRIPE</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 3-4 DAYS</Text>
                      <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                </View>
              </View>
             )
          }
        }
        else if(route.params.paramKey5=="lemonyellow")
        {
          if(route.params.paramKey6=="low" )
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.banana_logo1}  source = {require('../../assets/lemonyellow_low.jpg')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                      <Text style={styles.reporttxt}>Quality: UNRIPE</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 3-4 DAYS</Text>
                      <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                </View>
              </View>
             )
          }
          else if(route.params.paramKey6=="moderate")
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.banana_logo}  source = {require('../../assets/lemonyellow_moderate.png')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                      <Text style={styles.reporttxt}>Quality: RIPE</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 2-3 DAYS</Text>
                      <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                </View>
              </View>
             )
          }
          else if(route.params.paramKey6=="high")
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.banana_logo}  source = {require('../../assets/banana_overripe.png')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                      <Text style={styles.reporttxt}>Quality: OVER RIPE</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 0-1 DAYS</Text>
                      <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                </View>
              </View>
             )
          }
        }
    }
    else if(route.params.paramKey4=="Green")
    {
      return (
        <View style={styles.container}>
          <View style={[styles.card, styles.shadowProp]}>  
            <Text style={styles.header}>  
              Report
            </Text>  
          </View>
          <View style={styles.logo}>
          <Image style={styles.banana_logo}  source = {require('../../assets/banana_img.jpeg')}/>
          </View>
          <View style={styles.boxcontent}>
          <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                <Text style={styles.reporttxt}>Quality: ARTIFICIALLY RIPENED</Text>
                <Text style={styles.reporttxt}>Expected Survival: 3-4 DAYS</Text>
                <Text style={styles.reporttxt}>Refrigerate: NO</Text>
          </View>
        </View>
       )
    }


}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#ffffff",
    // color:'#ffffff',
  },
  reporttxt:{
    color:'#000000',
    fontSize:25,
    textAlign:'left',
    padding:10,
    bottom:20,
    fontFamily:'Barlow',
  },
  card: {  
    backgroundColor: '#9bcca5',  
    borderRadius: 8,  
    width: '100%',  
    marginVertical: 10, 
    width:360,
    height:120, 
    marginTop:-10,

  },  
  logo:{
    // width:"20%",
    // height:"40%",
  },
  banana_logo:{
    width:200,
    height:120,
    top:65,
    alignSelf:'center',
  },
  banana_logo1:{
    width:150,
    height:120,
    top:65,
    alignSelf:'center',
  },
  boxcontent:{
    width:"80%",
    backgroundColor:"#9bcca5",
    height:350,
    top:350,
    // right:-280,
    marginLeft:-32,
    borderRadius:30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    left:70,
  },
  header:{
    fontSize:28,
    color:'#000000',
    fontFamily:'BreeSerif',
    textAlign:'center',
    padding:10,
    marginTop:50,

    // marginBottom: 13,  
},
  shadowProp: {  
    // shadowOffset: {width: -5, height: 4},  
    // shadowColor: '#000000',  
    shadowOpacity: 0.2,  
     shadowRadius: 3,  
    shadowColor: '#000000',  
    elevation: 30, 
    width:"100%", 
    
  }, 
})
export default ReportBanana