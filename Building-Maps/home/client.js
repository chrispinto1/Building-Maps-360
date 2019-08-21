// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const rightArrow = new Location([0,-10,-8])
  const leftArrow = new Location([-10,-4,-8])

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Home', { /* initial props */ }),
    r360.getDefaultSurface()
  );


  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('intro.jpeg'));
}



window.React360 = {init};
