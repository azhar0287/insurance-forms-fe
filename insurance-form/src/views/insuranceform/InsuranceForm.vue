<template>
  <div class="wrapper2">
    <div class="camera-line">
      <div></div>
      <div class="centre-align">
        <PhotoCapture
          v-model="form.imageBase64"
          captureBtnContent="Capture"
          cancelBtnContent="Retake"
          doneBtnContent="Use Image"
          @input="done"
        />
      </div>
      <div></div>
    </div>
    <form @submit.prevent="submit">
      <div class="row form-class">
        <div class="col-md-3">
          <div class="form-group"></div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md"
              >First Name <span class="text-danger">*</span></label
            >
            <input
              type="text"
              v-model.trim="$v.form.firstName.$model"
              :class="{ 'is-invalid': validationStatus($v.form.firstName)}"
              class="form-control form-control-lg"
            />
            <div v-if="!$v.form.firstName.required" class="invalid-feedback">
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
              v-model.trim="$v.form.lastName.$model"
              :class="{ 'is-invalid': validationStatus($v.form.lastName)}"
              class="form-control form-control-lg"

            />
            <div v-if="!$v.form.lastName.required" class="invalid-feedback">
              The Last name field is required.
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
              v-model.trim="form.middleName"
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
              v-model.trim="$v.form.dob.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.dob)}"

            />
            <div v-if="!$v.form.dob.required" class="invalid-feedback">
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
              v-model.trim="$v.form.gender.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.gender)}"

            />
            <div v-if="!$v.form.gender.required" class="invalid-feedback">
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
              v-model.trim="$v.form.mobileNumber.$model"
              :class="{ 'is-invalid': validationStatus($v.form.mobileNumber)}"
              class="form-control form-control-lg"


            />
            <div v-if="!$v.form.mobileNumber.required" class="invalid-feedback">
              The mobile number is required.
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
                <label class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
                <input type="email" v-model.trim="$v.form.email.$model" :class="{'is-invalid': validationStatus($v.form.email)}" class="form-control form-control-lg">
                <div v-if="!$v.form.email.required" class="invalid-feedback">The email field is required.</div>
                <div v-if="!$v.form.email.email" class="invalid-feedback">The email is not valid.</div>
          </div>
        </div>
<!--  -->
        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Race</label>
            <input
              type="text"
              v-model.trim="$v.form.race.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.race)}"

            />
            <div v-if="!$v.form.race.required" class="invalid-feedback">
              This field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Ethnicity</label>
            <input
              type="text"
              v-model.trim="$v.form.ethnicity.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.ethnicity)}"

            />
            <div v-if="!$v.form.ethnicity.required" class="invalid-feedback">
              This field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Street</label>
            <input
              type="text"
              v-model.trim="$v.form.street.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.street)}"
            />
            <div v-if="!$v.form.street.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">Zip Code</label>
            <input
              type="text"
              v-model.trim="$v.form.zipCode.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.zipCode)}"

            />
            <div v-if="!$v.form.zipCode.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">City</label>
            <input
              type="text"
              v-model.trim="$v.form.city.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.city)}"
            />
            <div v-if="!$v.form.city.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">State</label>
            <input
              type="text"
              v-model.trim="$v.form.state.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.state)}"
            />
            <div v-if="!$v.form.state.required" class="invalid-feedback">
              This field is required.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label class="col-form-label col-form-label-md">PASSPORT/DL</label>
            <input
              type="number"
              v-model.trim="$v.form.passport.$model"
              class="form-control form-control-lg"
              :class="{ 'is-invalid': validationStatus($v.form.passport)}"
            />
            <div v-if="!$v.form.passport.required" class="invalid-feedback">
              The full name field is required.
            </div>
          </div>
        </div>

        <div class="col-lg-12 form-group text-center">
          <button class="btn-success col-2">Submit Form</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {
  required,
  email,
  //minLength,
  //maxLength,
} from "vuelidate/lib/validators";
import { Api } from "@/services/Services";
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
    form:{
      firstName: { required },
      lastName: { required },
      email: { required, email },
      mobileNumber: { required },
      state: { required },
      city: { required },
      zipCode: { required },
      race: { required },
      ethnicity: { required },
      gender: { required },
      // language: { required },
      dob: { required },
      passport: { required },
      street: { required },
    }
    

  },

  mounted: function () {},

  methods: {
    resetData: function () {
      this.fullname = "";
      this.email = "";
      this.country = "";
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    done(picture) {
      this.form.imageBase64 = picture;
    },

    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      console.log("Form ", this.form);
      this.createFormData(this.form);

      this.$v.$reset();
      this.resetData();
    },

    createFormData(body) {
      Api.postFormData(body)
        .then((response) => {
          if (response.data.success) {
            // console.log("Job Post Response", response);
            // this.$router.push({name: 'admin', })
          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          AppLogger.log(error);
        });
    },
  },
};
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

.wrapper2 {
  background: white;
  height: 100vh;
  width: 100%;
}

.form-class {
  margin: 10px 10px 10px 10px;
}

h1 {
  color: white !important;
}
</style>