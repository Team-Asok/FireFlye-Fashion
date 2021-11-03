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
    characteristicsArray.map((characteristic, index) => {
      return (
        // <>
        // <div key={`${index}`} id='characteristic'>{characteristic[0]}</div>
        // <div key={`${index + 1}`} id='characteristic-value'>{characteristic[1].value}</div>
        // <div key={`${index + 2}`} id='characteristic-rating-criteria'>{`
        //   ${characteristicsGuide[characteristic[0]][0]}
        //   ${characteristicsGuide[characteristic[0]][2]}
        //   ${characteristicsGuide[characteristic[0]][4]}
        // `}
        // </div>
        // </>
        <div id="characteristic" key={`${index}`}>{characteristic[0]}
          <table id="characteristics-table">
            <tbody>
              <tr>
                <td>bar 1</td>
                <td>bar 2</td>
                <td>bar 3</td>
              </tr>
              <tr>
                <td>{characteristicsGuide[characteristic[0]][0]}</td>
                <td>{characteristicsGuide[characteristic[0]][2]}</td>
                <td>{characteristicsGuide[characteristic[0]][4]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )

    })
  )

}

export default Characteristics;
