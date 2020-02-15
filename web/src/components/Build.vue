<template>
  <div class="ui card" style>
    <div class="content">
      <div class="header">
        <span style="padding-right:32px;">Cake</span>
        <ProviderIcon class="right floated" />
      </div>
      <div class="meta">
        <span>Build Windows</span>
      </div>
      <div class="description">
        <div class="item">
          <i class="check circle icon"></i>
          <span>Build 0.37.0-alpha.24</span>
        </div>
        <div class="item">
          <i class="tag icon"></i>
          <span>regs/heads/develop</span>
        </div>
      </div>
    </div>
    <div class="extra content">
      <div class="ui active mini inline inverted loader">&nbsp;</div>
      <span style="margin-left: 0.5rem;">Succeded 3 days ago</span>
    </div>
  </div>
</template>

<script>
import ProviderIcon from "./ProviderIcon.vue";

export default {
  components: {
    ProviderIcon
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