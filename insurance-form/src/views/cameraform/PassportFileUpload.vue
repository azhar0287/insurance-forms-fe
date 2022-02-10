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
  
  methods:{
    onPhotoClicked(value) {
    console.log("Phtolicked in parent", value);
    } 
  },
  
  components: {
    CameraInput,
  },
}
</script>

<style>

</style>