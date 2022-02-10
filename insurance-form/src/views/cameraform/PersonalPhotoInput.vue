<template>
    <div>
        <CameraInput @clicked-photo-content="onPhotoClicked">
        </CameraInput>
       <div class="col-12 form-group text-center">
          <b-button variant="outline-primary"  @click="submit"> Next Form</b-button>
        </div>

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
      this.$router.push("/cardImage");
    },
    onPhotoClicked(value) {
      console.log("Phtolicked in parent", value);
    }
}

}
</script>

<style>

</style>