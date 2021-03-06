import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {FacebookButton, GoogleButton, StatusButton, SettingsButton, QuestionnaireButton} from '../components/navbuttons';

export default class Settings extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: BLUE,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Settings',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor() {
      super()
    }

    render() {
        return (
          //update background layout/contructor color - done
                <View style={styles.container}>
                  <ImageBackground source={require('backgrounds/appiphoneclean.png')} resizeMode='stretch' style={styles.imgBackg}>
                    <Text></Text>
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
    imgBackg:{
      width: '100%',
      height: '100%',
      flex: 1
    }
});
