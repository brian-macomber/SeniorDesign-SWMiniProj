import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {FacebookButton, GoogleButton, StatusButton, SettingsButton, QuestionnaireButton} from '../components/navbuttons';

import {NavigationContainer} from '@react-navigation/native';

//might not need component -> put the updtae class

class HomePage extends Component{
    constructor(props) {
      super(props)
    }

    render() {
        return (
          <View style={styles.container}>
            <ImageBackground source={require('backgrounds/appiphonehomeqg.png')} resizeMode='stretch' style={styles.imgBackg}>
              <Text></Text>
              {/* Navigation is working between all pages -> Now need to check screen portability */}
              <SettingsButton
                title="Settings"
                onPress={() => this.props.navigation.navigate('Settings')}
              />
              <QuestionnaireButton
                title="Questionnaire"
                onPress={() => this.props.navigation.navigate('Questionnaire')}
              />
              <StatusButton
                title="Status"
                onPress={() => this.props.navigation.navigate('Status')}
              />
            </ImageBackground>
          </View>
        );
    }
}

export default HomePage;


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
