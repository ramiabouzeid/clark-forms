const axios = require('axios').default;
export function get(api) {
    return axios.get(api)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
}