import axios from "axios";

const API_URL = "http://localhost:5000/users";

export async function getAllUsers() {
  return axios.get(`${API_URL}/getAllUsers`);
};
export async function deleteUserById(id){
  return axios.delete(`${API_URL}/deleteUserById/${id}`,id);
}