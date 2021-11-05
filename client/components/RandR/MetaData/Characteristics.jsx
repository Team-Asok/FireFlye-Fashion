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
    <div id="characteristics-area">
    {characteristicsArray.map((characteristic, index) => {
      return (
        <div id="characteristic" key={`${index}`}>{characteristic[0]}
          <table id="characteristics-table">
            <tbody>
              <tr>
                <td>
                  <svg width="100" height="10">
                    <rect width="100" height="10" fill='rgb(251, 198, 136)'/>
                  </svg>
                </td>
                <td>
                  <svg width="100" height="10">
                    <rect width="100" height="10" fill='rgb(251, 198, 136)'/>
                  </svg></td>
                <td>
                  <svg width="100" height="10">
                    <rect width="100" height="10" fill='rgb(251, 198, 136)'/>
                  </svg>
                </td>
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

    })}
    </div>
  )

}

export default Characteristics;
