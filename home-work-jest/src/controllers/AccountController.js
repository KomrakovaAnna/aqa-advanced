const BaseController = require("./BaseController");

class AccountController extends BaseController {
    constructor() {
        super();
    }

    async getAuthToken(userName, password) {

        const response = await this.axiosInstance.post("/Account/v1/GenerateToken", {
            userName,
            password,
        });

        return await response.data.token;
    }

    async isAuthorized(userName, password) {
        const response = await this.axiosInstance.post("/Account/v1/Authorized", {
            userName,
            password,
        });

        return await response;
    }

    async addNewUser(userName, password) {
        const response = await this.axiosInstance.post("/Account/v1/User", {
            userName,
            password,
        });
        return await response;
    }

    async deleteUser(userId, token) {
        const response = await this.axiosInstance.delete(`/Account/v1/User/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
             }
        )
        return await response;
    }
    
}

module.exports = new AccountController();