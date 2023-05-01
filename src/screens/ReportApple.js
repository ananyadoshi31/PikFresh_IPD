import { View, Text ,Alert,StyleSheet,Image} from 'react-native'
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { render } from 'react-dom';
import { useFonts } from 'expo-font';


const ReportApple = ({route}) => {
  // let var1;

  const [loaded]=useFonts({
    Barlow:require('../../assets/fonts/BarlowCondensed-Regular.ttf'),
    BreeSerif:require('../../assets/fonts/BreeSerif-Regular.ttf')

  })

  if(!loaded)
  {
    return null;
  }

  if(route.params.paramKey7=="Soft")
  {
    if(route.params.paramKey8=="Red" || route.params.paramKey8=="Darkred")
    {
        if(route.params.paramKey9=="Less" || route.params.paramKey9=="More" || route.params.paramKey9=="No")
        {
            if(route.params.paramKey10=="no")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Report
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.apple_logo}  source = {require('../../assets/apple_soft.jpg')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Not Recommneded to buy - adulterated!</Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1 Week</Text>
                            <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
                      </View>
                    </View>
                   )
            }
            else if(route.params.paramKey10=="yes")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Report
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.apple_logo}  source = {require('../../assets/apple_soft.jpg')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Not Recommneded to buy!</Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1 Week</Text>
                            <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
                      </View>
                    </View>
                   )
            }
        }
    }
    else if(route.params.paramKey8=="Striped")
    {
        if(route.params.paramKey9=="Less" || route.params.paramKey9=="More" || route.params.paramKey9=="No")
        {
            if(route.params.paramKey10=="no" || route.params.paramKey10=="yes")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Report
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.banana_logo}  source = {require('../../assets/stripped_soft.png')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Not Recommneded to buy!</Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1 Week</Text>
                            <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
                      </View>
                    </View>
                   )
            }
        }
    }
    
  }
  else if(route.params.paramKey7=="Hard" || route.params.paramKey7=="Dent")
  {
    if(route.params.paramKey8=="Red" )
    {
        if(route.params.paramKey9=="Less")
        {
            if(route.params.paramKey10=="yes")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Report
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.apple_logo1}  source = {require('../../assets/red_less.png')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Recommneded to buy!
                            
                            </Text>
                            <Text style={styles.reporttxt}>Hard and crisp with yellow flesh and an exotic sweet flavor.
                            Good for eating and cooking</Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1 month</Text>
                            <Text style={styles.reporttxt}>Refrigerate: YES (for longer surivival)</Text>
                      </View>
                    </View>
                   )
            }
            else if(route.params.paramKey10=="no")
            {
              return (
                <View style={styles.container}>
                  <View style={[styles.card, styles.shadowProp]}>  
                    <Text style={styles.header}>  
                      Report
                    </Text>  
                  </View>
                  <View style={styles.logo}>
                  <Image style={styles.apple_logo1}  source = {require('../../assets/red_less.png')}/>
                  </View>
                  <View style={styles.boxcontent}>
                  <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!
                        
                        </Text>
                        <Text style={styles.reporttxt}>Hard and crisp with yellow flesh.</Text>
                        <Text style={styles.reporttxt}>Expected Survival: 1 month</Text>
                        <Text style={styles.reporttxt}>Refrigerate: YES (for longer surivival)</Text>
                  </View>
                </View>
               )
            }
        }
        else if(route.params.paramKey9=="More")
        {
          if(route.params.paramKey10=="yes")
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.apple_logo}  source = {require('../../assets/red_more.jpg')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                      <Text style={styles.reporttxt}>Recommneded to buy!
                      </Text>
                      <Text style={styles.reporttxt}>Savory, sweet tasting, with a slight tart balance and rich overtones.
                      Amazingly slow to turn brown when cut.</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 3 weeks</Text>
                      <Text style={styles.reporttxt}>Refrigerate: YES (for longer surivival)</Text>
                </View>
              </View>
             )
          }
          else if(route.params.paramKey10=="no")
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.apple_logo}  source = {require('../../assets/red_more.jpg')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                      <Text style={styles.reporttxt}>Might be adulterated!
                      </Text>
                      <Text style={styles.reporttxt}>Slight tart balance and rich overtones. 
                      Slow to turn brown when cut.</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 3 weeks</Text>
                      <Text style={styles.reporttxt}>Refrigerate: YES (for longer surivival)</Text>
                </View>
              </View>
             )
          }
        }
        else if(route.params.paramKey9=="No")
        {
          if(route.params.paramKey10=="yes")
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.apple_logo1}  source = {require('../../assets/red_no.jpg')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                      <Text style={styles.reporttxt}>Recommneded to buy!
                      </Text>
                      <Text style={styles.reporttxt}>Juicy and sweet with deep red coloration</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 1-2 weeks</Text>
                      <Text style={styles.reporttxt}>Refrigerate: As soon as possible to slow ripening and maintain their crunchy texture and sweet, tangy flavor.
                      </Text>
                </View>
              </View>
             )
          }
          else if(route.params.paramKey10=="no")
          {
            return (
              <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>  
                  <Text style={styles.header}>  
                    Report
                  </Text>  
                </View>
                <View style={styles.logo}>
                <Image style={styles.apple_logo1}  source = {require('../../assets/red_no.jpg')}/>
                </View>
                <View style={styles.boxcontent}>
                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                      <Text style={styles.reporttxt}>Might be adulterated!
                      </Text>
                      <Text style={styles.reporttxt}>Juicy and sweet with deep red coloration.</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 1-2 weeks</Text>
                      <Text style={styles.reporttxt}>Refrigerate: YES
                      </Text>
                </View>
              </View>
             )
          }
        }
    }
    else if(route.params.paramKey8=="Darkred")
    {
      if(route.params.paramKey9=="Less")
      {
        if(route.params.paramKey10=="yes")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/darkred_less.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Recommneded to buy!
                    </Text>
                    <Text style={styles.reporttxt}>Intensely sweet, firm and juicy flesh. 
                        Fruit may be prone to russeting.</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 months</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES (for longer survival)
                    </Text>
              </View>
            </View>
           )
        }
        else if(route.params.paramKey10=="no")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/darkred_less.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Might be adulterated!
                    </Text>
                    <Text style={styles.reporttxt}>Intensely firm and juicy flesh. 
                    Fruit may be prone to russeting.</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 months</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES
                    </Text>
              </View>
            </View>
           )
        }
      }

      else if(route.params.paramKey9=="More")
      {
        if(route.params.paramKey10=="yes")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/darkred_more.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Recommneded to buy!
                    </Text>
                    <Text style={styles.reporttxt}>Medium sized red fruit with a well-balanced flavor that is pleasantly tart.</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 months</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES(for longer survival)
                    </Text>
              </View>
            </View>
           )
        }
        else if(route.params.paramKey10=="no")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/darkred_more.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Might be adulterated!
                    </Text>
                    <Text style={styles.reporttxt}>Medium sized red fruit with a well-balanced flavor that is pleasantly tart.</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 months</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES
                    </Text>
              </View>
            </View>
           )
        }
      }

      else if(route.params.paramKey9=="No")
      {
        if(route.params.paramKey10=="yes")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/darkred_no.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Might be adulterated!
                    </Text>
                    <Text style={styles.reporttxt}>Not recommended to buy.</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES
                    </Text>
              </View>
            </View>
           )
        }
        else if(route.params.paramKey10=="no")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/darkred_no.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Adulterated!  
                    </Text>
                    <Text style={styles.reporttxt}>Not recommended to buy</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES
                    </Text>
              </View>
            </View>
           )
        }
      }

    }


    else if(route.params.paramKey8=="Striped")
    {
      if(route.params.paramKey9=="Less")
      {
        if(route.params.paramKey10=="yes")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/stripped_less.png')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Recommneded to buy!
                    </Text>
                    <Text style={styles.reporttxt}>Large, russeted fruit with a rich, nutty flavor.
                        Best for fresh eating or sauce.</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 weeks</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES (for longer surivival)
                    </Text>
              </View>
            </View>
           )
        }
        else if(route.params.paramKey10=="no")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/stripped_less.png')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Might be adulterated!
                    </Text>
                    <Text style={styles.reporttxt}>Large, russeted fruit with a rich, nutty flavor.</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 weeks</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES 
                    </Text>
              </View>
            </View>
           )
        }
      }

      else if(route.params.paramKey9=="More")
      {
        if(route.params.paramKey10=="yes")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/stripped_more.png')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Recommneded to buy!
                    </Text>
                    <Text style={styles.reporttxt}>Juicy flesh and a mild sweet flavor
                    Good for fresh eating</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 weeks</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES (for longer surivival)
                    </Text>
              </View>
            </View>
           )
        }
        else if(route.params.paramKey10=="no")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.banana_logo}  source = {require('../../assets/stripped_more.png')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Might be adulterated!
                    </Text>
                    <Text style={styles.reporttxt}>Juicy flesh and a mild sweet flavor</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1-2 weeks</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES 
                    </Text>
              </View>
            </View>
           )
        }
      }

      else if(route.params.paramKey9=="No")
      {
        if(route.params.paramKey10=="yes")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.apple_logo2}  source = {require('../../assets/stripped_no.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Recommneded to buy!
                    </Text>
                    <Text style={styles.reporttxt}>Bright red apple with soft, juicy flesh and a slightly tart flavor</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1 week</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES (for longer surivival)
                    </Text>
              </View>
            </View>
           )
        }
        else if(route.params.paramKey10=="no")
        {
          return (
            <View style={styles.container}>
              <View style={[styles.card, styles.shadowProp]}>  
                <Text style={styles.header}>  
                  Report
                </Text>  
              </View>
              <View style={styles.logo}>
              <Image style={styles.apple_logo2}  source = {require('../../assets/stripped_no.jpg')}/>
              </View>
              <View style={styles.boxcontent}>
              <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                    <Text style={styles.reporttxt}>Might be recommended!
                    </Text>
                    <Text style={styles.reporttxt}>Bright red apple with soft, juicy flesh and a slightly tart flavor</Text>
                    <Text style={styles.reporttxt}>Expected Survival: 1 week</Text>
                    <Text style={styles.reporttxt}>Refrigerate: YES 
                    </Text>
              </View>
            </View>
           )
        }
      }

    }

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
  apple_logo2:{
    width:230,
    height:120,
    top:65,
    alignSelf:'center',
  },
  apple_logo1:{
    width:140,
    height:120,
    top:65,
    alignSelf:'center',
  },
  apple_logo:{
    width:120,
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
    height:400,
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
    fontFamily:'JosefinSans-SemiBold',
    textAlign:'center',
    padding:10,
    marginTop:50,
    fontFamily:'BreeSerif',

    // marginBottom: 13,  
},
  shadowProp: {  
    
    shadowOpacity: 0.2,  
     shadowRadius: 3,  
    shadowColor: '#000000',  
    elevation: 30, 
    width:"100%", 
    
  }, 
})
export default ReportApple