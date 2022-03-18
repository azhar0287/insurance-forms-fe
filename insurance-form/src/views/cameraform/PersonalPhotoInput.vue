<template>
    <div>
      <b-card bg-variant="light" text-variant="blue" title="Personal Photo" class="text-center">
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
components: {
    CameraInput,
  },
methods:{
    submit: function () {
      this.$router.push("/insurance-image");
    },
    onPhotoClicked(value) {
      console.log("Phtolicked in parent", value);
      localStorage.setItem("personalPhoto", value);
    }
}

}
</script>

<style>

</style>