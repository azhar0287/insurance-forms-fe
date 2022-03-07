<template>
  <div>
        <form>
            <div class="row form-class">
                <div class="form-group">
                    <br>
                    <div class="col-lg-12">
                        <b-overlay
                            id="overlay-background"
                            :show = "show"
                            rounded="md">
                        <b-card bg-variant="light" text-variant="blue" title="Daily Patient Count">
                        <div>
                          <b-table striped hover :items="items" :fields="fields"></b-table>
                          <br>
                          <!-- <div class="col-lg-12 form-group text-center">
                              <b-button pill variant="outline-primary" size="lg" @click="refresh"> Refresh Stats</b-button>
                              <b-button pill variant="outline-primary" size="lg" @click="homeButtonClicked"> BackTo Home</b-button>
                          </div> -->
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
    data() {
      return {
        show:  false,
        fields: [
        {
          key: 'patientNo',
          label:'Patient#',
          sortable: true
        },
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'dob',
          sortable: false
        },
        {
          key: 'gender',
          label:'Sex',
          sortable: false
        },
        {
          key: 'phoneNumber',
          sortable: false
        },
        {
          key: 'email',
          sortable: false
        },
        {
          key: 'collectionDate',
          label:'Collection Date',
          sortable: true
        },
         {
          key: 'collectionTime',
          label:'Collection Time',
          sortable: true
        },
      ],
      items: []
    }
  },  
    created: function () {
        console.log(" Getting order statistics");
        this.show = true;
        this.getOrderStatistics();
    },

    methods: {
      getOrderStatistics() {
          Api.getOrderStatsTable()
          .then((response) => {
            console.log("Response ", response); 
            this.show = false;
            this.items = response.data;
          })
          .catch((error) => {
          AppLogger.log(error);
          });
        },
      }
    }
</script>

<style>

</style>