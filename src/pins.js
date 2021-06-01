import * as React from 'react';
import {useState} from 'react';
import {Marker} from 'react-map-gl';
import _ from 'lodash';
import styled from 'styled-components';
import moment from 'moment';
import Moment from 'react-moment';
import { render } from '@testing-library/react';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;


// const MarkerStyle = styled.svg`
// height: 20;
// viewBox: 0 0 24 24;
// fill: ${props => props.testColor};
// cursor: pointer;
// stroke: none;
// ${({ active }) => active &&
//   `
//   fill: blue;
//   `
// }
// `;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
  const {data, onClick} = props;
  const [active, setActive ] = useState(data[0]);

  let today = moment();
  const diff = (date) => { return (moment([date],moment.defaultFormat)).diff(today, 'days')}
  // const datetoNow = (date) => {byDateFormat(date).diff(dateNow,'days')}

  {console.log(diff('2021/5/10'))}

  return data.map((spot, index) => (
    
    <Marker key={`marker-${index}`} longitude={spot.longitude} latitude={spot.latitude}>
      <svg
        height= '20'
        viewBox="0 0 24 24"
        // style={{
        //   cursor: 'pointer',
        //   fill: `${active}` === `${spot}` ? `${pin}` : 'blue',
        //   stroke: 'none',
        //   transform: `translate(-10px,-20px)`
        // }}
        cursor= 'pointer'
        opacity= {1 + (diff(spot.date))  * 0.04}
        fill= {active === spot ? 'blue' : '#d00'}
        stroke= 'none'
        transform= 'translate(-10, -20)'
        onClick={()=>onClick(spot, setActive(spot),console.log(spot.date))}
      >
        <path d={ICON} />
      </svg>

    </Marker>
  ));
}

export default React.memo(Pins);

// active={active === spot};
//       onClick={()=>onClick(spot, setActive(spot))};

