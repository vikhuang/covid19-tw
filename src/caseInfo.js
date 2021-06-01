import * as React from 'react';

//case	spot	spotInfo	county	district	address	date	time	langitude	longitude	pulishBy	pulishByLink	updateTime	not

function CaseInfo(props) {
  const {info} = props;
    const caseName = `案${info.case}`;
    const pulishBy = `${info.pulishBy}`;
    const link = `${info.pulishByLink}`;

  return (
    <div>
      <div>
        {caseName}  |{' '}
        <a
          target="_new"
          href= {link}
        >
          {pulishBy}
        </a>
      </div>
      <img width={240} src={info.image} />
    </div>
  );
}

export default React.memo(CaseInfo);


//{`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
