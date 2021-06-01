import * as React from 'react';
import moment from 'moment';
import Moment from 'react-moment';



function ControlPanel(props) {
  const {info} = props;
    const caseName = `案${info.case}`;
    const spotName = `${info.spot}`;
    const address = `${info.address}`;
    const pulishBy = `${info.pulishBy}`;
    const byDate = `${info.date}`;
    const byTime = `${info.time}`;
    const link = `${info.pulishByLink}`;

    let dateFormat = moment([`${byDate}`],moment.defaultFormat) 
    let dateNow = moment()
    let datetoNow = (dateFormat.diff(dateNow,'days')) / 1
    let toNow = moment(`${byDate}`).toNow(); 

    {console.log({info})}


  return (
    <div className="control-panel">
      <p style={spotNameStyle}> {spotName} </p>
      <p style={addressStyle}> {address} </p>
      <p style={caseNameStyle}> {caseName} </p>
      <p style={addressStyle}> {byDate} |  {byTime} | {toNow} | </p>
      <p style={addressStyle}>
       {/* <Moment toNow>{fromNow}</Moment> */}
       {datetoNow}
                  
      </p>
      <p></p>  
      <p>
        足跡細節 : {' '}
        <a target="_new" href= {link}>
          {pulishBy}
        </a>
      </p>
      <div className="source-link">
        <a
          href="https://www.cdc.gov.tw/"
          target="_new"
        >
          前往疾管署網站 ↗
        </a>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);


const spotNameStyle = {
  fontWeight: "700",
  fontSize: "16px"
}

const caseNameStyle = {
  fontWeight: "500",
  fontSize: "14px"
}

const addressStyle = {
  fontWeight: "300",
  fontSize: "12px"
}