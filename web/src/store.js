import Vue from "vue";
import axios from "axios";

// This represent the application state
export const data = Vue.observable({
  builds: null,
  error: false,
});

export const store = {
  update(address) {
    axios
    .get(`${address}/api/builds`)
    .then(response => {
        data.builds = response.data;
        data.error = false;
    })
    .catch(() => {
        data.builds = null;
        data.error = true;
    });
  },
};