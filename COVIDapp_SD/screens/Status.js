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
        //const bgFile = statusPageUpdate({badgeId});
        return (
          //update background layout/contructor color - done
                <View style={styles.container}>
                  <ImageBackground source={require('backgrounds/appiphonehomeqg.png')}
                  resizeMode="stretch"
                  style={styles.imgBackg}>
                  <Text></Text>
                  <Button
                    style = {{alignSelf: 'center'}}
                    title = "Return Home"
                    onPress = {() => this.props.navigation.navigate('HomePage', {})}/>
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

    },
    imgBackg:{
      width: '100%',
      height: '100%',
      flex: 1,
      resizeMode: 'stretch'
    }
});
