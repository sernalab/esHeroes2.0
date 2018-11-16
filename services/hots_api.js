import axios from 'axios'

const host = 'http://hotsapi.net/api/v1/'

export default {
    getMaps() {
        return axios.get(`${host}/maps`)
            .then(function(response) {
                return response.data.results;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}