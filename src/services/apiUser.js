import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const getAllUsers = async () => {
  return axios.get(`${API_URL}/getAllUsers`);
};
