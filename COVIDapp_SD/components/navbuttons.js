import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

  //status button overlay
  export function StatusButton({title, onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.statusButtonContainer}>
          <Text style={styles.invisButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  //settings button overlay
  export function SettingsButton({title, onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.settingsButtonContainer}>
          <Text style={styles.invisButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  //questionnaire button overlay
  export function QuestionnaireButton({title, onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.questionnaireButtonContainer}>
          <Text style={styles.invisButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  //go to home button
  export function HomeButton({title, onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.homeButtonContainer}>
          <Text style={styles.homeButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  //go to logout button
  export function LogoutButton({title, onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.logoutButtonContainer}>
          <Text style={styles.logoutButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

/*need to make the buttons not borderless*/
const styles = StyleSheet.create({
  settingsButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    width: 52, //to cover length of text
    height: 36,
    top: 17, //for settings
    left: 355,
    position: 'absolute',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  questionnaireButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    width: 210, //to cover length of text
    height: 63,
    top: 45,
    left: 135,
    position: 'absolute',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  statusButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    width: 309, //to cover length of text
    height: 50,
    top: 263,
    left: 12,
    position: 'absolute',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  homeButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    paddingVertical: 11,
    width: 110, //to cover length of image
    height: 27,
    top: '22%',
    position: 'absolute',
    alignSelf: 'center',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  logoutButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    paddingVertical: 11,
    width: 100, //to cover length of image
    height: 25,
    top: 630,
    position: 'absolute',
    alignSelf: 'center',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  invisButtonText: {
    color: "#ffffff00",
  },
  homeButtonText: {
    color: "rgba(77, 175, 124, 1)",
    fontSize: 19,
    fontWeight: '600',
    alignSelf: 'center',
    position: 'absolute',
  },
  logoutButtonText: {
    color: "rgba(207, 0, 15, 1)",
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    position: 'absolute',
  },
})
