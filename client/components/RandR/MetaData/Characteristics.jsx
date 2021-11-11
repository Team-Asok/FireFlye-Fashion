/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import CharacteristicBar from "./CharacteristicBar";

const Characteristics = function (props) {
  const characteristicsGuide = {
    Size: [
      "A size too small",
      "1/2 a size too small",
      "Perfect",
      "1/2 a size too big",
      "A size too wide",
    ],
    Width: [
      "Too narrow",
      "Slightly narrow",
      "Perfect",
      "Slightly wide",
      "Too wide",
    ],
    Comfort: [
      "Uncomfortable",
      "Slightly uncomfortable",
      "Ok",
      "Comfortable",
      "Perfect",
    ],
    Quality: [
      "Poor",
      "Below average",
      "What i expected",
      "Pretty great",
      "Perfect",
    ],
    Length: [
      "Runs Short",
      "Runs slightly short",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
    Fit: [
      "Runs tight",
      "Runs slightly tight",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
  };

  const characteristicsArray = Object.entries(props.characteristics);

  return (
    <div id="characteristics-area">
      {characteristicsArray.map((characteristic, index) => {
        const percentageValue = ((characteristic[1].value / 5) * 100).toFixed(
          0
        );
        return (
          <CharacteristicBar
            key={`${index}`}
            percentageValue={percentageValue}
            index={index}
            characteristic={characteristic}
            characteristicsGuide={characteristicsGuide}
          />
        );
      })}
    </div>
  );
};

export default Characteristics;
