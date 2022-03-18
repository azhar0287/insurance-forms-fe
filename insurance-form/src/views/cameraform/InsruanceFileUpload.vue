<template>
    <div>
     <b-card bg-variant="light" text-variant="blue" title="Insuranc ID Scan">
      <CameraInput @clicked-photo-content="onPhotoClicked">
      </CameraInput>
       <div class="col-12 form-group text-center">
          <b-button variant="outline-primary"  @click="submit"> Next </b-button>
        </div>
      </b-card>
    </div>
  
</template>

<script>

import CameraInput from "@/components/CameraInput.vue";
export default {
data: function () {
    return {
      cameraOpenFlag: false,
    };
  },
  
  methods:{
    
    onPhotoClicked(value) {
      console.log("Phtolicked in parent", value);
      localStorage.setItem("passport", value);
    },
    submit: function () {
      this.$router.push("/form-view");
    },
  },
  
  components: {
    CameraInput,
  },
}
</script>

<style>

</style>