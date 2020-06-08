import React, { Component } from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const WebViewExample = () => {
   return (
      <View style = {{height: ScreenHeight, width: ScreenWidth}}>
         <WebView
         source = {{ uri:
         'http://mlm.regalbit.com' }}
         />
      </View>
   )
}
export default WebViewExample;
