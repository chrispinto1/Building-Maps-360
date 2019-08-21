import React from 'react'
import { asset, View, VrButton } from 'react-360'
import Entity from 'Entity'

export default class RightArrow extends React.Component{
  onClick = () => {
    alert('Clicked')
  }
  render(){
    return(
      <View>
        <VrButton onClick={this.onClick}>
        <Entity
          style={{
            transform: [
              {rotateX: 150}
            ]
          }}
          source={{obj: asset('arrow.obj'), mtl: asset('arrow.mtl')}}
        />
        </VrButton>
      </View>
    )
  }
}
