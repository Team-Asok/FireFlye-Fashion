import React from 'react';
import triangle from './Triangle.png'

const Characteristics = (props) => {
  let characteristicsGuide = {
    'Size': ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    'Width': ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    'Comfort': ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    'Quality': ['Poor', 'Below average', 'What i expected', 'Pretty great', 'Perfect'],
    'Length': ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    'Fit': ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  let characteristicsArray = Object.entries(props.characteristics)

  return (
    <div id="characteristics-area">
    {characteristicsArray.map((characteristic, index) => {
      let percentageValue = ((characteristic[1].value / 5) * 100).toFixed(0);
      return (
        <div key={`${index}`}>
        <div id="characteristic" >{`${characteristic[0]}:`}
          <div id="rating-bar">

              <span id="bar-1">
              <svg width="100" height="10">
                <rect width="100" height="10" fill='rgb(251, 198, 136)'/>
              </svg>
              </span>

              <span id="bar-2">
              <svg width="100" height="10">
                <rect width="100" height="10" fill='rgb(251, 198, 136)'/>
              </svg>
              </span>

              <span id="bar-3">
              <svg width="100" height="10">
                <rect width="100" height="10" fill='rgb(251, 198, 136)'/>
              </svg>
              </span>
              <img id="triangle" src={triangle} height="25px" width="25px"style={{transform: `translateX(-${349.99 * (percentageValue / 100)}px)`}} />
          </div>
          <div id="characteristic-criteria-container">
            <span id="charactistic-criteria">{characteristicsGuide[characteristic[0]][0]}</span>
            <span id="charactistic-criteria">{characteristicsGuide[characteristic[0]][2]}</span>
            <span id="charactistic-criteria">{characteristicsGuide[characteristic[0]][4]}</span>
          </div>
        </div>
        <br/>
        </div>

      )

    })}
    </div>
  )

}

export default Characteristics;
