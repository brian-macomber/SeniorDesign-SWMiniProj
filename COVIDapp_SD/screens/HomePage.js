import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import {FacebookButton, GoogleButton, StatusButton, SettingsButton, QuestionnaireButton} from '../components/navbuttons';

import {NavigationContainer} from '@react-navigation/native';

//might not need component -> put the updtae class

class HomePage extends Component{
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        isLoading: false
      }
    }

    componentDidMount(){
      this.getData()
    }

    getData = () => {
      let apiURL = 'https://jsonplaceholder.typicode.com/posts'
      fetch(apiURL).then(res => res.json()).then(res =>{
        this.setState({items: res})
      }).finally(()=>is.setState({isLoading: false}))
    }

    renderRow = ({item, index}) => {
      return(
        <View style = {{padding: 10, borderBottomWidth: 1, borderBottomColor: '#cccccc'}}>
          <Text>{item.title}</Text>
        </View>
      )
    }

    render() {
        let {items, isLoading} = this.state;
        return (
          <View style={styles.container}>
            {/*background image update still to be figured out*/}
            <ImageBackground source={require('backgrounds/appiphonehomeqg.png')} resizeMode='stretch' style={styles.imgBackg}>
              <Text></Text>
              {/* Navigation is working between all pages -> Now need to check screen portability */}
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
            <FlatList
              style = {{top: '47%'}}
              data = {items}
              renderItem = {this.renderRow}
              keyExtractor = {(i, k) => k.toString()}
              refreshing={isLoading}
              onRefresh={this.getData}
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
        //position: 'relative',
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
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1
    }
});
