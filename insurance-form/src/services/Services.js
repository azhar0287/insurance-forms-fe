import Endpoints from "@/services/Endpoints";
import axios from "axios";

export const AuthService = {
  async signIn(body) {
    const url = Endpoints.auth.login;

    return await axios
      .post(url, body)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
    },
  }

export const Api = {
  async postFormDataFirstox(body) {
    const url = Endpoints.insuanceForm.firstox;  
    return await axios
      .post(url, body)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });  
  },

  async postFormDataMarquis(body) {
    const url = Endpoints.insuanceForm.marquis;  
    return await axios
      .post(url, body)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });  
  },


  async getOrderStats() {
    const url = Endpoints.insuanceForm.orderStats;  
    return await axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });  
  },

}

