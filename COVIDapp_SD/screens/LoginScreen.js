import React, {Component, useState, useEffect} from 'react';
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
  HomeButton,
  LogoutButton,
  StatusButton,
  SettingsButton,
  QuestionnaireButton,
} from '../components/navbuttons';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import auth from '@react-native-firebase/auth';
import {CLIENT_ID} from '@env';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setLoggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (user) setLoggedIn(true);
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      // webClientId: {CLIENT_ID},
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('You are signed out!'));
      setLoggedIn(false);
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
          <View style={styles.container}>
          <ImageBackground
              source={require('backgrounds/appiphoneloginnb.png')}
              resizeMode="stretch"
              style={{width: '100%', height: '100%', flex: 1}}>
              <View style={styles.sectionContainer}>
                {!loggedIn && (
                  <GoogleSigninButton
                    style={{width: 192, height: 48, top: 584}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    />
                  )}
                  </View>
                <View style={styles.buttonContainer}>
                {!user && <Text style = {{top: 584}}>You are currently logged out</Text>}
                {user && (
                  <View>
                    <Text style = {{top: 584, fontSize: 16}}>Welcome {user.displayName}</Text>
                    <Button
                      style= {{top: 584}}
                      onPress={this.signOut}
                      title="Log Out"
                      color="red"></Button>
                      <HomeButton
                        title="Go To Home"
                        onPress={() => navigation.navigate('HomePage')}
                      />
                      </View>
                    )}
                </View>
              </ImageBackground>
          </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
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
  imgBackg: {
       width: '100%',
       height: '100%',
       flex: 1,
       alignItems: 'stretch',
  },
  container: {
       minWidth: '100%', //70
       maxWidth: '100%', //90
       alignItems: 'stretch',
       justifyContent: 'center',
       elevation: 20,
       borderRadius: 10,
       flex: 1,
    },
});

// class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <ImageBackground
//           source={require('backgrounds/appiphonelogin.png')}
//           resizeMode="stretch"
//           style={{width: '100%', height: '100%', flex: 1}}>
//           <FacebookButton
//             title="Facebook"
//             onPress={() => this.props.navigation.navigate('HomePage')}
//           />
//           <GoogleSigninButton
//             style={{width: 192, height: 48}}
//             size={GoogleSigninButton.Size.Wide}
//             color={GoogleSigninButton.Color.Dark}
//             onPress={this._signIn}
//           />
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     minWidth: '100%', //70
//     maxWidth: '100%', //90
//     alignItems: 'stretch',
//     justifyContent: 'center',
//     elevation: 20,
//     borderRadius: 10,
//     flex: 1,
//   },
//   selectionGroupContainer: {
//     flexDirection: 'column',
//     backgroundColor: 'white',
//     alignContent: 'flex-end',
//   },
//   imgBackg: {
//     width: '100%',
//     height: '100%',
//     flex: 1,
//     alignItems: 'stretch',
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
// });
