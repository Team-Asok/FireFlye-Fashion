/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import React from "react";
import Twitter from "./Twitter.png";
import Facebook from './Facebook.png';
import Pinterest from './Pinterest.png';

const styling = {
  sale: {
    color: 'red',
    fontSize: 20,
    marginLeft: 15,
  },
  originalSale: {
    textDecoration: 'line-through',
    fontSize: 20,
  },
  originalNoSale: {
    fontSize: 20,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  category: {
    fontSize: 25,
  },
  name: {
    fontSize: 55,
  },
  social: {
    width: 30,
    height: 30,
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 0,
    padding: 0,
  },
};

const Info = function ({ currentProd, style }) {
  return (
    <div id="info">
      <div style={styling.category}>{currentProd.category}</div>
      <div style={styling.name}>{currentProd.name}</div>
      {style.sale_price ? (
        <div style={styling.flex}>
          <div style={styling.originalSale}>${style.original_price}</div>
          <div style={styling.sale}>${style.sale_price}</div>
        </div>
      ) : (
        <div style={styling.originalNoSale}>${style.original_price}</div>
      )}
      <ul style={styling.socialContainer}>
        <li>
          <a href="http://twitter.com/share?text=This+is+google+a+search+engine&url=https%3A%2F%2Fwww.google.com">
            <img style={styling.social} src={Twitter} />
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.google.com%This+Is%2C+Google+a+search+engine">
            <img style={styling.social} src={Facebook}/>
          </a>
        </li>
        <li>
          <a href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.google.com&description=This+is+google+a+search+engine">
            <img style={styling.social} src={Pinterest}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
