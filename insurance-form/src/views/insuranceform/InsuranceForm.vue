<template>
  <div class="wrapper2">  
    <form @submit.prevent="submit">
      <div class="row form-class">
        <div class="col-sm-3">
          <div class="form-group"></div>
        </div>
      <!-- -------------- -->
        <div>
            <b-card bg-variant="light" text-variant="blue" title="Personal Information">
              <div class = "row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="col-form-label col-form-label-sm"
                      >First Name <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      v-model.trim="$v.form.firstName.$model"
                      :class="{ 'is-invalid': validationStatus($v.form.firstName)}"
                      class="form-control form-control-sm"
                    />
                    <div v-if="!$v.form.firstName.required" class="invalid-feedback">
                      The full name field is required.
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="col-form-label col-form-label-sm"
                      >Middle Name (Optional)</label
                    >
                    <input
                      type="text"
                      v-model.trim="form.middleName"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="col-form-label col-form-label-sm"
                      >Last Name <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      v-model.trim="$v.form.lastName.$model"
                      :class="{ 'is-invalid': validationStatus($v.form.lastName)}"
                      class="form-control form-control-sm"

                    />
                    <div v-if="!$v.form.lastName.required" class="invalid-feedback">
                      The Last name field is required.
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="col-form-label col-form-label-sm"
                      >Date of Birth<span class="text-danger">*</span></label
                    >
                    <input
                      type="date"
                      v-model.trim="$v.form.dob.$model"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': validationStatus($v.form.dob)}"
                    />
                    <div v-if="!$v.form.dob.required" class="invalid-feedback">
                      This field is required.
                    </div>
                  </div>
                </div>
                
                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="col-form-label col-form-label-sm"
                      >Gender <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      v-model.trim="$v.form.gender.$model"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': validationStatus($v.form.gender)}"

                    />
                    <div v-if="!$v.form.gender.required" class="invalid-feedback">
                      This field is required.
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <label class="col-form-label col-form-label-sm">PASSPORT/DL</label>
                    <input
                      type="number"
                      v-model.trim="form.passport"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label class="col-form-label col-form-label-sm">Race</label>
                <input
                  type="text"
                  v-model.trim="form.race"
                  class="form-control form-control-sm"
                />
              </div>
          </div>
          
          <div class="col-sm-3">
            <div class="form-group">
              <label class="col-form-label col-form-label-sm">Ethnicity</label>
              <input
                type="text"
                v-model.trim="form.ethnicity"
                class="form-control form-control-sm"
              />
            </div>
          </div>
          </div>
      </b-card>
      
      <br>
        <!-- ------------- -->
          <b-card bg-variant="light" text-variant="black" title="Contact Information">  
            <div class="row">
              <div class="col-sm-3">
                <div class="form-group">
                  <label class="col-form-label col-form-label-sm"
                    >Mobile Number 1<span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    v-model.trim="$v.form.mobileNumber.$model"
                    :class="{ 'is-invalid': validationStatus($v.form.mobileNumber)}"
                    class="form-control form-control-sm"
                  />
                  <div v-if="!$v.form.mobileNumber.required" class="invalid-feedback">
                    The mobile number is required.
                  </div>
                </div>
              </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label class="col-form-label col-form-label-sm"
                  >Mobile Number (Optional)</label
                >
                <input
                  type="number"
                  v-model.trim="form.optionalMobile"
                  class="form-control form-control-sm"
                />
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label class="col-form-label col-form-label-sm">Email <span class="text-danger">*</span><span class="text-danger">*</span></label>
                <input type="email" v-model.trim="$v.form.email.$model" :class="{'is-invalid': validationStatus($v.form.email)}" class="form-control form-control-sm">
                <div v-if="!$v.form.email.required" class="invalid-feedback">The email field is required.</div>
                <div v-if="!$v.form.email.email" class="invalid-feedback">The email is not valid.</div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label class="col-form-label col-form-label-sm">Email(optional)</label>
                <input type="email" v-model.trim="form.optionalEmail" class="form-control form-control-sm">
              </div>
            </div>
          </div>
        </b-card>
        
        <br>
        
        <div>
          <b-card bg-variant="light" text-variant="blue" title="Address Information">
            <div class = "row">
              <div class="col-sm-3">
                <div class="form-group">
                  <label class="col-form-label col-form-label-sm">Street <span class="text-danger">*</span></label>
                    <input
                      type="text"
                      v-model.trim="$v.form.street.$model"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': validationStatus($v.form.street)}"
                    />
                  <div v-if="!$v.form.street.required" class="invalid-feedback">
                    The full name field is required.
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="form-group">
                  <label class="col-form-label col-form-label-sm">Zip Code <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    v-model.trim="$v.form.zipCode.$model"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': validationStatus($v.form.zipCode)}"

                  />
                  <div v-if="!$v.form.zipCode.required" class="invalid-feedback">
                    The full name field is required.
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="form-group">
                  <label class="col-form-label col-form-label-sm">City <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    v-model.trim="$v.form.city.$model"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': validationStatus($v.form.city)}"
                  />
                  <div v-if="!$v.form.city.required" class="invalid-feedback">
                    The full name field is required.
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="form-group">
                  <label class="col-form-label col-form-label-sm">State <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    v-model.trim="$v.form.state.$model"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': validationStatus($v.form.state)}"
                  />
                  <div v-if="!$v.form.state.required" class="invalid-feedback">
                    This field is required.
                  </div>
                </div>
              </div>
          </div>  
        </b-card>
      </div>
    
    <br>

    <b-card bg-variant="light" text-variant="blue" title="HRSA Eligibility Syptoms">
            <div class = "row">
              <div class="col-sm-4">
                <div class="form-group">
                  <b-form-group
                    v-slot="{ ariaDescribedby }"
                  >
                  <b-form-checkbox-group
                    v-model="selected"
                    :options="options"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2a"
                    stacked
                  ></b-form-checkbox-group>
                  </b-form-group>          
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <b-form-group
                    v-slot="{ ariaDescribedby }"
                  >
                  <b-form-checkbox-group
                    v-model="selected"
                    :options="options2"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2a"
                    stacked
                  ></b-form-checkbox-group>
                  </b-form-group>                   
                </div>
              </div>
            </div>
    </b-card>

    </div>
    <br>
    <div>
      <br>
      <div class="col-lg-12 form-group text-center">
        <b-button pill variant="outline-primary" size="lg" @click="submit"> Next Form</b-button>
        <b-button pill variant="outline-primary" size="lg" @click="submitTestData"> Fill Test Data</b-button>

      </div>
    </div>  
    
    </div>
  </form>
  </div>
</template>
<script>
import {
  required,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "InsuranceForm",
  data: function () {
    return {
      editFormFlag: false,
      selected: [], // Must be an array reference!
        options: [
          { text: 'FEVER/CHILLS (50.9)', value: '50.9' },
          { text: 'DIFFICULTY BREATHING (R06.02)', value: 'R06.02' },
          { text: 'FATIGUE (R53.83)', value: 'R53.83' },
          { text: 'MUSCEL OR BODY ACHES (R52)', value: 'R52' },
          { text: 'NEW LOSS OF TASTE AND SMELL (R51)', value: 'R51' },
        ],
        
        options2:[
          { text: 'SOAR THROAT (R07.0)', value: 'R07.0' },
          { text: 'CONSGETION OR RUNNY NOSE (R09.81)', value: 'R09.81' },
          { text: 'NAUSEA (R11.2)', value: 'R11.2'},
          { text: 'VOMITING (R11.11)', value: 'R11.11'},
          { text: 'DIARRHEA (R19.7)', value: 'R19.7'},
        ],
      
      form: {
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        optionalEmail: "",
        mobileNumber: "",
        mobileNumber2: "",
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
        personalImage: null,
        insuranceIdImage: null,
        selectedTags:[]
      },
    };
  },
  components: {
    
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
      gender: { required },
      dob: { required },
      street: { required },
    }
  },

  created: function () {
    if(localStorage.getItem("editFlag")) {
      this.editFormFlag = true;
      this.form = JSON.parse(localStorage.getItem("dataForm")); //copy whole object
    }
    console.log("edit form", this.editFormFlag);
    
  },

  methods: {
    resetData: function () {
      this.fullname = "";
      this.email = "";
      this.country = "";
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit() {
      this.$v.$touch();
      this.form.selectedTags = this.selected;
      if (this.$v.$pendding || this.$v.$error) return;
      if(this.editFormFlag == true) {
        localStorage.setItem("dataForm", JSON.stringify(this.form));
        localStorage.setItem("editFlag","false")
        this.$router.push("/formview");
      }
      else {
        localStorage.setItem("dataForm", JSON.stringify(this.form));
        this.$router.push("/imageInfo");
        this.$v.$reset();
        this.resetData();
      }
      console.log("Formarray", this.selected);      
    },

    submitTestData() {
      this.form = {  
        "firstName": "Sameer",
        "lastName": "Sethi",
        "middleName": "AA",
        "email": "sameer@gmail.com",
        "optionalEmail": "",
        "mobileNumber": "1236526262225",
        "passport": "2111",
        "state": "TX",
        "city": "Dallas",
        "zipCode": "75094",
        "race": "other",
        "ethnicity": "other",
        "gender": "MALE",
        "dob": "1998-01-28",
        "language": "",
        "country": "",
        "street": "427 Ave Az",
        "optionalMobile": "",
      }
      console.log("form test", this.form);      
    },


  }
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