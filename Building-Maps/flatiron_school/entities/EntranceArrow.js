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
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    currentPhoto: ""
  }

  switchEnvironment = () => {
    switch(this.state.currentPhoto){
      case "entrance.jpg":
        Environment.setBackgroundImage(asset('ui-ux.jpg'));
        this.setState({
          currentPhoto: "ui-ux.jpg",
          translateX: 4,
          translateY: .8,
          translateZ: -4,
          rotateX: 0,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, -4,0,2,180,90,90))
      break;
      case "entrance2.jpg":
        Environment.setBackgroundImage(asset('entrance.jpg'));
        this.setState({
          currentPhoto: "entrance.jpg",
          translateX: 6,
          translateY: 1,
          translateZ: -4,
          rotateX: -180,
          rotateY: 90,
          rotateZ: 90
        },() => this.props.updateImage(this.state.currentPhoto, 5,.5,1,0,90,90))
      break;
      case "ui-ux.jpg":
        Environment.setBackgroundImage(asset('dyna_link.jpg'));
        this.setState({
          currentPhoto: "dyna_link.jpg",
          translateX: 4,
          translateY: -.5,
          translateZ: -3,
          rotateX: 100,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, -4,1,3,165,90,90))
      break;
      case "dyna_link.jpg":
        Environment.setBackgroundImage(asset('bathroom.jpg'));
        this.setState({
          currentPhoto: "bathroom.jpg",
          translateX: 3,
          translateY: 0,
          translateZ: 3,
          rotateX: 10,
          rotateY: -90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, -4,1,3,165,90,90))
      break;
      case "bathroom.jpg":
        Environment.setBackgroundImage(asset('dyna_link.jpg'));
        this.setState({
          currentPhoto: "dyna_link.jpg",
          translateX: 4,
          translateY: -.5,
          translateZ: -3,
          rotateX: 100,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, -4,1,3,165,90,90))
      break;
      case "mod3.jpg":
        Environment.setBackgroundImage(asset('entrance2.jpg'));
        this.setState({
          currentPhoto: "entrance2.jpg",
          translateX: 2,
          translateY: -2,
          translateZ: -2,
          rotateX: 240,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, 0,2,2,90,200,90))
      break;
      case "mod2.jpg":
        Environment.setBackgroundImage(asset('mod3.jpg'));
        this.setState({
          currentPhoto: "mod3.jpg",
          translateX: 2,
          translateY: -2,
          translateZ: -2,
          rotateX: 240,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, -.5,4,2,90,160,90))
      break;
      case "lockers.jpg":
        Environment.setBackgroundImage(asset('mod2.jpg'));
        this.setState({
          currentPhoto: "mod2.jpg",
          translateX: 4,
          translateY: 2,
          translateZ: -2,
          rotateX: 10,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, -3,0,2,160,90,90))
      break;
      case "mod1.jpg":
      console.log("hit me")
        Environment.setBackgroundImage(asset('lockers.jpg'));
        this.setState({
          currentPhoto: "lockers.jpg",
          translateX: 4,
          translateY: 0,
          translateZ: -2,
          rotateX: 180,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto, 6,0,5,0,90,90))
      break;

    }
  }

  static getDerivedStateFromProps(props, state){
    if (props.currentPhoto !== state.currentPhoto){
      if(props.currentPhoto === "entrance.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 6,
          translateY: 1,
          translateZ: -4,
          rotateX: -180,
          rotateY: 90,
          rotateZ: 90
        }
      }
      else if(props.currentPhoto === "ui-ux.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 4,
          translateY: .8,
          translateZ: -4,
          rotateX: 0,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "entrance2.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 2,
          translateY: -2,
          translateZ: -2,
          rotateX: 240,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "mod3.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 2,
          translateY: -2,
          translateZ: -2,
          rotateX: 240,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "mod2.jpg"){
        console.log("hit me")
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 4,
          translateY: 2,
          translateZ: -2,
          rotateX: 10,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "lockers.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 4,
          translateY: 0,
          translateZ: -2,
          rotateX: 180,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "mod1.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 4,
          translateY: 2,
          translateZ: -2,
          rotateX: 90,
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
