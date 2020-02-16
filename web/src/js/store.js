import Vue from "vue";
import axios from "axios";

// This represent the application state
export const data = Vue.observable({
    server: process.env.VUE_APP_MY_DUCK_SERVER,
    builds: null,
    error: false,
    loading: true,
});

export const store = {
    update() {
        axios
            .get(`${data.server}/api/builds`)
            .then(response => {
                data.builds = response.data;
                data.error = false;
            })
            .catch(() => {
                data.builds = null;
                data.error = true;
            })
            .finally(() => {
                data.loading = false;
            });
    },
};