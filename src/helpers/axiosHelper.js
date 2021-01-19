import axios from "axios";

const initialization = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL_BASE;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Access-Control-Allow-Headers"] = "*";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
};

export { initialization, axios };
