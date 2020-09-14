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

  //facebook login button overlay
  export function FacebookButton({title, onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.facebookButtonContainer}>
          <Text style={styles.invisButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  //google login button overlay
  export function GoogleButton({title, onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.googleButtonContainer}>
          <Text style={styles.invisButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

/*need to make the buttons not borderless*/
const styles = StyleSheet.create({
  settingsButtonContainer: {
    backgroundColor: "#ffd435", //bgc color, can ffffff00 /fff435
    width: 52, //to cover length of text
    height: 36,
    top: 17, //for settings
    left: 355,
    position: 'absolute',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  questionnaireButtonContainer: {
    backgroundColor: "#ffc435", //bgc color, can ffffff00 /fff435
    width: 210, //to cover length of text
    height: 63,
    top: 45,
    left: 135,
    position: 'absolute',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  statusButtonContainer: {
    backgroundColor: "#fff435", //bgc color, can ffffff00 /fff435
    width: 309, //to cover length of text
    height: 50,
    top: 263,
    left: 12,
    position: 'absolute',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  facebookButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    paddingVertical: 11,
    width: 62, //to cover length of image
    height: 63,
    top: 622,
    left: 176,
    position: 'absolute',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  googleButtonContainer: {
    backgroundColor: "#ffffff00", //bgc color, can ffffff00 /fff435
    paddingVertical: 11,
    width: 62, //to cover length of image
    height: 63,
    top: 640,
    left: 176,
    position: 'relative',
    flex: 1
    /*remember to check if these values change to other devices*/
  },
  invisButtonText: {
    color: "#ffffff00",
  },
})
