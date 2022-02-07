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
  async postFormData(body) {
    const url = Endpoints.insuanceForm.formData;  
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

