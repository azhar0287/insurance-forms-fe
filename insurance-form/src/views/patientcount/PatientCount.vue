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


                        <b-card bg-variant="light" text-variant="blue" title="Dashboard">
                              <div>
                                <b-table striped hover :items="items" :fields="fields"></b-table>
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
  export default {
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age_p',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<style>

</style>