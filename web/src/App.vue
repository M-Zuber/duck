<template>
  <div id="app">
    <div v-if="hasError">
      <h1>Error!!!</h1>
    </div>
    <div v-else class="ui stackable cards">
      <Build />
      <Build />
      <Build />
      <Build />
      <Build />
      <Build />
      <Build />
      <Build />
    </div>
  </div>
</template>

<script>
import Build from "./components/Build.vue";
import { api } from "@/utilities/api.js";

export default {
  name: "App",
  components: {
    Build
  },
  data() {
    return {
      address: process.env.VUE_APP_MY_DUCK_SERVER,
      docker: process.env.VUE_APP_MY_DUCK_SERVER == "",
      view: this.$route.query.view,
      data: null,
    };
  },
  computed: {
    hasError() {
      return this.data === null ||
        this.data.errored === true;
    }
  },
  methods: {
  },
  mounted() {
    this.data = api.loadData(this.address);
    setInterval(
      function() {
        this.data = api.loadData(this.address);
      }.bind(this),
      1000
    );
  }
};
</script>

<style scoped>
#app {
  padding: 1.5rem;
}
.header {
  color: #ffffff;
}
.large.text {
   font-size: 4rem;
}
</style>