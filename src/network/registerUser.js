import axios from 'axios';

//function to register user
export async function registerUser(email, name, password) {
    
    try {
        let response = await axios.post("/register", { username: email, name: name, password: password }, { withCredentials: true });
        if (response.status != 200) {//error occured, so send the error message
            throw Error(response.data.errMessage);
        }

        else {
            return response.data; //userdata sent by server
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

//function to login user
export async function loginUser(email, password) {

    try {
        const response = await axios.post("/login", { username: email, password: password }, { withCredentials: true });
        if (response.status != 200) { //error occured, so send the error message
            throw Error(response.data.errMessage);
        }
        else {
            return response.data; //userdata sent by server
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function logOutUser() {
    try {
        const response = await axios.get("/logout", {withCredentials : true});
        if (response.status == 200) {
            return true;
        }
        else {
            throw Error("Not logged out");
        }

    }
    catch (err) {
        throw Error(err.message);
    }
}