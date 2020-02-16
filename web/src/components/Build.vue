<template>
  <div class="ui card" style>
    <div class="content">
      <!-- Project -->
      <div class="header">
        <span style="padding-right:32px;">{{ build.project }}</span>
        <BuildIcon class="right floated" />
      </div>
      <!-- Definition -->
      <div class="meta">
        <span style="padding-right:32px;">{{ build.build }}</span>
      </div>
      <div class="description">
        <!-- Build number -->
        <div class="item">
          <i class="check circle icon"></i>
          <span>Build {{ build.buildNumber }}</span>
        </div>
        <!-- Branch -->
        <div class="item">
          <i class="tag icon"></i>
          <span>{{ build.branch }}</span>
        </div>
      </div>
    </div>
    <div class="extra content">
      <!-- Spinner -->
      <div class="ui active mini inline inverted loader">&nbsp;</div>
      <!-- Build state -->
      <span style="margin-left: 0.5rem;">{{ build.status }} {{ build.finished | moment("from", "now") }}</span>
    </div>
  </div>
</template>

<script>
import BuildIcon from "./BuildIcon.vue";

export default {
  props: ["build"],
  components: {
    BuildIcon
  }
};
</script>

<style scoped>
.ui.card {
  margin-right: 1rem !important;
  background-color: #63b567 !important;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15) !important;
}
.ui.card:hover {
  background-color: #69bf6c !important;
  cursor: pointer;
}
.ui.card > .content > .header {
  color: #ffffff !important;
}
.ui.card > .content > .meta {
  color: #ffffff !important;
  padding-bottom: 0.4rem;
  opacity: 0.7;
}
.ui.card > .content > .description {
  color: #ffffff !important;
}
.ui.card > .content > .description > .item {
  margin-bottom: 0.5rem;
}
.ui.card > .content > .description > .item > .icon {
  opacity: 0.8;
  margin-right: 0.7rem;
}
.ui.card > .extra {
  color: #ffffff !important;
}
</style>