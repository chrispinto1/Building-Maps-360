import * as React from 'react';

const State = {
  currentPhoto: 'outside.jpg'
};

const listeners = new Set();


export function connect(Component) {
  return class Wrapper extends React.Component {

    updateComponents = () => {
      console.log("here")
      for (const cb of listeners.values()) {
        cb();
      }
    }
    setCurrent = (value) => {
      State.currentPhoto = value;
      this.updateComponents();
    }


    state = {
      currentPhoto: State.currentPhoto
    }

    _listener = () => {
      this.setState({
        currentPhoto: State.currentPhoto,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          setCurrentPhoto={this.setCurrent}
          currentPhoto={this.state.currentPhoto}
        />
      );
    }

  }
}
