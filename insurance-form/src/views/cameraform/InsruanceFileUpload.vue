<template>
    <div>
     <b-card bg-variant="light" text-variant="blue" title="Insuranc ID Scan">
      <CameraInput @clicked-photo-content="onPhotoClicked" ref="Ref">
      </CameraInput>
       <div class="col-12 form-group text-center" v-if="photoTakenFlag">
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
      photoTakenFlag: false,
      cameraOpenFlag: false,
    };
  },
  
  unmounted: function() {
      this.$refs.Ref.stopCameraStream();
  },

  methods: {
    
    onPhotoClicked(value) {
      this.$refs.Ref.stopCameraStream();
      this.photoTakenFlag = true;
      console.log("Phtolicked in parent", value);
      localStorage.setItem("passport", value);
      
      this.$router.push("/form-view");
  
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