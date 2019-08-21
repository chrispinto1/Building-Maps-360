import React from 'react'
import { asset, View, VrButton, Image, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'
import {Environment, NativeModules} from 'react-360'
import { connect } from '../Store';
import EntranceArrow from './EntranceArrow'
import RightArrow from './RightArrow'
let renderPhotos = ["outside.jpg","entrance.jpg","entrance2.jpg","registers.jpg","kiosk.jpg","alley_rollers.jpg","nba.jpg"]
let renderPhotosLeftArrow = ["entrance.jpg","entrance2.jpg","registers.jpg","kiosk.jpg","alley_rollers.jpg","nba.jpg"]
let renderPhotosRightArrow= ["kiosk.jpg","alley_rollers.jpg"]

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
        translateX: 0,
        translateY: 1,
        translateZ: 2,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
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
    if(renderPhotos.includes(this.state.currentPhoto)){
    return(
      <View>
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
      </View>
    )
  }else{
    return(
      <View>
      </View>
    )
    }
  }
}

const ConnectedLeftArrow = connect(LeftArrow);

export default ConnectedLeftArrow;
