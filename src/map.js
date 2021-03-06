import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import ControlPanel from './control-panel';
import Pins from './pins';
import CaseInfo from './info';

import CASES from './data.json';

const TOKEN = 'pk.eyJ1Ijoidmlra3lodWFuZyIsImEiOiJjaXpxZGFwejkwMGh6MnBvYWU4amNmbnlmIn0._kb6jGtKy9mU8jbVmOvrcQ'; 

const geolocateStyle = { top: 0, left: 0, padding: '10px' };
const fullscreenControlStyle = { top: 36, left: 0, padding: '10px' };
const navStyle = { top: 72, left: 0, padding: '10px' };
const scaleControlStyle = { bottom: 36, left: 0, padding: '10px' };

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 25,
    longitude: 124.75,
    zoom: 7,
    bearing: 0,
    pitch: 0
  });

  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={CASES} onClick={setPopupInfo} />

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CaseInfo info={popupInfo} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>

      <ControlPanel />
    </>
  );
}

 export function renderToDom(container) {
   render(<Map />, container);
 }