<template>
  <div class="ui card" style="margin-right: 1.0rem;">
    <div class="content">
      <div class="header ">
        <span>Build Windows</span>
      </div>
      <div class="meta">
        <span class="category">Cake</span>
      </div>
      <div class="description">
        <div style="margin-top: 1.0rem;">
          <i class="check circle icon" style="opacity: 0.8; margin-right: 0.7rem;"></i>
          <span>Build 0.37.0-alpha.24</span>
        </div>
        <div style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
          <i class="tag icon" style="opacity: 0.8;margin-right: 0.7rem;"></i>
          <span>regs/heads/develop</span>
        </div>
      </div>
    </div>
    <div class="extra content">
      <div class="ui active mini inline inverted loader">&nbsp;</div>
      <span style="margin-left: 0.5rem;">Succeded 3 days ago</span>
      <span class="right floated">
        <ProviderIcon />
      </span>
    </div>
  </div>
</template>

<script>
import ProviderIcon from "./ProviderIcon.vue";

export default {
  components: {
    ProviderIcon
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>


<style scoped>
.ui.card {
  background-color: #63b567 !important;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.20);
}

.ui.card > .content > .description > .icon {
    padding-right: 55px;
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
.ui.card > .extra {
  color: #ffffff !important;
}
</style>