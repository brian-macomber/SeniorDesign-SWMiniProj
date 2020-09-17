import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

const PURPLE = 'rgba(108,48,237,1)';
const BLUE = 'rgb(65,105,225)';
const RESULTBLUE = 'rgb(240,248,255)';
export default class CompletedQuestionnaire extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: BLUE,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Questionnaire Results',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    render() {
        const {surveyAnswers} = this.props.route.params
        const {badgeId} = this.props.route.params
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.sectionTitle}>Questionnaire Results</Text>
                        <Text></Text>
                        <Text style={styles.questionText}>COVID Test: {JSON.stringify(surveyAnswers.covidTest.value)}</Text>
                        <Text style={styles.questionText}>Close Contact: {JSON.stringify(surveyAnswers.covidCloseContact.value)}</Text>
                        <Text style={styles.questionText}>Breath: {JSON.stringify(surveyAnswers.covidBreath.value)}</Text>
                        <Text style={styles.questionText}>Fever or Chills: {JSON.stringify(surveyAnswers.covidFever.value)}</Text>
                        <Text style={styles.questionText}>Cough or Sore Troath: {JSON.stringify(surveyAnswers.covidTroath.value)}</Text>
                        <Text style={styles.questionText}>Fatigue: {JSON.stringify(surveyAnswers.covidMuscle.value)}</Text>
                        <Text style={styles.questionText}>Loss of Taste or Smell: {JSON.stringify(surveyAnswers.covidTaste.value)}</Text>
                        <Text style={styles.questionText}>Nausea: {JSON.stringify(surveyAnswers.covidNausea.value)}</Text>
                        <Text style = {styles.questionText}>Badge Color: {JSON.stringify(badgeId)} </Text>
                        <Button
                          title = "Home"
                          onPress = {() => this.props.navigation.navigate('HomePage', {badgeId})}/>
                        <Button
                          title = "Status"
                          onPress = {() => this.props.navigation.navigate('Status', {badgeId})}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: RESULTBLUE,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgb(240,248,255)', //white
        elevation: 20,
        borderRadius: 10,
        maxHeight: '80%',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'rgb(0,0,0)',
      marginTop: 20,
      textAlign: 'center',
    },
});
