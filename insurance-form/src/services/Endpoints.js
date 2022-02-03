
const apiBase = process.env.VUE_APP_API_BASE;



export default {
  
  auth: {
    token: apiBase + '/auth/token',
    profile: apiBase + '/auth/profile',
    reset: apiBase + '/auth/reset',
    verifyResetCode: apiBase + '/auth/reset/verify',
    resetPassword: apiBase + '/auth/reset/password',
    register: apiBase + '/auth/register',
    updatePassword: apiBase + '/auth/update/password',

    verifyEmail: apiBase + '/auth/email/verify',
    resendVerificationCode: apiBase + '/auth/verificationCode/resend'
  },
  
  profile: {
    index: apiBase + '/profile',
    personalInfo: apiBase + '/profile/personalInfo',
    educationalInfo: apiBase + '/profile/educationalInfo',
    employmentInfo: apiBase + '/profile/employmentInfo',
    achievements: apiBase + '/profile/otherInfo/achievements',
    projects: apiBase + '/profile/otherInfo/projects',
    languageAndSkills: apiBase + '/profile/otherInfo/languageAndSkills',
    pictureUpdate: apiBase + '/profile/picture',
    cv: apiBase + '/profile/cv',
  },
  
  jobs: {
    index: apiBase + '/jobs',
    categoryListings: apiBase + '/jobs/categoryListings',
    allJobs: apiBase + '/jobs',
    search: apiBase + '/jobs/search',
    categories: apiBase +'/jobs/categories',
    deleteJob:apiBase + '/jobs',
    deleteCategory: apiBase + '/jobs/categories',
    jobApplications: apiBase + '/jobs/jobApplications',
    editJob: apiBase + '/jobs',
    postJob: apiBase + '/jobs',
    apply: apiBase + '/jobs/apply',
    category: apiBase+'/jobs/categories',
    applicationTags: apiBase+'/jobs/jobApplications/tags',
    favouriteJobs: apiBase + '/jobs/favouriteJobs',
    removeFavouriteJobs: apiBase + '/jobs/favouriteJobs/remove',
    appliedJobs:apiBase + '/jobs/appliedJobs',
    myjobs: apiBase + '/jobs/recruiter',
  },
  
  location: {
    countries:apiBase + '/jobs/location/country',
    states:apiBase + '/jobs/location/states',
    cities:apiBase + '/jobs/location/cities',
    
  }
}
