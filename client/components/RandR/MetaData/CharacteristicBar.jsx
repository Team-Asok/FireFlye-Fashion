/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import triangle from "./Triangle.png";

const CharacteristicBar = function (props) {
  return (
    <div id="characteristic" key={`${props.index}`}>
      {`${props.characteristic[0]}:`}
      <div id="rating-bar">
        <span id="bar-1">
          <svg width="100" height="10" border="2px solid black">
            <defs>
              <linearGradient
                id="characteristics-bar"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(236, 89, 255)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255, 150, 3)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <rect
              className="percent-bar"
              width="100"
              height="10"
              fill="url(#characteristics-bar)"
            />
          </svg>
        </span>

        <span id="bar-2">
          <svg width="100" height="10">
            <rect
              className="percent-bar"
              width="100"
              height="10"
              fill="url(#characteristics-bar)"
            />
          </svg>
        </span>

        <span id="bar-3">
          <svg width="100" height="10">
            <rect
              className="percent-bar"
              width="100"
              height="10"
              fill="url(#characteristics-bar)"
            />
          </svg>
        </span>
        <img
          id="triangle"
          src={triangle}
          height="25px"
          width="25px"
          style={{
            // eslint-disable-next-line prettier/prettier
            transform: `translateX(-${349.99 * (props.percentageValue / 100)
              // eslint-disable-next-line prettier/prettier
              }px) translateY(-8px)`,
          }}
          alt="fire meter"
        />
      </div>
      <div id="characteristic-criteria-container">
        <span id="charactistic-criteria">
          {props.characteristicsGuide[props.characteristic[0]][0]}
        </span>
        <span id="charactistic-criteria">
          {props.characteristicsGuide[props.characteristic[0]][2]}
        </span>
        <span id="charactistic-criteria">
          {props.characteristicsGuide[props.characteristic[0]][4]}
        </span>
      </div>
      <br />
    </div>
  );
};

export default CharacteristicBar;
