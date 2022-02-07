
const apiBase = process.env.VUE_APP_API_BASE;

export default {
  
  auth: {
    login: apiBase + '/insuranceData/user/signIn'
  },
    
  insuanceForm: {
    formData:apiBase + '/insuranceData',
  },
  

}
