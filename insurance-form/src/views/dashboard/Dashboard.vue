<template>
    <div class="wrapper3">
        <form>
            <div class="row form-class">
                <div class="form-group">
                    <div class="col-sm-3">
                        <div class="form-group"></div>
                    </div>
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

    methods: {
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
            console.log("Create Form Response", response);
            alert(response.data.description);
            //localStorage.clear(); //clearing the local storage
            if(response.data.printDocLink != null) {
                window.open(response.data.marquisPdfLink, "_blank");    
                window.open(response.data.firstToxPdfLink, "_blank");    
                window.open(response.data.firstToxLabelLink, "_blank");
            }
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