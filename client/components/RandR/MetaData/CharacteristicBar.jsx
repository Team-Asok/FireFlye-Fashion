import React from 'react';
import triangle from './Triangle.png'


function CharacteristicBar(props) {
  return (
    <div id="characteristic" key={`${props.index}`}>{`${props.characteristic[0]}:`}
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
          <img id="triangle" src={triangle} height="25px" width="25px"style={{transform: `translateX(-${349.99 * (props.percentageValue / 100)}px)`}} />
      </div>
      <div id="characteristic-criteria-container">
        <span id="charactistic-criteria">{props.characteristicsGuide[props.characteristic[0]][0]}</span>
        <span id="charactistic-criteria">{props.characteristicsGuide[props.characteristic[0]][2]}</span>
        <span id="charactistic-criteria">{props.characteristicsGuide[props.characteristic[0]][4]}</span>
      </div>
      <br/>
    </div>

  )
}

export default CharacteristicBar;