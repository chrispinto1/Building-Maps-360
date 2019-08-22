import React from 'react'
import { Environment, NativeModules } from 'react-360'
import { asset, View, VrButton, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'


export default class MiddleArrow extends React.Component{

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
      case "back_seating.jpg":
        Environment.setBackgroundImage(asset('circle_train.jpg'));
        this.setState({
          currentPhoto: 'circle_train.jpg',
          translateX: 0,
          translateY: -2.5,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,-5,6,3,210,0,90))
      break;
      case "circle_train.jpg":
        Environment.setBackgroundImage(asset('back_seating.jpg'));
        this.setState({
          currentPhoto: 'back_seating.jpg',
          translateX: 0,
          translateY: -3,
          translateZ: -3,
          rotateX: 0,
          rotateY: 90,
          rotateZ: 90,
        },() => this.props.updateImage(this.state.currentPhoto,4,-6,6,0,130,90))
      break;
    }
  }


  static getDerivedStateFromProps(props, state){


    if (props.currentPhoto !== state.currentPhoto){
      if(props.currentPhoto === "circle_train.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 0,
          translateY: -2.5,
          translateZ: 0,
          rotateX: -30,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else if(props.currentPhoto === "back_seating.jpg"){
        return{
          currentPhoto: props.currentPhoto,
          setPhoto: props.setCurrentPhoto,
          translateX: 0,
          translateY: -3,
          translateZ: -3,
          rotateX: 0,
          rotateY: 90,
          rotateZ: 90,
        }
      }
      else{
        return{

        }
      }
    }
      else{
        return {

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
