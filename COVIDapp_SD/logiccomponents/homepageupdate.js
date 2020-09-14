import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';

class HomeUpdate{
  constructor(badgeid, refreshStatus){
    this.badgeid = badgeid;
    this.refreshStatus = refreshStatus;
  }

  //Get Background From File According to Badgeid & refresh status
  getBG(){
    if(refreshStatus = true){
      if(badgeid == 'green'){
        //green badge, dont need questionnaire
      }
      else if(badgeid == 'yellow'){
        //green badge, dont need questionnaire
      }
      else if(badgeid == 'red'){
        //red badge, dont need questionnaire
      }
      else{
        if(badgeid == 'green'){
          //green badge, need questionnaire
        }
        else if(badgeid == 'yellow'){
          //green badge, need questionnaire
        }
        else if(badgeid == 'red'){
          //red badge, need questionnaire
        }
      }
    }
    //return the background in question -> to be updated in App.js
  }
}

export default HomeUpdate;
