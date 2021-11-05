import React from 'react'
let id = 0;

const StarGraphic = (props) => {
  const roundToNearestQuarter = (num) => {
    if (num > 0 && num < 0.125) {
      return num = 0;
    }
    if (num >= 0.125 && num < 0.375) {
      return num = 0.25;
    }
    if (num >= 0.375 && num < 0.625) {
      return num = 0.50;
    }
    if (num >= 0.625 && num < 0.875) {
      return num = 0.75;
    }
    return num = 1;
  }

  let metaScore = props.metaScore

  let starValues = [0, 0, 0, 0, 0]

  let index = 0;

  while (metaScore > 0) {
    if (metaScore >= 1) {
      starValues[index] = starValues[index] + 1
      index++
      metaScore--
     } else {
       metaScore = roundToNearestQuarter(metaScore)
       starValues[index] = metaScore;
       metaScore = 0;
    }
  }
  let returnValue = (<span>
    {starValues.map((values, index) => {
      id += 1
      return (
      <svg xmlns="http://www.w3.org/2000/svg" key={`${index}`} className="star" viewBox="0 0 20 20" id={props.id} fill={`url(#${id})`} onClick={() => {props.onClick(index + 1)}}>
        <defs>
            <linearGradient id={`${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${values * 100}%`} style={{'stopColor':'rgb(59, 43, 43', 'stopOpacity':1}} />
              <stop offset={`${(values * 100) + 1}%`} style={{'stopColor':'rgb(255, 255, 255)', 'stopOpacity':0}} />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )})
    }
  </span>)

  return returnValue;
}

export default StarGraphic;