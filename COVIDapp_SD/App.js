import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>COVID-19</Text>
      <Button
        title="Go to the next page"
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={styles.nameFooter}>
        App By: Brian Macomber & Carlos Padiha
      </Text>
    </View>
  );
};
const HomePage = () => {
  return (
    <View>
      <Text>This is the next page</Text>
      {/* Couldn't get navigation to more than 2 pages to work */}
      {/* <Button
        title="Questionnaire"
        onPress={() => navigation.navigate('Questionnaire')}
      /> */}
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
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={HomePage} />
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
