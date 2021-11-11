// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";

const trackAnalytic = (widget, element) => {
  axios
    .post("/interactions", {
      data: {
        element: element.nodeName,
        time: new Date().toString(),
        widget,
      },
    })
    .catch((err) => console.log(`Error: ${err}`));
};

export default trackAnalytic;
