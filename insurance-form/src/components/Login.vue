<template>
  <div class="main-content">
    <form id="signup-form" v-on:submit.prevent="submit">
       <b-overlay
          id="overlay-background"
          :show = "show"
          rounded="md"
        >
       </b-overlay>
      <div class="row">
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >Email <span class="text-danger">*</span></label
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
          <div v-if="!$v.email.email" class="invalid-feedback">
            The email is not valid.
          </div>
        </div>
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >Password <span class="text-danger">*</span></label
          >
          <input
            type="password"
            v-model.trim="$v.password.$model"
            :class="{ 'is-invalid': validationStatus($v.password) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">
            The password field is required.
          </div>
          <div v-if="!$v.password.minLength" class="invalid-feedback">
            You must have at least
            {{ $v.password.$params.minLength.min }} letters.
          </div>
          <div v-if="!$v.password.maxLength" class="invalid-feedback">
            You must not have greater then
            {{ $v.password.$params.maxLength.min }} letters.
          </div>
        </div>
        <div class="col-12 form-group text-center">
          <b-button pill variant="outline-primary" size="lg" @click="submit"> Sign In</b-button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>

import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import { AuthService } from "@/services/Services";
import AppLogger from "@/utils/AppLogger";

export default {
  name: "Login",
  data: function () {
    return {
      email: "",
      password: "",
      show:false
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },

  mounted: function () {},

  methods: {
    resetData: function () {
      this.email = "";
      this.password = "";
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit: function () {
      this.show = true;
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      
      var user = {
        email:this.email,
        password:this.password
      }

      AuthService.signIn(user)
        .then((response) => {
          console.log("Response", response);
          if (response.data.responseIdentifier=="Success") {
            this.show  = false;
            this.$router.push("/create-order");
            this.$v.$reset();
            this.resetData();
          } else {
            alert("Please provide correct email and password")
            this.$v.$reset();
            this.resetData();
            this.show  = false;
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
  min-width: 150px;
}
</style>