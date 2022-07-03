import axios from "axios";

// get tracks being searched
const getProfile = () => {
  const url = "https://run.mocky.io/v3/813d4d6d-a4c3-46e8-8d12-d4182610e895";
  const response = axios.get(url);
  return response.userData;
};

export { getProfile };
