import axios from "axios";

export const api = {
    loadData(address) {
        let result = {
            builds: null,
            errored: false,
        }

        // Get the data.
        axios.get(`${address}/api/builds`)
            .then(response => {
                result.builds = response.data;
                result.errored = false;
            })
            .catch(() => {
                result.errored = true;
            });

        return result
    }
}