import React from 'react';

const PercentBar = (props) => {
  console.log(props.percentage)
  return (<td style={{'width': '75%'}}>
        <svg width="250" height="15">
          <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${props.percentage || 0}%`} style={{'stop-color':'rgb(255,255,0)', 'stop-opacity':1}} />
                <stop offset={`${props.percentage + 1}%`} style={{'stop-color':'rgb(255,0,0)', 'stop-opacity':1}} />
              </linearGradient>
          </defs>
          <rect width="250" height="10" fill="url(#grad1)"/>
        </svg>
      </td>
  );

}


export default PercentBar;