
const apiBase = process.env.VUE_APP_API_BASE;

export default {
  
  auth: {
    login: apiBase + '/insuranceData/user/signIn'
  },
    
  insuanceForm: {
    marquis:apiBase + '/insuranceData/marquis',
    firstox:apiBase + '/insuranceData/firstox',
    orderStats:apiBase +'/insuranceData/orders/count',
    orderStatsTable:apiBase + '/insuranceData/orders/table'
  },
  

}
