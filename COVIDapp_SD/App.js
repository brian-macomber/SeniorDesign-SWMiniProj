import 'react-native-gesture-handler';
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

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import custom buttons
import {
  FacebookButton,
  GoogleButton,
  StatusButton,
  SettingsButton,
  QuestionnaireButton,
} from './components/navbuttons';

//firebase connection

import firebaseApp from './firebase.js'; //this import might  be wrong, import firebaseApp?

//import screens
import Questionnaire from './screens/Questionnaire';
import CompletedQuestionnaire from './screens/CompletedQuestionnaire';
import Settings from './screens/Settings';
import Status from './screens/Status';
import HomePage from './screens/HomePage';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

//

class App extends Component {
  constructor(props) {
    super(props);
    // this.database = firebaseApp.database();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Questionnaire"
            component={Questionnaire}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Status"
            component={Status}
            options={{headerShown: true}}
          />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    maxWidth: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 50,
    textAlign: 'center',
  },
  imgBackg: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default App;
