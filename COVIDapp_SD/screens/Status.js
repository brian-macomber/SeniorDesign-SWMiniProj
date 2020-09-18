import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {FacebookButton, GoogleButton, StatusButton, SettingsButton, QuestionnaireButton} from '../components/navbuttons';
import {statusPageUpdate} from '../components/PageUpdates';

export default class Status extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        const {badgeId} = this.props.route.params
        console.log('passed badge id to status is:');
        console.log(badgeId);
        if(badgeId == 'Green' | badgeId == ''){
          var toBackground = require('backgrounds/appiphonebadgeg.png');
        }else if(badgeId == 'Yellow'){
          var toBackground = require('backgrounds/appiphonebadgey.png');
        }else if(badgeId == 'Red'){
          var toBackground = require('backgrounds/appiphonebadger.png');
        }
        return (
          //update background layout/contructor color - done
                <View style={styles.container}>
                  <ImageBackground source={toBackground}
                  resizeMode="stretch"
                  style={styles.imgBackg}>
                  <View style={styles.buttonContainer}>
                    <Button
                      title = "Return Home"
                      onPress = {() => this.props.navigation.navigate('HomePage', {badgeId})}/>
                  </View>
                  </ImageBackground>
                </View>
        );
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
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    buttonContainer:{
      alignSelf: 'center',
      top: '9%'
    },
    imgBackg:{
      width: '100%',
      height: '100%',
      flex: 1,
      resizeMode: 'stretch'
    }
});
