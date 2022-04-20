
const apiBase = process.env.VUE_APP_API_BASE;

export default {
  
  auth: {
    login: apiBase + '/PatientOrder/user/signIn'
  },
    
  insuanceForm: {
    marquis:apiBase + '/PatientOrder/marquis',
    firstox:apiBase + '/PatientOrder/firstox',
    orderStats:apiBase +'/PatientOrder/orders/count',
    orderStatsTable:apiBase + '/PatientOrder/orders/table',
    testPdf:apiBase + '/PatientOrder/pdf',
    insuranceList:apiBase + '/PatientOrder/insurance/list'

  },
  
}
