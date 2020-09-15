import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import {FacebookButton, GoogleButton, StatusButton, SettingsButton, QuestionnaireButton} from '../components/navbuttons';

import {NavigationContainer} from '@react-navigation/native';


class HomePage extends Component{
    constructor(props) {
      super(props)
      this.state = {
        items: [{title: 'Test 1'}],
        isLoading: false
      }
    }

    renderRow = ({item, index}) => {
      return(
        <View style = {{flex: 1, height: '100%', width: '100%'}}>
        <ImageBackground source={require('backgrounds/appiphonehomeqg.png')} resizeMode='stretch' style={styles.imgBackg}>
         <Text>{item.title}</Text>
         <SettingsButton
           title="Settings"
           onPress={() => this.props.navigation.navigate('Settings')}
         />
         <QuestionnaireButton
           title="Questionnaire"
           onPress={() => this.props.navigation.navigate('Questionnaire')}
         />
         <StatusButton
           title="Status"
           onPress={() => this.props.navigation.navigate('Status')}
         />
         </ImageBackground>
        </View>
      )
    }

    render() {
        return (
          <View style={styles.container}>
              {/* Navigation is working between all pages -> Now need to check screen portability */}
              <FlatList
                data = {this.state.items}
                renderItem = {this.renderRow}
                keyExtractor = {(i, k) => k.toString()}
                />
          </View>
        );
    }
}

export default HomePage;


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
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    imgBackg:{
      width: '100%',
      height: '100%',
      flex: 1
    }
});
