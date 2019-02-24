<template>
  <pulse-loader color="black" class="spinner" />
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  components: {
    PulseLoader
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
