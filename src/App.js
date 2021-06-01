import * as React from 'react';
import { useState } from 'react';
import {render} from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import ControlPanel from './control-panel';
import Pins from './pins';
import CaseInfo from './caseInfo';

import CASES from './data.json';

// eslint-disable-next-line import/no-webpack-loader-syntax
ReactMapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const TOKEN = 'pk.eyJ1Ijoidmlra3lodWFuZyIsImEiOiJjaXpxZGFwejkwMGh6MnBvYWU4amNmbnlmIn0._kb6jGtKy9mU8jbVmOvrcQ'; 

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 25.04,
    longitude: 121.512,
    zoom: 10,
    bearing: 0,
    pitch: 0
  });


  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapStyle = 'mapbox://styles/vikkyhuang/ckotu75r84cuj17o539elm200'
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={CASES} onClick={setPopupInfo} />

        {/* {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            {console.log({popupInfo})}
            <CaseInfo info={popupInfo} />
          </Popup>
        )} */}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>

      {popupInfo && (<ControlPanel info={popupInfo} />)}
    </div>
  );
}




 // const TOKEN = 'pk.eyJ1Ijoidmlra3lodWFuZyIsImEiOiJjaXpxZGFwejkwMGh6MnBvYWU4amNmbnlmIn0._kb6jGtKy9mU8jbVmOvrcQ'; 