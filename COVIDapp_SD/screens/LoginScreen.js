import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  FacebookButton,
  GoogleButton,
  StatusButton,
  SettingsButton,
  QuestionnaireButton,
} from '../components/navbuttons';

import {NavigationContainer} from '@react-navigation/native';

import AuthApp from '../authentication.js';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('backgrounds/appiphonelogin.png')}
          resizeMode="stretch"
          style={{width: '100%', height: '100%', flex: 1}}>
          <Text></Text>
          <AuthApp />
          <FacebookButton
            title="Facebook"
            onPress={() => this.props.navigation.navigate('HomePage')}
          />
          <GoogleButton
            title="Google"
            onPress={() => this.props.navigation.navigate('HomePage')}
          />
        </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen;

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
  imgBackg: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
