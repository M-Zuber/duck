<template>
  <div id="app">
    <section v-if="isLoading">
      <h1>Loading...</h1>
    </section>
    <section v-else>
      <BuildList :builds="allBuilds" />
    </section>
  </div>
</template>

<script>
import BuildList from "./components/BuildList.vue";
import { data, store } from "@/store.js";

export default {
  name: "App",
  components: {
    BuildList
  },
  data() {
    return {
      address: process.env.VUE_APP_MY_DUCK_SERVER,
      docker: process.env.VUE_APP_MY_DUCK_SERVER == '',
      view: this.$route.query.view,
    };
  },
  computed: {
    isLoading() {
      return data.error || data.builds == null;
    },
    allBuilds() {
      if(data.builds == null) {
        return { };
      }
      return data.builds
        .slice()
        .sort((a, b) => (a.started < b.started ? 1 : -1));
    }
  },
  methods: {
  },
  mounted() {
    store.update(this.address);
    setInterval(
      function() {
        store.update(this.address);
      }.bind(this),
      3000
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