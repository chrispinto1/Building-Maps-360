import React from 'react'
import { asset, View, VrButton, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'
import { Environment, NativeModules } from 'react-360'

export default class RightArrow extends React.Component{
  constructor(props){
    super(props)
    this.switchEnvironment = this.switchEnvironment.bind(this)
  }

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
        Environment.setBackgroundImage(asset('ice_machines.jpg'));
        this.setState({
          currentPhoto: 'ice_machines.jpg',
          translateX: 13,
          translateY: 6,
          translateZ: -3,
          rotateX: -210,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,-5,6,3,210,0,90))
      break;
      case "alley_rollers.jpg":
        Environment.setBackgroundImage(asset('wonder_land.jpg'));
        this.setState({
          currentPhoto: 'wonder_land.jpg',
          translateX: 15,
          translateZ: -1,
          translateY: -4,
          rotateX: 210,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,7,-2,6,0,120,90))
      break;
      case "wonder_land.jpg":
        Environment.setBackgroundImage(asset('alley_rollers.jpg'));
        this.setState({
          currentPhoto: 'alley_rollers.jpg',
          translateX: 15,
          translateZ: 0,
          translateY: 1,
          rotateX: 180,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,0,1,2,0,90,90))
      break;
      case "ice_machines.jpg":
        Environment.setBackgroundImage(asset('seating.jpg'));
        this.setState({
          currentPhoto: 'seating.jpg',
          translateX: 13,
          translateY: 6,
          translateZ: -3,
          rotateX: -240,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,0,0,0,0,0,0))
      break;
      case "seating.jpg":
        Environment.setBackgroundImage(asset('back_seating.jpg'));
        this.setState({
          currentPhoto: 'back_seating.jpg',
          translateX: 10,
          translateY: 13,
          translateZ: 0,
          rotateX: -240,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,4,-6,6,0,130,90))
      break;
      case "back_seating.jpg":
        Environment.setBackgroundImage(asset('tech_room.jpg'));
        this.setState({
          currentPhoto: 'tech_room.jpg',
          translateX: 10,
          translateY: 4,
          translateZ: 0,
          rotateX: -210,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,0,0,0,0,0,0))
      break;
      case "tech_room.jpg":
        Environment.setBackgroundImage(asset('bathroom.jpg'));
        this.setState({
          currentPhoto: 'bathroom.jpg'
        },() => this.props.updateImage(this.state.currentPhoto,0,0,0,0,0,0))
      break;
      case "circle_train.jpg":
        Environment.setBackgroundImage(asset('wheel_of_fortune.jpg'));
        this.setState({
          currentPhoto: 'wheel_of_fortune.jpg',
          translateX: 10,
          translateY: -6,
          translateZ: 0,
          rotateX: -110,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,15,0,3,0,-90,90))
      break;
      case "ducky_splash.jpg":
        Environment.setBackgroundImage(asset('wheel_of_fortune.jpg'));
        this.setState({
          currentPhoto: 'wheel_of_fortune.jpg',
          translateX: 10,
          translateY: -6,
          translateZ: 0,
          rotateX: -110,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,15,0,3,0,-90,90))
      break;
      case "wheel_of_fortune.jpg":
        Environment.setBackgroundImage(asset('circle_train.jpg'));
        this.setState({
          currentPhoto: 'circle_train.jpg',
          translateX: 10,
          translateY: 10,
          translateZ: 0,
          rotateX: 130,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,15,0,3,0,-90,90))
      break;
    }
  }

  static getDerivedStateFromProps(props, state){

    if (props.currentPhoto !== state.currentPhoto){

      if(props.currentPhoto === "kiosk.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 3,
          translateY: 0,
          translateZ: -20,
          rotateX: 0,
          rotateY: 165,
          rotateZ: 0,
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
    else if(props.currentPhoto ==="wonder_land.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 15,
          translateZ: -1,
          translateY: -4,
          rotateX: 210,
          rotateY: 90,
          rotateZ: 90,
        }
      }
    else if(props.currentPhoto ==="ice_machines.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 13,
          translateY: 6,
          translateZ: -3,
          rotateX: -210,
          rotateY: 90,
          rotateZ: 90,
        }
      }
    else if(props.currentPhoto ==="tech_room.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 10,
          translateY: 4,
          translateZ: 0,
          rotateX: -210,
          rotateY: 90,
          rotateZ: 90,
        }
      }
    else if(props.currentPhoto ==="back_seating.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 10,
          translateY: 13,
          translateZ: 0,
          rotateX: -240,
          rotateY: 90,
          rotateZ: 90,
        }
      }
    else if(props.currentPhoto ==="seating.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 13,
          translateY: 6,
          translateZ: -3,
          rotateX: -240,
          rotateY: 90,
          rotateZ: 90,
        }
      }
    else if(props.currentPhoto ==="circle_train.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 10,
          translateY: 10,
          translateZ: 0,
          rotateX: 130,
          rotateY: 90,
          rotateZ: 90,
        }
      }
    else if(props.currentPhoto ==="ducky_splash.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 3,
          translateY: -2,
          translateZ: -2,
          rotateX: -60,
          rotateY: 90,
          rotateZ: 90,
        }
      }
    else if(props.currentPhoto ==="wheel_of_fortune.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 10,
          translateY: -6,
          translateZ: 0,
          rotateX: -110,
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
