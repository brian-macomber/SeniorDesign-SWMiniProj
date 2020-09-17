import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';

class HomeUpdate{
  constructor(props){
    this.state
  }

  //const [, setQuestionnaire] = useState(false);
  //const [questionnaire, setBadge] = useState([]);

  // Handle questionnaire state changes
  onQuestStateChanged(questionnaire) {
    setBadge(questionnaire); //choses badge based on the questionnaire -implement
    if (questionnaire) setQuestionnaire(true); //sets questionnaire answered -implement
  }

  //Get Background From File According to Badgeid & refresh status
  getBG(){
    if(this.refreshStatus = true){
      if(this.badgeid == 'green'){
        return(
          //green badge, dont need questionnaire
          <View style={styles.container}>
            <ImageBackground source={require('./backgroundfiles/appiphonehomeqg.png')} resizeMode='stretch' style={styles.imgBackg}>
              <Text></Text>
            </ImageBackground>
          </View>
        );
      }
      else if(this.badgeid == 'yellow'){
        //green badge, dont need questionnaire
      }
      else if(this.badgeid == 'red'){
        //red badge, dont need questionnaire
      }
    else{
        if(this.badgeid == 'green'){
          //green badge, need questionnaire
        }
        else if(this.badgeid == 'yellow'){
          //green badge, need questionnaire
        }
        else if(this.badgeid == 'red'){
          //red badge, need questionnaire
        }
      }
    }
    //return the background in question -> to be updated in App.js or homepage file
  }
}

export default HomeUpdate;

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
