<template>
  <div class="ui stackable cards">
    <Build v-for="build in builds" :key="build.id" :build="build" />
  </div>
</template>

<script>
import Build from "./Build.vue";

export default {
  props: ["builds"],
  components: {
    Build
  }
};
</script>