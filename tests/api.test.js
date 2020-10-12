const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();
const { API_URL } = process.env;

test('test login ', () => { 
    
    
    return axios.get(`${API_URL}/authenticate`)
    .then(resp => resp.data)
    .then(resp => {
        console.log(resp[0]);

        expect(resp[0].rego).toEqual("3YT4UI");

    })});
