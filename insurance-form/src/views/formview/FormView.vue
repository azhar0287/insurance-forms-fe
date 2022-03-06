<template>
    <div class="">
        <form>
            <div class="row form-class">
                <div class="form-group">
                    <div class="col-md-6">
                        <div class="form-group"></div>
                    </div>
                    
                    <div>
                        <b-overlay
                        id="overlay-background"
                        :show = "show"
                        rounded="md"
                        >
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
                                <div class="col-sm-3">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Race</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                    {{form.race}}</label
                                    >
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Ethnicity</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                    {{form.ethnicity}}</label
                                    >
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Passport</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                    {{form.passport}}</label
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
                                <b>Email (Optional) </b> </label
                                >
                                    &nbsp;
                                <label class="col-form-label col-form-label-sm">
                                {{form.optionalEmail}}</label
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

                            <div class="col-sm-3">
                                <div class="form-group">
                                <label class="col-form-label col-form-label-sm">
                                <b>Phone Number (Optional) </b>  </label
                                >
                                    &nbsp;
                                <label class="col-form-label col-form-label-sm">
                                {{form.optionalMobile}}</label
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
                    </b-overlay>
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
            show:false
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
        this.$router.push("/create-order");
    },
    
    submit() {
        this.show = true;
        this.form.insuranceIdImage = localStorage.getItem("passport");
        this.form.personalImage = localStorage.getItem("personalPhoto");
        
        this.createFormDataMarquis(this.form);
        this.$router.push("/create-order");
        this.createFormDataFirstox(this.form);
        
        this.show = false;
    },
    
    createFormDataFirstox(body) {
      Api.postFormDataFirstox(body)
        .then((response) => {
          if (response.data.responseIdentifier == "Success") {
            console.log("Create Form Response", response);
            //localStorage.clear(); //clearing the local storage
            if(response.data.printDocLink.firstToxPdfLink != null && response.data.printDocLink.pdf != null) {
                window.open(response.data.printDocLink.firstToxPdfLink, "_blank");    
                this.openLabel(response.data.printDocLink.pdf);
            } 
            else {
                console.log("Error");
                alert("Firstox has not submitted");
          }
        }
        })
        .catch((error) => {
          AppLogger.log(error);
        });
    },

    createFormDataMarquis(body) {
      Api.postFormDataMarquis(body)
        .then((response) => {
          if (response.data.responseIdentifier == "Success") {
            console.log("Create Form Response marquis", response);
            //alert(response.data.description);
            localStorage.clear(); //clearing the local storage
            if(response.data.printDocLink != null) {
                window.open(response.data.printDocLink.marquisPdfLink, "_blank");             
            }
            this.show = false;
          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          AppLogger.log(error);
        });
    },
    
    openLabel(data) {
        let popupWin = null;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=700,width=1000;');
        let fileContents = "data:application/pdf;base64," + data;
        console.log("file", fileContents);
        popupWin.document.write(`
            <html>
                <head>
                    <!--title>Print tab</title-->
                    <style>
                        #buttons{display:none;}
                            body {
                            margin: 0;
                            font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #212529;
                            text-align: left;
                            background-color: #fff;
                        }

                        button, meter, progress {
                            -webkit-writing-mode: horizontal-tb !important;
                        }


                        input, textarea, select, button {
                            text-rendering: auto;
                            color: initial;
                            letter-spacing: normal;
                            word-spacing: normal;
                            text-transform: none;
                            text-indent: 0px;
                            text-shadow: none;
                            display: inline-block;
                            text-align: start;
                            margin: 0em;
                            font: 400 13.3333px Arial;
                        }

                        input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
                            align-items: flex-start;
                            text-align: center;
                            cursor: default;
                            color: buttontext;
                            background-color: buttonface;
                            box-sizing: border-box;
                            padding: 2px 6px 3px;
                            border-width: 2px;
                            border-style: outset;
                            border-color: buttonface;
                            border-image: initial;
                        }

                        input, button, select, optgroup, textarea {
                            margin: 0;
                            font-family: inherit;
                            font-size: inherit;
                            line-height: inherit;
                        }

                        button, select {
                            text-transform: none;
                        }

                        .btn {
                            display: inline-block;
                            font-weight: 400;
                            text-align: center;
                            white-space: nowrap;
                            vertical-align: middle;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            border: 1px solid transparent;
                            padding: 0.375rem 0.75rem;
                            font-size: 1rem;
                            line-height: 1.5;
                            border-radius: 0.25rem;
                            transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                        }

                        .btn-outline-primary {
                            color: #007bff;
                            background-color: transparent;
                            background-image: none;
                            border-color: #007bff;
                        }

                        .btn-outline-primary {
                            color: #ffffff;
                            border-color: #d03232;
                            background-color: #d03232;
                        }

                        element.style {
                        }
                        <style>.fa {
                            display: inline-block;
                            font: normal normal normal 14px/1 FontAwesome;
                            font-size: inherit;
                            text-rendering: auto;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                        }</style>

                        <style>*, *::before, *::after {
                            box-sizing: border-box;
                        }
                        Style Attribute {
                            cursor: pointer;
                        }

                        .btn, .form-control {
                            padding: 0.25rem 0.5rem;
                            font-size: 0.875rem;
                            line-height: 1.5;
                            border-radius: 0.3rem;
                            margin: 15px;
                            margin-right: 23px;
                        }</style>

                    </style>
                </head>
                <body onload="">
                    <div style="text-align:right;" >
                        <a href="${fileContents}" download="${document.documentName}"><button class="btn btn-sm btn-outline-primary">Download</button></a>
                    </div>
                    <br>
                    <iframe src='${fileContents}'  style="min-width: 100%;height: 100%;" ></iframe>
                </body>
            </html>`
            ); 
        }
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