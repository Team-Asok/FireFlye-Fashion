/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable func-names */
/* eslint-disable vars-on-top */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-globals */
import React from "react";

const PercentBar = function (props) {
  if (isNaN(props.percentage)) {
    var percentage = 0;
  } else {
    var { percentage } = props;
  }

  return (
    <td>
      <svg width="250" height="15">
        <defs>
          <linearGradient
            id={`grad${percentage}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset={`${percentage}%`}
              style={{ stopColor: "rgb(255, 255, 255)", stopOpacity: 1 }}
            />
            <stop
              offset={`${percentage + 1}%`}
              style={{ stopColor: "rgb(236, 89, 255)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(255, 150, 3)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <rect
          id="percent-bar"
          width="250"
          height="10"
          style={{ strokeWidth: "2px", stroke: "black" }}
          fill={`url(#grad${percentage})`}
        />
      </svg>
    </td>
  );
};

export default PercentBar;
