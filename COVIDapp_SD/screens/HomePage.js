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
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('https://api.covidtracking.com/v1/states/current.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => console.log(error));
  };
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };
  renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
        }}>
        <Text>State Code: {item.state}</Text>
        <Text>Total Positive Tests: {item.positive}</Text>
        <Text>Total Negative Tests: {item.negative}</Text>
        <Text>Data Reliability: {item.dataQualityGrade}</Text>
      </View>
    );
  };

  render() {
    //const {badgeId} = this.props.route.params
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
            onPress={() => this.props.navigation.navigate('Status', {})}
          />
        </ImageBackground>
        <FlatList
          style={{top: '47%'}}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.state}
          refreshing={this.state.isLoading}
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
