import axios from "axios";

export async function placeOrderRemote(orderToPlace) {
    try {
        const response = await axios.post("/order", orderToPlace, {withCredentials : true});
        if (response.status == 401) {
            throw Error("unauthorised");
        }
        else if (response.status == 500) {
            throw Error ("something went wrong");
        }
        else if (response.status == 200 ) {
            return response.data; //contains orderid
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function getOpenOrdersRemote() {
    try {
        const response = await axios.get("/order/user/open", {withCredentials : true});
        if (response.status == 401) {
            throw Error("unauthorised");
        }
        else if (response.status == 500) {
            throw Error ("something went wrong");
        }
        else if (response.status == 200 ) {
            return response.data; //contains orderid
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function getCloseOrdersRemote() {
    try {
        const response = await axios.get("/order/user/close", {withCredentials : true});
        if (response.status == 401) {
            throw Error("unauthorised");
        }
        else if (response.status == 500) {
            throw Error ("something went wrong");
        }
        else if (response.status == 200 ) {
            return response.data; //contains orderid
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function getAllOrdersOpenRemote() {
    try {
        const response = await axios.get("/order/allopen", {withCredentials : true});
        if (response.status == 401) {
            throw Error("unauthorised");
        }
        else if (response.status == 500) {
            throw Error ("something went wrong");
        }
        else if (response.status == 200 ) {
            console.log(response.data);
            return response.data; //contains orders
        }

    }
    catch(error) {
        throw Error(error.message);
    }
}