<template>
    <div>
        <CameraInput>
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
}
</script>

<style>

</style>