import Endpoints from "@/services/Endpoints";
import axios from "axios";

export const AuthService = {
  async signIn(username,password) {
    const url = Endpoints.auth.token

    const body = {
      username:username,
      password: password,
    };

    try {
      return await axios
        .post(url, body)
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },
  async requestResetCode(email) {
    const url = Endpoints.auth.reset

    const body = {
      email: email,
    };

    try {
      return await axios
          .post(url, JSON.stringify(body))
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async verifyResetCode(email,resetCode) {
    const url = Endpoints.auth.verifyResetCode

    const body = {
      email: email,
      resetCode: resetCode,
    };

    try {
      return await axios
          .post(url, body)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async resetPassword(email,password, resetCode) {
    const url = Endpoints.auth.resetPassword

    const body = {
      email: email,
      password: password,
      resetCode,
    };

    try {
      return await axios
          .post(url, body)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async register(body,file) {
    const url = Endpoints.auth.register

    let data = new FormData()

    data.append('name', 'image');
    data.append('file', file);
    data.append('registerForm', JSON.stringify(body));

    const headers = {
      'Content-Type':'multipart/form-data',
    }
    try {
      return await axios
          .post(url, data,{headers: headers})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },
  async requestVerificationCode(userIdentifier) {
    const url = Endpoints.auth.resendVerificationCode

    const body = {
      userIdentifier: userIdentifier,
    };

    try {
      return await axios
          .post(url, JSON.stringify(body))
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async verifyEmailAddress(userIdentifier,code) {
    const url = Endpoints.auth.verifyEmail

    const body = {
      userIdentifier: userIdentifier,
      code: code,
    };

    try {
      return await axios
          .post(url, body)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },
}


export const Api = {
  async getJobListings(country) {
    const url = Endpoints.jobs.categoryListings
    let params = {
      country : country ? country : null,
    }

    try {
      return await axios
        .get(url, {params:params})
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getJobListingsByCategory(categoryUuid) {
    const url = Endpoints.jobs.categoryListings
    const params = {
      categoryUuid: categoryUuid,
    }

    try {
      return await axios
        .get(url,{params: params})
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getJobById(id) {
    const url = Endpoints.jobs.index+'/'+id;

    try {
      return await axios
          .get(url)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async getAllJobs() {
    const url = Endpoints.jobs.allJobs
    try {
      return await axios
        .get(url)
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getPaginatedJobs(page, perPage, search, sortField, order, category, jobType, country, state, city) {
    const url = Endpoints.jobs.allJobs;
    const params = {
      page: page,
      perPage: perPage,
      searchQuery: search,
      sortBy: sortField,
      sortOrder: order,
      category:category,
      jobType: jobType,
      country: country,
      state: state,
      city: city,
    }
    console.log("Params ", params)
    try {
      return await axios
        .get(url, {params: params})
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getPaginatedJobsByCategory(page, perPage, search, category) {
    const url = Endpoints.jobs.allJobs;
    const params = {
      page: page,
      perPage: perPage,
      searchQuery: search,
      category:category
    }
    try {
      return await axios
          .get(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async getAllCategories() {
    const url = Endpoints.jobs.categories
    try {
      console.log("Url", url);
      return await axios
        .get(url)
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getAllJobsApplications() {
    const url = Endpoints.jobs.jobAplications
    try {
      return await axios
        .get(url)
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getJobsApplicationsByJob(jobUuid) {
    const url = Endpoints.jobs.jobApplications+'/applicant';
    const params = {
      jobUuid: jobUuid,
    }
    console.log("Url Applications", url)
    try {
      return await axios
        .get(url, {params: params})
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getJobApplicationsByJobAndTag(jobUuid,tagId) {
    const url = Endpoints.jobs.jobApplications+'/applicant';
    const body = {
      jobUuid: jobUuid,
      tagIds: tagId,
    }
    console.log("Url Applications", url)
    try {
      return await axios
        .post(url, body)
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async postJob(body) {
    const url = Endpoints.jobs.postJob
    try {
      return await axios
          .post(url, body)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async createCategory(body) {
    const url = Endpoints.jobs.category
    try {
      return await axios
          .post(url, body)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async addToFavouriteJob(body) {
    const url = Endpoints.jobs.favouriteJobs
    try {
      return await axios
          .post(url, body)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async removeFromFavouriteJobs(userIdentificationId, jobId) {
    const url = Endpoints.jobs.removeFavouriteJobs;
    const params = {
      userIdentificationId:userIdentificationId,
      jobId:jobId
    }
    try {
      return await axios
          .delete(url, {params:params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async getFavouites(userIdentificationId) {
    const url = Endpoints.jobs.favouriteJobs;
    const params = {
      userIdentificationId:userIdentificationId
    }
    try {
      return await axios
          .get(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async getJobsByRecruiter(userIdentificationId) {
    const url = Endpoints.jobs.myjobs;
    const params = {
      userIdentificationId:userIdentificationId
    }
    try {
      return await axios
          .get(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async getAppliedJobsByUser(userIdentificationId) {
    const url = Endpoints.jobs.appliedJobs;
    const params = {
      userIdentificationId:userIdentificationId
    }
    try {
      return await axios
          .get(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },



  async editJob(body) {
    const url = Endpoints.jobs.editJob
    try {
      return await axios
          .put(url, body)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async deleteJob(jobId) {
    const url = Endpoints.jobs.deleteJob
    const params = {
      jobId: jobId,
    }
    try {
      return await axios
          .delete(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async deleteJobCategory(categoryUuid) {
    const url = Endpoints.jobs.deleteCategory
    const params = {
      categoryUuid: categoryUuid,
    }
    try {
      return await axios
          .delete(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async updatePersonalInfo(body, userIdentifier) {
    const url = Endpoints.profile.personalInfo;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .put(url, body, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async updateEducationalInfo(body, userIdentifier) {
    const url = Endpoints.profile.educationalInfo;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .put(url, body, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async updateEmploymentInfo(body, userIdentifier) {
    const url = Endpoints.profile.employmentInfo;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .put(url, body, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async getApplicantProfile() {
    const url = Endpoints.profile.index
    try {
      return await axios
          .get(url)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async getApplicantProfileByUser(userIdentifier) {
    const url = Endpoints.profile.index;
    const params = {
      userIdentifier:userIdentifier
    }
    console.log(params);
    try {
      return await axios
          .get(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async getApplicantProfileByApplicant(jobId, applicantId) {
    const url = Endpoints.profile.index;
    const params = {
      applicantId:applicantId,
      jobId: jobId
    }
    try {
      return await axios
          .get(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },



  async updateAchievements(body, userIdentifier) {
    const url = Endpoints.profile.achievements;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .put(url, body, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async updateProjects(body, userIdentifier) {
    const url = Endpoints.profile.projects;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .put(url, body, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async updateLanguageAndSkills(body, userIdentifier) {
    const url = Endpoints.profile.languageAndSkills;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .put(url, body, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async applyForJob(jobId, userIdentifier) {
    const url = Endpoints.jobs.apply + '/' + jobId;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .post(url, "", {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async updatePassword(body, userIdentifier) {
    const url = Endpoints.auth.updatePassword;
    const params = {
      userIdentifier: userIdentifier,
    };
    try {
      return await axios
          .put(url, body, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async updateProfilePicture(file, userIdentifier) {
    const url = Endpoints.profile.pictureUpdate;
    let data = new FormData()

    data.append('name', 'image');
    data.append('file', file);
    const config = {
      params: {
        userIdentifier: userIdentifier,
      },
      headers : {
        'Content-Type' : 'multipart/form-data'
      },

    }
    try {
      return await axios
          .post(url,data,config)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },


  async searchJobs(page, perPage, search, location) {
    const url = Endpoints.jobs.search;
    const params = {
      page: page,
      perPage: perPage,
      searchQuery: search,
      locationQuery: location
    }
    try {
      return await axios
          .get(url, {params: params})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },



  async giveTagToJobApplication(tagId, jobApplicationId) {
    const url = Endpoints.jobs.applicationTags;
    const body = {
      applicantTagId: tagId,
      jobApplicationId: jobApplicationId
    };
    try {
      return await axios
          .put(url, JSON.stringify(body))
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async removeTagById(tagId, applicationId){

    const url = Endpoints.jobs.jobApplications+'/'+applicationId + '/tags/'+tagId;
    try {
      return await axios
          .delete(url)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async updateApplicantCv(file,identifier){

    const url = Endpoints.profile.cv;
    const params ={
      userIdentifier: identifier,
    }
    let body = new FormData();

    body.append('file',file);
    const headers = {
      'Content-Type':'multipart/form-data',
    }

    try {
      return await axios
          .post(url, body,{params: params, headers: headers})
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },

  async getTagList() {
    const url = Endpoints.jobs.applicationTags;
    try {
      return await axios
          .get(url)
          .then(response => {
            return response;
          })
          .catch(error => {
            throw error;
          });
    } catch (e) {
      throw e;
    }
  },
  
  async getCountriesList() {
    const url = Endpoints.location.countries
    try {
      return await axios
        .get(url)
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getCities(stateCode, countryCode) {
    const url = Endpoints.location.cities
    const params = {
      stateCode: stateCode,
      countryCode: countryCode
    }

    try {
      return await axios
        .get(url,{params: params})
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },

  async getStates(countryCode) {
    const url = Endpoints.location.states
    const params = {
      countryCode: countryCode,
    }

    try {
      return await axios
        .get(url,{params: params})
        .then(response => {
          return response;
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  },



}
