import axios from "axios";
const cartUrl = "/cart";

export async function addToCartRemote(cartItem) {
    try {
        const response = await axios.post(cartUrl, cartItem, { withCredentials: true });
        if (response.status == 401) { //unauthorised
            throw Error("Unauthorised : User not logged in");
        }
        else {
            return response.data.status;
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function updateCartItemRemote(cartItemId, newQty) {

    //response.status is "successful" or "failed"
    try {
        let response = await axios.patch(cartUrl, { id: cartItemId, qty: newQty }, { withCredentials: true });
        if (response.status == 401) { //unauthorised
            throw Error("Unauthorised : User not logged in");
        }
        else {
            return response.data.status;
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function deleteCartItemRemote(cartItemId) {
   
    //response.status is "successful" or "failed"
    try {
        let response = await axios.delete(cartUrl, {data : {id : cartItemId}});
        if (response.status == 401) { //unauthorised
            throw Error("Unauthorised : User not logged in");
        }
        else {
            return response.data.status;
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function deleteAllCartItemsRemote() {
    try {
        let response = await axios.delete(cartUrl + "/all");
        if (response.status == 401) { //unauthorised
            throw Error("Unauthorised : User not logged in");
        }
        else  if (response.status == 500) {
            throw Error("something went wrong : cart items not deleted");
        }
        else if (response.status == 200) {
            console.log("All cart items deleted successfully");
        }
    }
    catch (err) {
        throw Error(err.message);
    }
}

export async function getFromCart() {
    try {
        let response = await axios.get(cartUrl, {withCredentials : true});
        if (response.status == 401) { //unauthorised
            throw Error("Unauthorised : User not logged in");
        }
        else {
            return response.data;
        }
    }
    catch (err) {
        throw Error(err);
    }
}