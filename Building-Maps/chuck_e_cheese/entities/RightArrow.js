import React from 'react'
import { asset, View, VrButton, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'
import { Environment, NativeModules } from 'react-360'

export default class RightArrow extends React.Component{
  state = {
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    currentPhoto: ''
  }

  switchEnvironment = () => {
    switch(this.state.currentPhoto){
      case "kiosk.jpg":
      console.log("Hi")
      break;
    }
  }

  static getDerivedStateFromProps(props, state){
    if (props.currentPhoto !== state.currentPhoto){

      if(props.currentPhoto === "kiosk.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateZ: -20,
          translateX: 3,
          rotateY: 165
        }
      }else if(props.currentPhoto === "alley_rollers.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 15,
          translateZ: 0,
          translateY: 1,
          rotateX: 180,
          rotateY: 90,
          rotateZ: 90,
        }
      }

      else{
        return {
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
        }

      }
    }else{
      return{
        // currentPhoto: props.currentPhoto,
        // setPhoto: props.setCurrentPhoto
      }
    }
  }

  render(){

    return(
      <View>
        <VrButton onClick={this.switchEnvironment}>
        <Entity
          style={{
            transform: [
              {rotateZ: this.state.rotateZ},
              {rotateX: this.state.rotateX},
              {rotateY: this.state.rotateY},
              {translateX: this.state.translateX},
              {translateY: this.state.translateY},
              {translateZ: this.state.translateZ}
            ]
          }}
          source={{obj: asset('arrow.obj'), mtl: asset('arrow.mtl')}}
        />
        </VrButton>
      </View>
      )

  }


}
