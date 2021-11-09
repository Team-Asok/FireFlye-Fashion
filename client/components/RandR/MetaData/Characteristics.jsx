import React from 'react';
import triangle from './Triangle.png'
import CharacteristicBar from './CharacteristicBar.jsx';

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
        <CharacteristicBar percentageValue={percentageValue} index={index} characteristic={characteristic} characteristicsGuide={characteristicsGuide} />
      )

    })}
    </div>
  )

}

export default Characteristics;
