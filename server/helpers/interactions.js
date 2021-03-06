const axios = require("axios");
const config = require("../config");

const postAnalytic = (data) => {
  const options = {
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions",
    method: "post",
    headers: {
      "User-Agent": "request",
      Authorization: config.API_KEY,
    },
    params: {
      element: data.element,
      widget: data.widget,
      time: data.time,
    },
  };
  return axios(options)
    .then(() => {})
    .catch((err) => err);
};

module.exports.postAnalytic = postAnalytic;
