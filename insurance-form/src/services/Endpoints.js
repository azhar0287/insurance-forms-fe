
const apiBase = process.env.VUE_APP_API_BASE;

export default {
  
  auth: {
    login: apiBase + '/auth/token'
  },
    
  insuanceForm: {
    formData:apiBase + '/insuranceForm',
  },
  

}
