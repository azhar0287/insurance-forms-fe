<template>
    <div>
      <b-card bg-variant="light" text-variant="blue" title="Personal Photo" class="text-center">
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
  components: {
    CameraInput,
  },


  unmounted: function() {
      this.$refs.Ref.stopCameraStream();
  },

  methods: {
  
    submit: function () {
      this.stopCamera();
      this.$router.push("/insurance-image");
    },
    onPhotoClicked(value) {
      this.$refs.Ref.stopCameraStream();
      this.photoTakenFlag = true;
      console.log("Phtolicked in parent", value);
      localStorage.setItem("personalPhoto", value);
      this.$router.push("/insurance-image");
    }
  }
}

</script>

<style>

</style>