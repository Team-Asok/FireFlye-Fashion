import React from 'react';

const Characteristics = (props) => {
  console.log(Object.entries(props.characteristics));
  let characteristicsArray = Object.entries(props.characteristics)
  return (
    characteristicsArray.map((characteristic) => {
      return (
        <>
        <div id='characteristic'>{characteristic[0]}</div>
        <div id='characteristic-value'>{characteristic[1].value}</div>
        </>
      )

    })
  )

}

export default Characteristics;
