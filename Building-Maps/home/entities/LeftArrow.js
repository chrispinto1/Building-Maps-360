import React from 'react'
import { asset, View, VrButton, Image, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'
import {Environment, NativeModules} from 'react-360'


export default class RightArrow extends React.Component{

  state = {
    count: 0,
    isSunEnvironment: false
  };

  switchEnvironment = () => {

  //   // Switch environment
  //   const isSunEnvironment = this.state.isSunEnvironment;
  //
  //   isSunEnvironment ? Environment.setBackgroundImage(asset('491066p-a-bridge-over-a-body-of-water.jpeg')) : Environment.setBackgroundImage(asset('01633841_20181218_Ocean_Terminal_Deck________360_____Tsim_Sha_Tsui__HK-1024x512.jpg'));
  //   this.setState({isSunEnvironment: !isSunEnvironment});
  // };

  onClick = () => {
    console.log('Left Clicked')
    Environment.clearbackground()
  }

  render(){
    return(
      <View>
        <VrButton onClick={this.switchEnvironment}>
        <Entity
          style={{
            transform: [
              {rotateZ: 180}
            ]
          }}
          source={{obj: asset('arrow.obj'), mtl: asset('arrow.mtl')}}
        />
        </VrButton>
      </View>
    )
  }
}
