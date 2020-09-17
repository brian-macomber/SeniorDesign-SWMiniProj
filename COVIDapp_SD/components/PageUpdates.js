import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';

class PageUpdates{
  constructor(props){
    super(props);
  }


  statusPageUpdate(badgeId){
    if(badgeId == 'Green'){
      const imageStatus = require('../backgroundfiles/appiphonebadgeg.png');
    }else if(badgeId == 'Yellow'){
      const imageStatus = require('../backgroundfiles/appiphonebadgey.png');
    }else if(badgeId == 'Red'){
      const imageStatus = require('../backgroundfiles/appiphonebadger.png');
    }
    return(
      <View style={styles.container}>
        <ImageBackground source={imageStatus} resizeMode='stretch' style={styles.imgBackg}>
          <Text></Text>
        </ImageBackground>
      </View>
    );
  }
  
}

export default PageUpdates;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  imgBackg:{
    width: '100%',
    height: '100%',
    flex: 1
  }
});
