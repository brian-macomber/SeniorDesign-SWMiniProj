import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import {FacebookButton, GoogleButton, StatusButton, SettingsButton, QuestionnaireButton} from '../components/navbuttons';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../res/validColors';

const PURPLE = 'rgba(108,48,237,1)';
const BLUE = 'rgb(65,105,225)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome your daily symptoms questionnaire! Tap next to continue'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Have you tested positive for COVID-19, also know as coronavirus, and are still under treatment?',
        questionId: 'covidTest',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'To the best of your knowledge, have you been in close contact with someone tested positive for COVID-19 in the past 15 days?',
        questionId: 'covidCloseContact',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you feel any indication of shortness of breath or are having trouble breathing?',
        questionId: 'covidBreath',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you feel any indication of having fever or chills?',
        questionId: 'covidFever',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Have you presented any form of cough or troath soreness in the last 24 hours?',
        questionId: 'covidTroath',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you feel any sort of muscular fatigue or body aches that could be unrelated to practiced physical activity?',
        questionId: 'covidMuscle',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you have any recent loss of taste or smell?',
        questionId: 'covidTaste',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you present any form of nausea, vomiting or diarrhea?',
        questionId: 'covidNausea',
        options: [
            {
                optionText: 'Yes',
                value: 'yes'
            },
            {
                optionText: 'No',
                value: 'no'
            },
        ]
    },
    {
        questionType: 'Info',
        questionText: 'Thank you for submitting your symptoms data! Tap finish to see your results!' //what if this went to the status page instead
    },
];

export default class Questionnaire extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: BLUE,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Questionnaire',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = {answersSoFar: '' };
    }

    onSurveyFinished(answers) {
        //also need to update the refresh flag for questionnaire done background
        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('CompletedQuestionnaire', { surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
     *  is restricted (age, geo-fencing) from your app.
     */

    //this is what rules the badge id for the day
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'covidTest': {
                if (answer.value == 'yes') {
                    //update badge id red
                }
                break;
            }
            case 'covidCloseContact': {
                if (answer.value == 'yes') {
                    //update badge id yellow
                }
                break;
            }
            case 'covidBreath': {
                if (answer.value == 'yes') {
                    //update badge id yellow
                }
                break;
            }
            case 'covidFever': {
                if (answer.value == 'yes') {
                    //update badge id yellow
                }
                break;
            }
            case 'covidTroath': {
                if (answer.value == 'no') {
                    //update badge id yellow
                }
                break;
            }
            case 'covidMuscle': {
                if (answer.value == 'no') {
                    //update badge id yellow
                }
                break;
            }
            case 'covidTaste': {
                if (answer.value == 'no') {
                    //update badge id yellow
                }
                break;
            }
            case 'covidNause': {
                if (answer.value == 'no') {
                    //update badge id yellow
                }
                break;
            }
            default:
                //badge id green
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={BLUE}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={BLUE}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={BLUE}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={BLUE}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={BLUE}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? BLUE : PURPLE}
                    style={isSelected ? { fontWeight: 'bold' } : {}}
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
          //update background layout/contructor color - done
                <View style={styles.container}>
                  <ImageBackground source={require('../backgroundfiles/appiphoneclean.png')} resizeMode='stretch' style={styles.imgBackg}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderInfo={this.renderInfoText}
                    />
                    </ImageBackground>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%', //70
        maxWidth: '100%', //90
        alignItems: 'stretch',
        justifyContent: 'center',
        elevation: 20,
        borderRadius: 10,
        flex: 1,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white', //white
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
        top: '47%',
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
    imgBackg:{
      width: '100%',
      height: '100%',
      flex: 1
    }
});
