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
          translateY: 1,
          translateZ: 14,
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
          translateY: 1.5,
          translateZ: 14,
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
      case "ice_machines.jpg":
        Environment.setBackgroundImage(asset('kiosk.jpg'));
        this.setState({
          currentPhoto: "kiosk.jpg",
          translateX: 0,
          translateY: -.5,
          translateZ: -20,
          rotateX: 180,
          rotateY: 0,
          rotateZ: 0,
        },() => this.props.updateImage(this.state.currentPhoto,6,-3,1,300,0,90))
      break;
      case "nba.jpg":
        Environment.setBackgroundImage(asset('alley_rollers.jpg'));
        this.setState({
          currentPhoto: "alley_rollers.jpg",
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 90,
          rotateY: 0,
          rotateZ: 0,
        },() => this.props.updateImage(this.state.currentPhoto,1,-3,2,90,0,-90))
      break;
      case "wonder_land.jpg":
        Environment.setBackgroundImage(asset('wonder_wheel.jpg'));
        this.setState({
          currentPhoto: "wonder_wheel.jpg",
          translateX: 13,
          translateY: 4.5,
          translateZ: 0,
          rotateX: -200,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,3,3,0,-70,0,90))
        break;
      case "seating.jpg":
        Environment.setBackgroundImage(asset('ice_machines.jpg'));
        this.setState({
          currentPhoto: "ice_machines.jpg",
          translateX: 0,
          translateY: -5,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,-5,6,3,210,0,90))
        break;
      case "bathroom.jpg":
        Environment.setBackgroundImage(asset('tech_room.jpg'));
        this.setState({
          currentPhoto: "tech_room.jpg",
          translateX: 2,
          translateY: -3,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,0,0,0,0,0,0))
        break;
      case "tech_room.jpg":
        Environment.setBackgroundImage(asset('back_seating.jpg'));
        this.setState({
          currentPhoto: "back_seating.jpg",
          translateX: 2,
          translateY: -3,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,0,0,0,0,0,0))
        break;
      case "back_seating.jpg":
        Environment.setBackgroundImage(asset('seating.jpg'));
        this.setState({
          currentPhoto: "seating.jpg",
          translateX: 4,
          translateY: -8,
          translateZ: 0,
          rotateX: -60,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,0,0,0,0,0,0))
        break;
      case "wheel_of_fortune.jpg":
        Environment.setBackgroundImage(asset('wonder_land.jpg'));
        this.setState({
          currentPhoto: "wonder_land.jpg",
          translateX: 15,
          translateY: 8,
          translateZ: -3,
          rotateX: 130,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,7,-2,6,0,120,90))
        break;
      case "wonder_wheel.jpg":
        Environment.setBackgroundImage(asset('ice_machines.jpg'));
        this.setState({
          currentPhoto: "ice_machines.jpg",
          translateX: 0,
          translateY: -5,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,-5,6,3,210,0,90))
        break;
      case "stage.jpg":
        Environment.setBackgroundImage(asset('back_seating.jpg'));
        this.setState({
          currentPhoto: "back_seating.jpg",
          translateX: 2,
          translateY: -10,
          translateZ: 0,
          rotateX: -50,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,4,-6,6,0,130,90))
        break;
      case "circle_train.jpg":
        Environment.setBackgroundImage(asset('ducky_splash.jpg'));
        this.setState({
          currentPhoto: "ducky_splash.jpg",
          translateX: 4,
          translateY: -8,
          translateZ: 0,
          rotateX: -80,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,4,-6,6,0,130,90))
        break;
      case "ducky_splash.jpg":
        Environment.setBackgroundImage(asset('circle_train.jpg'));
        this.setState({
          currentPhoto: "circle_train.jpg",
          translateX: 15,
          translateY: -7,
          translateZ: 0,
          rotateX: 240,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,4,-6,6,0,130,90))
        break;
      case "harpoon_lagoon.jpg":
        Environment.setBackgroundImage(asset('nba.jpg'));
        this.setState({
          currentPhoto: "nba.jpg",
          translateX: 12,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: -90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,2,0,0,90,0,-90))
        break;
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("GDSFP",props.currentPhoto)
    if (props.currentPhoto !== state.currentPhoto){

      if(props.currentPhoto === "registers.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 4.8,
          translateY: 0,
          translateZ: 17,
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
          translateX: 5,
          translateY: 8,
          translateZ: 0,
          rotateX: 90,
          rotateY: 0,
          rotateZ: 0,
        }
      }
      else if(props.currentPhoto === "nba.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 12,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: -90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "ice_machines.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 0,
          translateY: -5,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "wonder_land.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 13,
          translateY: 8,
          translateZ: -3,
          rotateX: 130,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "wonder_wheel.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 13,
          translateY: 4.5,
          translateZ: 0,
          rotateX: -200,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "seating.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 4,
          translateY: -8,
          translateZ: 0,
          rotateX: -60,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "back_seating.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 2,
          translateY: -10,
          translateZ: 0,
          rotateX: -50,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "tech_room.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 3,
          translateY: 0,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "bathroom.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 13,
          translateY: 2,
          translateZ: 0,
          rotateX: 170,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "wheel_of_fortune.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 0,
          translateY: -2,
          translateZ: 0,
          rotateX: 0,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "stage.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 5,
          translateY: 10,
          translateZ: 0,
          rotateX: 90,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "circle_train.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 15,
          translateY: -7,
          translateZ: 0,
          rotateX: 240,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "harpoon_lagoon.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 13,
          translateY: -5,
          translateZ: 0,
          rotateX: 220,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "ducky_splash.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 4,
          translateY: -8,
          translateZ: 0,
          rotateX: -80,
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

export default EntranceArrow;
