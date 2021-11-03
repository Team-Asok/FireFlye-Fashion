import React from 'react';

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
    characteristicsArray.map((characteristic) => {
      return (
        <>
        <div id='characteristic'>{characteristic[0]}</div>
        <div id='characteristic-value'>{characteristic[1].value}</div>
        <div id='characteristic-rating-criteria'>
          {characteristicsGuide[characteristic[0]][0]}
          {characteristicsGuide[characteristic[0]][2]}
          {characteristicsGuide[characteristic[0]][4]}
        </div>
        </>
      )

    })
  )

}

export default Characteristics;
