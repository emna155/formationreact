import axios from "axios";

const API_URL = "http://localhost:5000/commande";

export async function getAllCommande() {
  return axios.get(`${API_URL}/getAllCommande`);
};
export async function deleteById(id){
  return axios.delete(`${API_URL}/deleteById/${id}`,id);
}