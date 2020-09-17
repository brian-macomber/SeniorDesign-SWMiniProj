import React, {Component} from 'react';
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
  FlatList,
} from 'react-native';
import {
  FacebookButton,
  GoogleButton,
  StatusButton,
  SettingsButton,
  QuestionnaireButton,
} from '../components/navbuttons';

import {NavigationContainer} from '@react-navigation/native';

//might not need component -> put the updtae class

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let apiURL = 'https://api.covidtracking.com/v1/states/current.json';
    fetch(apiURL)
      .then((res) => res)
      .then((res) => {
        this.setState({dataSource: res});
      })
      .finally(() => is.setState({isLoading: false}));
  };

  renderRow = (data) => {
    return (
      <View
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
        }}>
        <Text>
          {data.item.state}: {data.item.total}
        </Text>
      </View>
    );
  };

  render() {
    let {items, isLoading} = this.state;
    return (
      <View style={styles.container}>
        {/*background image update still to be figured out*/}
        <ImageBackground
          source={require('backgrounds/appiphonehomeqg.png')}
          resizeMode="stretch"
          style={styles.imgBackg}>
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
          style={{top: '47%'}}
          data={this.state.dataSource}
          renderItem={(item) => this.renderRow(item)}
          keyExtractor={(item) => item.hash}
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
  imgBackg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
