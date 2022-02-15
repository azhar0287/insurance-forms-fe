<template>
    <div class="wrapper3">
        <form>
            <div class="row form-class">
                <div class="form-group">
                    <div class="col-sm-3">
                        <div class="form-group"></div>
                    </div>
                    <div>
                        <b-card bg-variant="light" text-variant="blue">
                        <b-card bg-variant="light" text-variant="blue" title="Personal Details">
                            <div class = "row">
                                <div class="col-sm-3">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Name</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                    {{form.firstName}} {{form.lastName}}</label
                                    >
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Gender</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                    {{form.gender}}</label
                                    >
                                    </div>
                                </div>

                            <div class="col-sm-3">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Date of Birth</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                    {{form.dob}}</label
                                    >
                                    </div>
                                </div>
                            </div>
                        <div>
                            <br>
                            <h4>Address Details</h4>
                        </div>
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="form-group">
                                <label class="col-form-label col-form-label-sm">
                                <b>Street</b> </label
                                >
                                    &nbsp;
                                <label class="col-form-label col-form-label-sm">
                                {{form.street}}</label
                                >
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                <label class="col-form-label col-form-label-sm">
                                <b> City </b></label
                                >
                                    &nbsp;
                                <label class="col-form-label col-form-label-sm">
                                {{form.city}}</label
                                >
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                <label class="col-form-label col-form-label-sm">
                                    <b>State </b> </label
                                >
                                    &nbsp;
                                <label class="col-form-label col-form-label-sm">
                                {{form.state}}</label
                                >
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                <label class="col-form-label col-form-label-sm">
                                <b> ZipCode </b>  </label
                                >
                                    &nbsp;
                                <label class="col-form-label col-form-label-sm">
                                {{form.zipCode}}</label
                                >
                                </div>
                            </div>
                    
                        </div>

                    <div>
                        <br>
                        <h4>Contact Details</h4>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                        <div class="form-group">
                        <label class="col-form-label col-form-label-sm">
                        <b>Email </b> </label
                        >
                            &nbsp;
                        <label class="col-form-label col-form-label-sm">
                        {{form.email}}</label
                        >
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="form-group">
                        <label class="col-form-label col-form-label-sm">
                        <b>Phone Number</b>  </label
                        >
                            &nbsp;
                        <label class="col-form-label col-form-label-sm">
                        {{form.mobileNumber}}</label
                        >
                        </div>
                    </div>
                    </div>
                    <div>
                        <br>
                        <div class="col-lg-12 form-group text-center">
                            <b-button pill variant="outline-primary" size="lg" @click="editForm"> Edit Form</b-button>
                            <b-button pill variant="outline-primary" size="lg" @click="submit"> Submit Form </b-button>
                        </div>
                    </div>  
                    </b-card>
                        </b-card>
                </div>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import { Api } from "@/services/Services";
import AppLogger from "@/utils/AppLogger";
export default {
    data: function () {
        return {
        form:null,
        };
    },

    created: function () {
        console.log(" Final submit call");
        this.form = JSON.parse(localStorage.getItem("dataForm"));
    },

    methods:{

    editForm () {
        console.log("Edit form clicked");
        localStorage.setItem("editFlag","true");
        this.$router.push("/insurance");

    },
    
    submit() {
    
        this.form.insuranceIdImage = localStorage.getItem("passport");
        this.form.personalImage = localStorage.getItem("personalPhoto");
        this.createFormData(this.form);
    },
    

    createFormData(body) {
      Api.postFormData(body)
        .then((response) => {
          if (response.data.responseIdentifier == "Success") {
            console.log("Job Post Response", response);
            alert(response.data.description);
            //localStorage.clear(); //clearing the local storage
            this.$router.push("/insurance");

          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          AppLogger.log(error);
        });
    },
    }
}
</script>

<style>
.wrapper3 {
  background: white;
  height: 100vh;
  width: 95%;
}
</style>