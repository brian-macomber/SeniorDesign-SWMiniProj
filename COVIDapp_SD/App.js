import 'react-native-gesture-handler';

import React from 'react';
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
import {FacebookButton, GoogleButton, StatusButton, SettingsButton, QuestionnaireButton} from './components/navbuttons';

const Stack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./backgroundfiles/appiphonelogin.png')} resizeMode='stretch' style={{width: '100%', height: '100%', flex: 1}}>
        <Text></Text>
        <FacebookButton
          title="Facebook"
          onPress={() => navigation.navigate('HomePage')}
          />
          {/*maybe this is not working because they do the same thing?*/}
          <GoogleButton
            title="Google"
            onPress={() => navigation.navigate('HomePage')}
            />
      </ImageBackground>
    </View>
  );
};

const HomePage = ({navigation}) => {
  return (
  <View style={styles.container}>
    <ImageBackground source={require('./backgroundfiles/appiphonehomenqr.png')} resizeMode='stretch' style={{width: '100%', height: '100%', flex: 1}}>
      <Text></Text>
      {/* Navigation is working between all pages -> Now need to check screen portability */}
      <SettingsButton
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <QuestionnaireButton
        title="Questionnaire"
        onPress={() => navigation.navigate('Questionnaire')}
      />
      <StatusButton
        title="Status"
        onPress={() => navigation.navigate('Status')}
      />
    </ImageBackground>
  </View>
  );
};

const Questionnaire = () => {
  // We can do a scrollview here
  return <Text>This is the page for the Questionnaire</Text>;
};

const Status = () => {
  return <Text>This is the page for the Status</Text>;
};

const Settings = () => {
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./backgroundfiles/appiphoneclean.png')} resizeMode='stretch' style={{width: '100%', height: '100%', flex: 1}}>
        <Text>This is the settings page</Text>
      </ImageBackground>
    </View>
  );
};

const App: () => React$Node = () => {
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
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Questionnaire" component={Questionnaire} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
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
  highlight: {
    fontWeight: '700',
  },
});

export default App;
