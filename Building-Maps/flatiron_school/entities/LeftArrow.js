import React from 'react'
import { asset, View, VrButton, Image, AppRegistry, StyleSheet } from 'react-360'
import Entity from 'Entity'
import {Environment, NativeModules} from 'react-360'
import EntranceArrow from './EntranceArrow'
import RightArrow from './RightArrow'
let renderPhotos= ["entrance.jpg","entrance2.jpg","ui-ux.jpg","dyna_link.jpg","mod3.jpg","mod2.jpg","lockers.jpg"]
let renderPhotosLeftArrow = ["entrance.jpg","entrance2.jpg","ui-ux.jpg","dyna_link.jpg","bathroom.jpg","mod3.jpg","mod2.jpg","lockers.jpg","mod1.jpg"]


class LeftArrow extends React.Component{

  state = {
    translateX: 5,
    translateY: .5,
    translateZ: 1,
    rotateX: 90,
    rotateY: 90,
    rotateZ: 0,
    currentPhoto: 'entrance.jpg',
    setPhoto: null
  }

  switchEnvironment = () => {
    switch(this.state.currentPhoto){
    case 'entrance.jpg':
      Environment.setBackgroundImage(asset('entrance2.jpg'));
      this.setState({
        currentPhoto: 'entrance2.jpg',
        translateX: 0,
        translateY: 3,
        translateZ: 2,
        rotateX: 90,
        rotateY: 200,
        rotateZ: 90
      })
    break;
    case 'entrance2.jpg':
      Environment.setBackgroundImage(asset('mod3.jpg'));
      this.setState({
        currentPhoto: 'mod3.jpg',
        translateX: -.5,
        translateY: 4,
        translateZ: 2,
        rotateX: 90,
        rotateY: 160,
        rotateZ: 90
      })
    break;
    case 'ui-ux.jpg':
      Environment.setBackgroundImage(asset('entrance.jpg'));
      this.setState({
        currentPhoto: 'entrance.jpg',
        translateX: 5,
        translateY: .5,
        translateZ: 1,
        rotateX: 90,
        rotateY: 90,
        rotateZ: 0,
      })
    break;
    case 'dyna_link.jpg':
      Environment.setBackgroundImage(asset('ui-ux.jpg'));
      this.setState({
        currentPhoto: 'ui-ux.jpg',
        translateX: -4,
        translateY: 0,
        translateZ: 2,
        rotateX: 90,
        rotateY: 90,
        rotateZ: 180,
      })
    break;
    case 'mod3.jpg':
      Environment.setBackgroundImage(asset('mod2.jpg'));
      this.setState({
        currentPhoto: 'mod2.jpg',
        translateX: -3,
        translateY: 0,
        translateZ: 2,
        rotateX: 90,
        rotateY: 90,
        rotateZ: 160,
      })
    break;
    case 'mod2.jpg':
      Environment.setBackgroundImage(asset('lockers.jpg'));
      this.setState({
        currentPhoto: 'lockers.jpg',
        translateX: 6,
        translateY: 0,
        translateZ: 5,
        rotateX: 90,
        rotateY: 90,
        rotateZ: 0,
      })
    break;
    case 'lockers.jpg':
      Environment.setBackgroundImage(asset('mod1.jpg'));
      this.setState({
        currentPhoto: 'mod1.jpg'
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
    })
  }

  render(){
    console.log(this.state.currentPhoto)
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

      </View>
    )



  }
}


export default LeftArrow;
