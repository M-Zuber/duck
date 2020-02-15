<template>
  <div id="app" style="padding:1.5rem;">
    <div class="ui cards">
      <Build />
      <Build />
      <Build />
      <Build />
    </div>
  </div>
</template>

<script>
import Build from "./components/Build.vue";

export default {
  name: "App",
  components: {
    Build
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.header {
  color: #ffffff;
}
</style>