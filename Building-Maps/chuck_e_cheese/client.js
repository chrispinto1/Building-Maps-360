// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import {ReactInstance, Location} from 'react-360-web';
import {Surface} from 'react-360-web';
import React from 'react'
let locations = []
let entrance

  function init(bundle, parent, options = {}) {
  fetch("http://localhost:3000/locations")
  .then(resp => resp.json())
  .then(locations => {
    locations = locations
    const r360 = new ReactInstance(bundle, parent, {
      // Add custom options here
      fullScreen: true,
      ...options,
    });

    const mySurface = new Surface(
          600, /* width */
          900, /* height */
        Surface.SurfaceShape.Cylinder /* shape */
    );

    // Render your app content to the default cylinder surface
    const firstSurface = r360.renderToSurface(
      r360.createRoot('ChuckeCheese', { /* initial props */ }),
      mySurface
    );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('outside.jpg'));


    handleMovement(r360,locations,firstSurface)
  })
}


  function handleMovement(r360,locations,firstSurface){
     insideBuilding(r360,locations)
  }



function insideBuilding(r360,locations){
    switch (r360.compositor._environment._panoSource.split('/')[1]) {
      case "outside.jpg":
      let entranceArrow = new Location([-1.5,-2,-8])
      r360.renderToLocation(
        r360.createRoot('LeftArrow'),
        entranceArrow
      )

    break;
  }
  }


window.React360 = {init};
