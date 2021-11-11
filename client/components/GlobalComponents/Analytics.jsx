import React from 'react';
import axios from 'axios';

const trackAnalytic = (widget, element) => {
  axios.post('/interactions', {
    data: {
      element: element.nodeName,
      time: new Date().toString(),
      widget: widget
    }
  })
  .catch((err) => console.log(`Error: ${err}`))

}




export default trackAnalytic;