<template>
  <div id="app">
    <transition name="main" mode="out-in">
      <Error v-if="hasError" />
      <BuildList v-else :builds="allBuilds" />
    </transition>
  </div>
</template>

<script>
import BuildList from "./components/BuildList.vue";
import Error from "./Error.vue";
import { data, store } from "@/js/store.js";

export default {
  name: "App",
  components: {
    BuildList,
    Error
  },
  data() {
    return {
      view: this.$route.query.view
    };
  },
  computed: {
    isLoading() {
      return data.loading;
    },
    hasError() {
      return data.error;
    },
    allBuilds() {
      if (data.builds == null) {
        return {};
      }
      return data.builds
        .slice()
        .sort((a, b) => (a.started < b.started ? 1 : -1))
        .sort((a, b) =>
          a.status != "Failed" || b.status == "Failed" ? 1 : -1
        );
    }
  },
  mounting() {
    store.update();
  },
  mounted() {
    setInterval(
      function() {
        store.update();
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

#app .main-enter-active,
#app .main-leave-active {
  transition: opacity 0.6s ease;
}

#app .main-enter,
#app .main-leave-to {
  opacity: 0;
}
</style>