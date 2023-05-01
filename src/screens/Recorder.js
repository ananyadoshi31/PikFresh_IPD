// // import React from 'react';
// // // import * as React from 'react';
// // import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
// // import { useEffect, useState, useRef } from 'react';
// // import { Camera } from 'expo-camera';
// // import { Video } from 'expo-av';
// // import { shareAsync } from 'expo-sharing';
// // import * as MediaLibrary from 'expo-media-library';
// // import Preprocess from 'react-native-web/dist/cjs/exports/StyleSheet/preprocess';
// // import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// // import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
// // // import * as MediaLibrary from 'expo-media-library';
// // import { captureRef } from 'react-native-view-shot';
// // import ViewShot from 'react-native-view-shot';
// // export default function Recorder({navigation,route}) {

// //   const onPressHandlerBanana1=()=>{
// //     navigation.navigate('BananaQuestion1')
// //   }


// //   let cameraRef = useRef();
// //   const [hasCameraPermission, setHasCameraPermission] = useState();
// //   const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
// //   const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [video, setVideo] = useState();
  
// //   // const cameraRef = useRef(null);
// //   const viewShotRef = useRef();
// //   // const [isRecording, setIsRecording] = useState(false);

// //   const startRecording = async () => {
// //     setIsRecording(true);
// //     await cameraRef.current.recordAsync();
// //   };

// //   const stopRecording = async () => {
// //     setIsRecording(false);
// //     const video = await cameraRef.current.stopRecording();
// //     const screenshot = await viewShotRef.current.capture();
// //     const asset = await MediaLibrary.createAssetAsync(video.uri);
// //     await MediaLibrary.createAssetAsync(screenshot, asset.albumId, false);
// //   };
  
// //   useEffect(() => {
// //     (async () => {
// //       const cameraPermission = await Camera.requestCameraPermissionsAsync();
// //       const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
// //       const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

// //       setHasCameraPermission(cameraPermission.status === "granted");
// //       setHasMicrophonePermission(microphonePermission.status === "granted");
// //       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
// //     })();
// //   }, []);

// //   if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
// //     return <Text>Requestion permissions...</Text>
// //   } else if (!hasCameraPermission) {
// //     return <Text>Permission for camera not granted.</Text>
// //   }

// //   let recordVideo = () => {
// //     setIsRecording(true);
// //     let options = {
// //       quality: "1080p",
// //       maxDuration: 60,
// //       mute: false
// //     };

// //     cameraRef.current.recordAsync(options).then((recordedVideo) => {
// //       setVideo(recordedVideo);
// //       setIsRecording(false);
// //     });
// //   };

// //   // let stopRecording = () => {
// //   //   setIsRecording(false);
// //   //   cameraRef.current.stopRecording();
// //   // };


// //   if(route.params.paramkeyapple=="apple")
// //   {

// //     const onPressHandler=()=>{
// //       navigation.navigate('Question')
// //     }

// //     if (video) {
// //       let shareVideo = () => {
// //         shareAsync(video.uri).then(() => {
// //           setVideo(undefined);
// //         });
// //       };
  
// //       let saveVideo = () => {
// //         MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
// //           setVideo(undefined);
// //         });
// //       };
  
// //       return (
// //         <SafeAreaView style={styles.container}>
// //           <Video
// //             style={styles.video}
// //             source={{uri: video.uri}}
// //             useNativeControls
// //             resizeMode='contain'
// //             isLooping
// //           />
// //           <ViewShot ref={viewShotRef}>
// //             <Camera style={{ flex: 1 }} ref={cameraRef} type={Camera.Constants.Type.back} />
// //           </ViewShot>
// //           <Pressable  onPress={shareVideo} 
// //             style={styles.sharebutton}
// //           >
// //             <Text style={styles.btntxt}>Share</Text>
// //           </Pressable>
  
// //           {hasMediaLibraryPermission ? 
// //           <Pressable  
// //           style={styles.savebutton}
// //           onPress={saveVideo} > 
// //             <Text style={styles.btntxt}>Save</Text>
// //           </Pressable>
// //           : undefined}
  
// //           <Pressable  
// //           style={styles.discardbutton}
// //           onPress={() => setVideo(undefined)} >
// //             <Text style={styles.btntxt}>Discard</Text>
// //           </Pressable>
          
// //           <Pressable style={styles.nextbutton}
// //           onPress={onPressHandler}
// //           >
// //             <Text style={styles.btntxt}>
// //               Next
// //             </Text>
// //           </Pressable>
// //         </SafeAreaView>
// //       );
// //     }
  
// //   }

// //   if(route.params.paramkeyapple=="banana")
// //   {

// //     const onPressHandler=()=>{
// //       navigation.navigate('BananaQuestion1')
// //     }

// //     if (video) {
// //       let shareVideo = () => {
// //         shareAsync(video.uri).then(() => {
// //           setVideo(undefined);
// //         });
// //       };
  
// //       let saveVideo = () => {
// //         MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
// //           setVideo(undefined);
// //         });
// //       };
  
// //       return (
// //         <SafeAreaView style={styles.container}>
// //           <Video
// //             style={styles.video}
// //             source={{uri: video.uri}}
// //             useNativeControls
// //             resizeMode='contain'
// //             isLooping
// //           />
// //           <Pressable  onPress={shareVideo} 
// //             style={styles.sharebutton}
// //           >
// //             <Text style={styles.btntxt}>Share</Text>
// //           </Pressable>
  
// //           {hasMediaLibraryPermission ? 
// //           <Pressable  
// //           style={styles.savebutton}
// //           onPress={saveVideo} > 
// //             <Text style={styles.btntxt}>Save</Text>
// //           </Pressable>
// //           : undefined}
  
// //           <Pressable  
// //           style={styles.discardbutton}
// //           onPress={() => setVideo(undefined)} >
// //             <Text style={styles.btntxt}>Discard</Text>
// //           </Pressable>
          
// //           <Pressable style={styles.nextbutton}
// //           onPress={onPressHandler}
// //           >
// //             <Text style={styles.btntxt}>
// //               Next
// //             </Text>
// //           </Pressable>
// //         </SafeAreaView>
// //       );
// //     }
  
// //   }


  
// //   return (
// //     <Camera style={styles.container} ref={cameraRef}>
// //       <View style={styles.buttonContainer}>
// //         <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} />
// //       </View>
// //     </Camera>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   buttonContainer: {
// //     backgroundColor: "#fff",
// //     alignSelf: "flex-end"
// //   },
// //   video: {
// //     flex: 1,
// //     alignSelf: "stretch"
// //   },
// //   nextbutton:{
// //     backgroundColor:'green',
// //     width:120,
// //     height:40,
// //     left:125,
// //     bottom:40,
// //   },
// //   discardbutton:{
// //     backgroundColor:'red',
// //     width:120,
// //     height:40,
// //     right:125,
// //   },
// //   savebutton:{
// //     backgroundColor:'blue',
// //     width:120,
// //     height:40,
// //     right:125,
// //     bottom:25,
// //   },
// //   sharebutton:{
// //     backgroundColor:'blue',
// //     width:120,
// //     height:40,
// //     left:125,
// //     bottom:-15,
// //   },
// //   btntxt:{
// //     fontSize:20,
// //     color:'#ffffff',
// //     padding:5,
// //     textAlign:'center',
// //   }
// // });

// import React, { useRef, useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Camera } from 'expo-camera';
// import { captureRef } from 'react-native-view-shot';
// import * as MediaLibrary from 'expo-media-library';
// import { Platform } from 'react-native';
// export default function Recorder({navigation,route})
//  {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const cameraRef = useRef(null);

//   const handleRecordButtonPress = async () => {
//     if (isRecording) {
//       await cameraRef.current.stopRecording();
//       await captureScreenshot();
//       setIsRecording(false);
//     } else {
//       const video = await cameraRef.current.recordAsync();
//       setIsRecording(true);
//     }
//   };

//   const captureScreenshot = async () => {
//     const result = await captureRef(cameraRef, {
//       format: 'png',
//       quality: 1,
//     });
//     const asset = await MediaLibrary.createAssetAsync(result);
//     // do something with the asset, such as save to the camera roll
//   };

//   const handleCameraPermission = async () => {
//     if (Platform.OS === 'web') {
//       setHasPermission(true);
//     } else {
//       const { status } = await Camera.requestForegroundPermissionsAsync();
//       setHasPermission(status === 'granted');
//     }
//   };

//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting camera permission</Text>
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text>No access to camera</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef} />
//       <TouchableOpacity style={styles.recordButton} onPress={handleRecordButtonPress}>
//         <Text style={styles.recordButtonText}>{isRecording ? 'Stop' : 'Record'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     width: '100%',
//     height: '100%',
//   },
//   recordButton: {
//     position: 'absolute',
//     bottom: 32,
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     backgroundColor: '#ff0000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   recordButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });


// ********************************************************************
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function Recorder({navigation,route}) {

  const onPressHandlerPickImage=()=>{
    navigation.navigate('PickImage')
}
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };



    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
        <Button title='Next' onPress={onPressHandlerPickImage}/>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});