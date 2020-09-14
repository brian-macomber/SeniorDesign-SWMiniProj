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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

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
      <Text>This is the Home page</Text>
      {/* Couldn't get navigation to more than 2 pages to work */}
      <Button
        title="Questionnaire"
        onPress={() => navigation.navigate('Questionnaire')}
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
  nameFooter: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.dark,
    marginTop: 700,
    marginBottom: 50,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
