import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PURPLE = 'rgba(108,48,237,1)';
const BLUE = 'rgb(65,105,225)';
const defaultAnswers = { /*covidTest: 'no', covidCloseContact: 'no', covidBreath: 'no', covidFever: 'no',covidTroath: 'no', covidMuscle: 'no', covidTaste: 'no', covidNausea: 'no'*/};
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
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.questionText}>The results are in!</Text>
                        <Text style={styles.questionText}>covidTest: {answers.covidTest}</Text>
                        <Text style={styles.questionText}>covidCloseContact: {answers.covidCloseContact}</Text>
                        <Text style={styles.questionText}>covidBreath: {answers.covidBreath} </Text>
                        <Text style={styles.questionText}>covidFever: {answers.covidFever}</Text>
                        <Text style={styles.questionText}>covidTroath: {answers.covidTroath}</Text>
                        <Text style={styles.questionText}>covidMuscle: {answers.covidMuscle}</Text>
                        <Text style={styles.questionText}>covidTaste: {answers.covidTaste}</Text>
                        <Text style={styles.questionText}>covidNausea: {answers.covidNausea}</Text>
                        <Text>Raw JSON: {JSON.stringify(this.props.navigation.getParam('CompletedQuestionnaire', {}))}</Text>
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
        backgroundColor: PURPLE,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        maxHeight: '80%',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
});
