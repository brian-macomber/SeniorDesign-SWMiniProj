import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';


  export function statusPageUpdate({badgeParam}){
    if(badgeParam == 'Green'){
      return(
        <ImageBackground source={require('backgrounds/appiphonebadgeg.png')}
        resizeMode="stretch"
        style={styles.imgBackg}>
        </ImageBackground>
      )
    }else if(badgeParam == 'Yellow'){
      return(
        <ImageBackground source={require('backgrounds/appiphonebadgey.png')}
        resizeMode="stretch"
        style={styles.imgBackg}>
        </ImageBackground>
      )
    }else if(badgeParam == 'Red'){
      return(
        <ImageBackground source={require('backgrounds/appiphonebadger.png')}
        resizeMode="stretch"
        style={styles.imgBackg}>
        </ImageBackground>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
      minWidth: '100%', //70
      maxWidth: '100%', //90
      alignItems: 'stretch',
      justifyContent: 'center',
      elevation: 20,
      borderRadius: 10,
      flex: 1,
  },
  imgBackg:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'stretch'
  }
});
