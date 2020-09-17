import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';


  export function statusPageUpdate({badgeParam}){
    if(badgeParam == 'Green'){
      const imageStatus = require('../backgroundfiles/appiphonebadgeg.png');
    }else if(badgeParam == 'Yellow'){
      const imageStatus = require('../backgroundfiles/appiphonebadgey.png');
    }else if(badgeParam == 'Red'){
      const imageStatus = require('../backgroundfiles/appiphonebadger.png');
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
