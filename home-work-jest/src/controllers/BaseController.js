const axios = require('axios');


class BaseController {

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://bookstore.toolsqa.com',
            timeout: 1000,
            validateStatus: function (status) {
                return true;
            },
            headers: {'Content-Type': 'application/json'}

        });
    }
}

module.exports = BaseController;