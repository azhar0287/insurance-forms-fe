<template>
    <div class="">
        <form>
            <div class="row form-class">
                <div class="form-group">
                    <br>
                    <div class="col-lg-12">
                        <b-overlay
                            id="overlay-background"
                            :show = "show"
                            :variant="variant"
                            :opacity="opacity"
                            :blur="blur"
                            rounded="md"
                            >
                        <b-card bg-variant="light" text-variant="blue" title="Dashboard">
                            <br>
                            <b-card bg-variant="light" text-variant="blue" title="">
                                <div class="col-md-6">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Daily counter</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                     {{dailyCount}}</label
                                    >
                                    </div>
                                </div>
                                
                            </b-card>
                            
                            <br>
                            
                            <b-card bg-variant="light" text-variant="blue" title="">
                                <div class="col-md-6">
                                    <div class="form-group">
                                    <label class="col-form-label col-form-label-sm">
                                        <b>Weekly counter</b> </label
                                    >
                                    &nbsp;
                                    <label class="col-form-label col-form-label-sm">
                                     {{weeklyCount}}</label
                                    >
                                    </div>
                                </div>
                            </b-card>
                           
                           <div>
                                <br>
                                <div class="col-lg-12 form-group text-center">
                                    <b-button pill variant="outline-primary" size="lg" @click="refresh"> Refresh Stats</b-button>
                                    <b-button pill variant="outline-primary" size="lg" @click="homeButtonClicked"> BackTo Home</b-button>
                                </div>
                            </div>  

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
        dailyCount:10,
        weeklyCount:100,
        show: false
        };
    },

    created: function () {
        console.log(" Getting order statistics");
        this.getOrderStatistics();
        
    },

    methods: {
        getOrderStatistics() {
            Api.getOrderStats()
            .then((response) => {
            if (response.data.responseIdentifier == "Success") {
                console.log("Create Form Response", response);
                this.show = false;
            } else {
                console.log("Error");
            }
            })
            .catch((error) => {
            AppLogger.log(error);
            });
        },
        
        homeButtonClicked () {
            this.$router.push("/insurance");
        },

        refresh() {
            this.show = true;
            this.getOrderStatistics();

        }


    },
    
}
</script>

<style>

</style>