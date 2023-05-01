import React, { useState,useEffect ,Component } from "react";
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
    TouchableOpacity,
    ScrollView,
    SafeAreaView
  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import * as FS from 'expo-file-system';
export default class PickImage extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          cameraRollPer: null,
          disableButton: false,
        };
      }
      ViewResults=()=>{
        this.props.navigation.navigate('ScanReport')
    
      }

      async componentDidMount() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        this.setState((state, props) => {
          return {
            cameraRollPer: status === "granted",
            disableButton: false,
          };
        });
      }
      uriToBase64 = async (uri) => {
        let base64 = await FS.readAsStringAsync(uri, {
          encoding: FS.EncodingType.Base64,
        });
        return base64;
      };

      // pickMedia = async () => {
      //   this.setState((state, props) => {
      //     return {
      //       cameraRollPer: state.cameraRollPer,
      //       disableButton: true,
      //     };
      //   });
      //   let result = await ImagePicker.launchImageLibraryAsync({
      //     mediaTypes: ImagePicker.MediaTypeOptions.All,
      //     base64: true,
      //   });
      //   if (result.canceled) {
      //     return;
      //   }
      //   if (result.assets[0] == "image") {
      //     await this.toServer({
      //       type: result.assets,
      //       base64: base64,
      //       uri: result.assets[0].uri,
      //     });
      //     // if (result.assets == "image") {
      //     //   await this.toServer({
      //     //     type: result.type,
      //     //     base64: result.base64,
      //     //     uri: result.uri,
      //     //   });
      //   } else {
      //     let base64 = await this.uriToBase64(result.assets);
      //     await this.toServer({
      //       type: result.assets,
      //       base64: base64,
      //       uri: result.assets[0].uri,
      //     });
      //   }
      // };


      pickMedia = async () => {
        this.setState((state, props) => {
          return {
            cameraRollPer: state.cameraRollPer,
            disableButton: true,
          };
        });
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
        });
        if (result.canceled) {
          return;
        }
        if (result.type == "image") {
          await this.toServer({
            type: result.type,
            base64: result.base64,
            uri: result.uri,
          });
        } else {
          let base64 = await this.uriToBase64(result.uri);
          await this.toServer({
            type: result.type,
            base64: base64,
            uri: result.uri,
          });
        }
      };



      toServer = async (mediaFile) => {
        let type = mediaFile.type;
        let schema = "http://";
        let host = "192.168.1.11";
        let route = "";
        let port = "5000";
        let url = "";
        let content_type = "";
        type === "image"
          ? ((route = "/image"), (content_type = "image/jpeg"))
          : ((route = "/video"), (content_type = "video/mp4"));
        url = schema + host + ":" + port + route;
    
        let response = await FS.uploadAsync(url, mediaFile.uri, {
          headers: {
            "content-type": content_type,
          },
          httpMethod: "POST",
          uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
        });
    
        console.log(response.headers);
        console.log(response.body);
      };
render()
{
  return (    
        
        <SafeAreaView style={styles.container}>
        {this.state.cameraRollPer ? (
        <Button
            title="Pick From Gallery"
            disabled={this.state.disableButton}
            onPress={async () => {
            await this.pickMedia();
            this.setState((s, p) => {
                return {
                cameraRollPer: s.cameraRollPer,
                disableButton: false,
                };
            }
            );
            }}
        />
        ) : (
        <Text>Camera Roll Permission Required ! </Text>
        )}
        <TouchableOpacity style={{marginTop:45,backgroundColor:'#6CA55D', height:'5%',width:'30%',borderRadius:10}}
        onPress={this.ViewResults}
        >
          <Text style={{color:"#000000",paddingLeft:20,paddingTop:10}}>
            View Result
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
   
)
}
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },

  })