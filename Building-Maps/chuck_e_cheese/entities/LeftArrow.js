import React from 'react'
import { asset, View, VrButton, Image, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'
import {Environment, NativeModules} from 'react-360'
import { connect } from '../Store';
import EntranceArrow from './EntranceArrow'
import RightArrow from './RightArrow'
import MiddleArrow from './MiddleArrow'
let renderPhotos = ["outside.jpg","entrance.jpg","entrance2.jpg","registers.jpg","kiosk.jpg","alley_rollers.jpg","nba.jpg","wonder_land.jpg","ice_machines.jpg","wonder_wheel.jpg","back_seating.jpg","wheel_of_fortune.jpg","stage.jpg","ducky_splash.jpg"]
let renderPhotosLeftArrow = ["entrance.jpg","entrance2.jpg","registers.jpg","kiosk.jpg","alley_rollers.jpg","nba.jpg","ice_machines.jpg","wonder_land.jpg","wonder_wheel.jpg","seating.jpg","back_seating.jpg","wheel_of_fortune.jpg","tech_room.jpg","bathroom.jpg","stage.jpg","ducky_splash.jpg","circle_train.jpg","harpoon_lagoon.jpg"]
let renderPhotosRightArrow= ["kiosk.jpg","alley_rollers.jpg","wonder_land.jpg","ice_machines.jpg","seating.jpg","back_seating.jpg","tech_room.jpg","ducky_splash.jpg","circle_train.jpg","wheel_of_fortune.jpg"]
let renderPhotosMiddleArrow = ["back_seating.jpg","circle_train.jpg"]

class LeftArrow extends React.Component{

  state = {
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotateX: 55,
    rotateY: 0,
    rotateZ: 95,
    currentPhoto: '',
    setPhoto: null
  }

  switchEnvironment = () => {
    switch(this.state.currentPhoto){
    case 'outside.jpg':
      Environment.setBackgroundImage(asset('entrance.jpg'));
      this.setState({
        currentPhoto: 'entrance.jpg',
        translateX: -6,
        translateY: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 135
      })
    break;
    case 'entrance.jpg':
      Environment.setBackgroundImage(asset('entrance2.jpg'));
      this.setState({
        currentPhoto: 'entrance2.jpg',
        translateX: -5,
        translateY: 6,
        translateZ: 0,
        rotateX: 90,
        rotateY: 0,
        rotateZ: 180,
      })
    break;
    case 'entrance2.jpg':
      Environment.setBackgroundImage(asset('registers.jpg'));
      this.setState({
        currentPhoto: 'registers.jpg',
        translateX: 5,
        translateY: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
      })
    break;
    case 'registers.jpg':
      Environment.setBackgroundImage(asset('kiosk.jpg'));
      this.setState({
        currentPhoto: 'kiosk.jpg',
        translateX: 4,
        translateY: 0,
        translateZ: 0,
        rotateX: 90,
        rotateY: -25,
        rotateZ: 270,
      })
    break;
    case 'kiosk.jpg':
      Environment.setBackgroundImage(asset('alley_rollers.jpg'));
      this.setState({
        currentPhoto: 'alley_rollers.jpg',
        translateX: 0,
        translateY: 1,
        translateZ: 2,
        rotateX: 90,
        rotateY: 90,
        rotateZ: 0,
      })
    break;
    case 'alley_rollers.jpg':
      Environment.setBackgroundImage(asset('nba.jpg'));
      this.setState({
        currentPhoto: 'nba.jpg',
        translateX: 2,
        translateY: 0,
        translateZ: 0,
        rotateX: -90,
        rotateY: 0,
        rotateZ: 90,
      })
    break;
    case 'nba.jpg':
      Environment.setBackgroundImage(asset('harpoon_lagoon.jpg'));
      this.setState({
        currentPhoto: 'harpoon_lagoon.jpg'
      })
    break;
  case 'ice_machines.jpg':
    Environment.setBackgroundImage(asset('wonder_wheel.jpg'));
    this.setState({
      currentPhoto: 'wonder_wheel.jpg',
      translateX: 3,
      translateY: 3,
      translateZ: 0,
      rotateX: 90,
      rotateY: 0,
      rotateZ: -70
    })
  break;
  case 'wonder_wheel.jpg':
    Environment.setBackgroundImage(asset('wonder_land.jpg'));
    this.setState({
      currentPhoto: 'wonder_land.jpg',
      translateX: 7,
      translateY: -2,
      translateZ: 6,
      rotateX: 90,
      rotateY: 120,
      rotateZ: 0
    })
  break;
  case 'wonder_land.jpg':
    Environment.setBackgroundImage(asset('wheel_of_fortune.jpg'));
    this.setState({
      currentPhoto: 'wheel_of_fortune.jpg',
      translateX: 15,
      translateY: 0,
      translateZ: 3,
      rotateX: 90,
      rotateY: -90,
      rotateZ: 0
    })
  break;
  case 'back_seating.jpg':
    Environment.setBackgroundImage(asset('stage.jpg'));
    this.setState({
      currentPhoto: 'stage.jpg',
      translateX: 8,
      translateY: 10,
      translateZ: 0,
      rotateX: 90,
      rotateY: 0,
      rotateZ: 0
    })
  break;
  case 'stage.jpg':
    Environment.setBackgroundImage(asset('ducky_splash.jpg'));
    this.setState({
      currentPhoto: 'ducky_splash.jpg',
      translateX: 10,
      translateY: 6,
      translateZ: 1,
      rotateX: 90,
      rotateY: -50,
      rotateZ: 0
    })
  break;
  case 'wheel_of_fortune.jpg':
    Environment.setBackgroundImage(asset('ducky_splash.jpg'));
    this.setState({
      currentPhoto: 'ducky_splash.jpg',
      translateX: 10,
      translateY: 6,
      translateZ: 1,
      rotateX: 90,
      rotateY: -50,
      rotateZ: 0
    })
  break;
  case 'ducky_splash.jpg':
    Environment.setBackgroundImage(asset('stage.jpg'));
    this.setState({
      currentPhoto: 'stage.jpg',
      translateX: 8,
      translateY: 10,
      translateZ: 0,
      rotateX: 90,
      rotateY: 0,
      rotateZ: 0
    })
  break;
    }
  }

  updateState = (img, tx, ty, tz, rz, ry, rx) => {
    this.setState({
      currentPhoto: img,
      translateX: tx,
      translateY: ty,
      translateZ: tz,
      rotateZ: rz,
      rotateY: ry,
      rotateX: rx,
    },() => console.log("Updated State",this.state.currentPhoto))
  }

  static getDerivedStateFromProps(props, state){
    if (props.currentPhoto !== state.currentPhoto){
      return{
        currentPhoto: props.currentPhoto,
        setPhoto: props.setCurrentPhoto
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
        {
          renderPhotos.includes(this.state.currentPhoto) ?
        <VrButton onClick={this.switchEnvironment}>
        <Entity
          style={{
            color: 'blue',
            transform: [
              {rotateY: this.state.rotateY},
              {rotateX: this.state.rotateX},
              {translateX: this.state.translateX},
              {translateY: this.state.translateY},
              {translateZ: this.state.translateZ},
              {rotateZ: this.state.rotateZ }
            ]
          }}
          source={{obj: asset('arrow.obj'), mtl: asset('arrow.mtl')}}
        />
        </VrButton>
        : null
      }
        {
         renderPhotosLeftArrow.includes(this.state.currentPhoto)
             ?
            <EntranceArrow updateImage={this.updateState} currentPhoto={this.state.currentPhoto} />
            :
            null
        }

        {
          renderPhotosRightArrow.includes(this.state.currentPhoto) ?
          <RightArrow updateImage={this.updateState} currentPhoto={this.state.currentPhoto}/>
          :
          null
        }
        {
          renderPhotosMiddleArrow.includes(this.state.currentPhoto) ?
          <MiddleArrow updateImage={this.updateState} currentPhoto={this.state.currentPhoto}/>
          :
          null
        }
      </View>
    )



  }
}

const ConnectedLeftArrow = connect(LeftArrow);

export default ConnectedLeftArrow;
