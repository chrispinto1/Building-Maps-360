import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Home extends React.Component {


  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={{fontSize: 90, textAlign: 'center', color: 'rgb(82, 24, 8)'}}>
            Welcome to Building Maps!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255,255,255,.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    width: 400,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


AppRegistry.registerComponent('Home', () => Home);
