import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Pano,
  Location,
  Model,
  asset
} from 'react-360';
import LeftArrow from './entities/LeftArrow'
import EntranceArrow from './entities/EntranceArrow'


export default class FlatironSchool extends React.Component {


  render() {
    return (
      <View >
      </View>
    );
  }
};

AppRegistry.registerComponent('FlatironSchool', () => FlatironSchool);
AppRegistry.registerComponent('LeftArrow', () => LeftArrow);
AppRegistry.registerComponent('EntranceArrow', () => EntranceArrow);
