<template>
  <div>
    <div class="camera-line">
      <div></div>
        <div class="centre-align">
          <PhotoCapture
            v-model="imageBase64"
            captureBtnContent="Capture"
            cancelBtnContent="Retake"
            doneBtnContent="Use Image"
            @input="done"
          />
        </div>
      <div></div>
    </div>
    <form id="signup-form" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >Language <span class="text-danger">*</span></label
            >
            <select
              v-model.trim="$v.language.$model"
              :class="{ 'is-invalid': validationStatus($v.language) }"
              class="form-control form-control-lg"
            >
              <option value="">Select Language</option>
              <option :value="c.iso" :key="c.iso" v-for="c in countryList">
                {{ c.country }}
              </option>
            </select>
            <div v-if="!$v.country.required" class="invalid-feedback">
              The country field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >First Name <span class="text-danger">*</span></label
            >
            <input
              type="text"
              v-model.trim="$v.firstName.$model"
              :class="{ 'is-invalid': validationStatus($v.firstName) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.firstName.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >Last Name <span class="text-danger">*</span></label
            >
            <input
              type="text"
              v-model.trim="$v.lastName.$model"
              :class="{ 'is-invalid': validationStatus($v.lastName) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.lastName.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >Middle Name (Optional)</label
            >
            <input
              type="text"
              v-model.trim="$v.middleName.$model"
              class="form-control form-control-lg"
            />
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >Date of Birth</label
            >
            <input
              type="date"
              v-model.trim="$v.dob.$model"
              :class="{ 'is-invalid': validationStatus($v.dob) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.dob.required" class="invalid-feedback">
              The email field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >Gender <span class="text-danger">*</span></label
            >
            <input
              type="text"
              v-model.trim="$v.gender.$model"
              :class="{ 'is-invalid': validationStatus($v.gender) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.gender.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >Mobile Number 1</label
            >
            <input
              type="number"
              v-model.trim="$v.mobileNumber.$model"
              :class="{ 'is-invalid': validationStatus($v.mobileNumber) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.mobileNumber.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <!-- <div class="col-md-3">
                <div class="form-group">
                    <label class="col-form-label col-form-label-md">Mobile Number (Optional)</label>
                    <input type="text" v-model.trim="$v.optionalMobile.$model"  class="form-control form-control-sm">   
                </div>
            </div> -->

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >Email ID 1 <span class="text-danger">*</span></label
            >
            <input
              type="email"
              v-model.trim="$v.email.$model"
              :class="{ 'is-invalid': validationStatus($v.email) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.email.required" class="invalid-feedback">
              The email field is required.
            </div>
            <div v-if="!$v.email.required" class="invalid-feedback">
              The email is not valid.
            </div>
          </div>
        </div>

        <!-- <div class="col-md-3">
                <div class="form-group">
                    <label class="col-form-label col-form-label-md">Email ID (Optional)</label>
                    <input type="email" v-model.trim="$v.optionalEmail.$model" class="form-control form-control-lg">
                </div>
            </div>  -->

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Race</label>
            <input
              type="text"
              v-model.trim="$v.race.$model"
              :class="{ 'is-invalid': validationStatus($v.race) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.race.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Ethnicity</label>
            <input
              type="text"
              v-model.trim="$v.ethnicity.$model"
              :class="{ 'is-invalid': validationStatus($v.ethnicity) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.ethnicity.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Street</label>
            <input
              type="text"
              v-model.trim="$v.street.$model"
              :class="{ 'is-invalid': validationStatus($v.street) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.street.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Zip Code</label>
            <input
              type="text"
              v-model.trim="$v.zipCode.$model"
              :class="{ 'is-invalid': validationStatus($v.zipCode) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.zipCode.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">City</label>
            <input
              type="text"
              v-model.trim="$v.city.$model"
              :class="{ 'is-invalid': validationStatus($v.city) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.city.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">State</label>
            <input
              type="text"
              v-model.trim="$v.state.$model"
              :class="{ 'is-invalid': validationStatus($v.state) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.state.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">PASSPORT/DL</label>
            <input
              type="number"
              v-model.trim="$v.passport.$model"
              :class="{ 'is-invalid': validationStatus($v.passport) }"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.passport.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-12 form-group text-center">
          <button class="btn-success col-2">Submit Form</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {
  required, email, minLength, maxLength,
} from "vuelidate/lib/validators";
import {Api} from "@/services/Services";
import "vue-media-recorder/src/assets/scss/main.scss";
import { PhotoCapture } from "vue-media-recorder";
import AppLogger from "@/utils/AppLogger";

export default {
  name: "SignupForm",
  data: function () {
    return {
      form: {
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        optionalEmail: "",
        mobileNumber: "",
        passport: "",
        state: "",
        city: "",
        zipCode: "",
        race: "",
        ethnicity: "",
        gender: "",
        dob: "",
        language: "",
        country: "",
        password: "",
        countryList: [],
        street: "",
        optionalMobile: "",
        imageBase64: null,
      },
    };
  },
  components: {
    PhotoCapture,
  },
  validations: {
    firstName: { required },
    lastName: { required },
    middleName: { required },
    email: { required, email },
    mobileNumber: { required },
    state: { required },
    city: { required },
    zipCode: { required },
    race: { required },
    ethnicity: { required },
    gender: { required },
    language: { required },
    dob: { required },
    country: { required },
    passport: { required },
    street: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },

  mounted: function () {
    var v = this;
    v.$http
      .get(`http://localhost:4600/countries`)
      .then(function (resp) {
        v.countryList = resp.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  methods: {
    resetData: function () {
      this.fullname = "";
      this.email = "";
      this.country = "";
      this.password = "";
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    done(picture) {
      console.log(picture);
    },

    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      alert("Data Submit");
      this.$v.$reset();
      this.resetData();
    },

    createFormData(body) {
      Api.postFormData(body)
        .then((response)=> {
          if(response.data.success) {
            console.log("Job Post Response", response);
            this.$router.push({name: 'admin', })
          }
          else {
              console.log("Error");
          }
        })
      .catch((error)=> {
        AppLogger.log(error);
      })
    },
  }
}
</script>
<style>
.btn-vue {
  background: #53b985;
  color: #31485d;
  font-weight: bold;
}
.camera-line {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.centre-align {
   padding-left: 20%;
}
</style>