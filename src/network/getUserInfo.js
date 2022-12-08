import axios from "axios";

export async function getUserInfo() {
    try {
        const response = await axios.get("/user");
        if (response.status == 401) {//unauthorised request
            throw Error("unauthorized");
        }
        else { // authorised
            const userinfo = response.data;
            return userinfo;
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}