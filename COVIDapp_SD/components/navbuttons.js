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

const styles = StyleSheet.create({
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
})
