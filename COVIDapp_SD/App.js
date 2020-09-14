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


const Stack = createStackNavigator();

const StatusButton = ({onPress, title}) => (
  <TouchableOpacity onPress = {onPress} style={styles.statusButtonContainer}>
    <Text style ={styles.invisButtonText}>{title}</Text>
  </TouchableOpacity>
);

const SettingsButton = ({onPress, title}) => (
  <TouchableOpacity onPress = {onPress} style={styles.settingsButtonContainer}>
    <Text style ={styles.invisButtonText}>{title}</Text>
  </TouchableOpacity>
);

const QuestionnaireButton = ({onPress, title}) => (
  <TouchableOpacity onPress = {onPress} style={styles.questionnaireButtonContainer}>
    <Text style ={styles.invisButtonText}>{title}</Text>
  </TouchableOpacity>
);

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./appiphonelogin.png')} resizeMode='stretch' style={{width: '100%', height: '100%', flex: 1}}>
        <Text style={styles.sectionTitle}>COVID-19</Text>
        <Button
          title="Go to the next page"
          onPress={() => navigation.navigate('HomePage')}
          />
      </ImageBackground>
    </View>
  );
};

const HomePage = ({navigation}) => {
  return (
  <View style={styles.container}>
    <ImageBackground source={require('./appiphonehomenqr.png')} resizeMode='stretch' style={{width: '100%', height: '100%', flex: 1}}>
      <Text>Home Page</Text>
      {/* Navigation is working between all pages -> Now need to Reposition the buttons and hopefully make them invisible */}
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
  return <Text>This is the settings page</Text>;
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
  statusButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    paddingVertical: 11, //11 for status
    width: 322, //to cover length of text
    marginTop: 165 //for status
    /*remember to check if these values change to other devices*/
  },
  settingsButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    paddingVertical: 9, //11 for status
    paddingHorizontal: 0,
    width: 55, //to cover length of text
    marginTop: 8, //for settings
    left: 350
    /*remember to check if these values change to other devices*/
  },
  questionnaireButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    paddingVertical: 11, //11 for status
    paddingHorizontal: 0,
    width: 210, //to cover length of text
    marginTop: 11, //for settings
    left: 135
    /*remember to check if these values change to other devices*/
  },
  invisButtonText: {
    color: "#ffffff00",
  },
});

export default App;
