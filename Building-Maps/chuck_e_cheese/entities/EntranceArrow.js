import React from 'react'
import { asset, View, VrButton, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'
import {Environment, NativeModules} from 'react-360'

class EntranceArrow extends React.Component{

  constructor(props){
    super(props)
    this.switchEnvironment = this.switchEnvironment.bind(this)
  }

  state = {
    translateX: 3.5,
    translateY: 1,
    translateZ: 14,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    currentPhoto: "entrance.jpg"
  }

  switchEnvironment = () => {
    switch(this.state.currentPhoto){
      case "entrance.jpg":
        Environment.setBackgroundImage(asset('outside.jpg'));
        this.setState({
          currentPhoto: "outside.jpg",
          translateX: 3.5,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },() => this.props.updateImage(this.state.currentPhoto, 0,0,0,95,0,55))
        break;
      case "entrance2.jpg":
        Environment.setBackgroundImage(asset('entrance.jpg'));
        this.setState({
          currentPhoto: "entrance.jpg",
          translateX: 3.5,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },() => this.props.updateImage(this.state.currentPhoto,-6,0,0,135,0,0))
        break;
      case "registers.jpg":
        Environment.setBackgroundImage(asset('entrance2.jpg'));
        this.setState({
          currentPhoto: "entrance2.jpg",
          translateX: 3.5,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },() => this.props.updateImage(this.state.currentPhoto,-5,6,0,180,0,90))
      break;
      case "kiosk.jpg":
        Environment.setBackgroundImage(asset('registers.jpg'));
        this.setState({
          currentPhoto: "registers.jpg",
          translateX: 3,
          translateY: 1,
          translateZ: 14,
          rotateX: 0
        },() => this.props.updateImage(this.state.currentPhoto,5,0,0,0,0,0))
      break;
      case "alley_rollers.jpg":
        Environment.setBackgroundImage(asset('kiosk.jpg'));
        this.setState({
          currentPhoto: "kiosk.jpg",
          translateX: 0,
          translateY: -.5,
          translateZ: -20,
          rotateX: 180
        },() => this.props.updateImage(this.state.currentPhoto,6,-3,1,300,0,90))
      break;
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("GDSFP")
    if (props.currentPhoto !== state.currentPhoto){

      if(props.currentPhoto === "registers.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 3,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0
        }
      }
      else if(props.currentPhoto === "kiosk.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 0,
          translateY: 0,
          translateZ: 20,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        }
      }
      else if(props.currentPhoto === "alley_rollers.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 10,
          translateY: 7,
          translateZ: 3,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        }
      }
      else if(props.currentPhoto === "nba.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 10,
          translateY: 7,
          translateZ: 3,
          rotateX: 90,
          rotateY: 0,
          rotateZ: 0,
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

export default EntranceArrow;
