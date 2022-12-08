import React, { useReducer } from "react";
import { addToCartRemote, deleteCartItemRemote, getFromCart, updateCartItemRemote } from "../network/syncCart";

export const CartContext = React.createContext();

export function cartReducer(cartItems, action) {


    //action.type: type of action
    //action.value: entire item object - item to be added 
    //action.qty: new quantity of an cart item
    //action.id: _id of the item to be deleted or modified

    switch (action.type) {
        case "ADD":
            //add newItem to cartItems
            let newItem = action.value;

            // If the item already exists, increase the qty
            let itemExisitng = cartItems.items.get(newItem._id);
            if (itemExisitng) {
                itemExisitng.qty += 1;
            }
            else { // Otherwise add new item
                itemExisitng = newItem;
            }

            cartItems.items.set(newItem._id, itemExisitng);

            //Increase cart size by 1
            cartItems.size += 1;

            //Change total price
            cartItems.totalPrice += newItem.price;

            break;

        case "CHANGE_QTY":
            let cartItem = cartItems.items.get(action.id); //get the existing item
            let newQty = Number(action.qty); //qty to be added
            let oldQty = cartItem.qty; //qty to be deleted
            cartItem.qty = newQty; // set the new quantity
            cartItems.items.set(action.id, cartItem); // write the item object

            cartItems.size += newQty - oldQty; // increase or decrease the size

            cartItems.totalPrice += (newQty - oldQty) * cartItem.price; //Increase the total price

            break;

        case "REMOVE": //remove item from cartItems and subtract the size
            let deletedItem = cartItems.items.get(action.id);
            let deletedQty = deletedItem.qty;

            cartItems.size -= deletedQty;

            cartItems.totalPrice -= deletedQty * deletedItem.price;

            cartItems.items.delete(action.id);

            
            break;

        case "SYNC_FROM_REMOTE":
            //Sync from remote cart data

            //initialise the data
            cartItems.items = new Map();
            cartItems.size = 0;
            cartItems.totalPrice = 0;
            let remoteCartItems = action.value;

            remoteCartItems.forEach((remoteCartItem) => {
                cartItems.items.set(remoteCartItem._id, remoteCartItem); //map new item
                cartItems.size += remoteCartItem.qty; //increase the size
                cartItems.totalPrice += remoteCartItem.qty * remoteCartItem.price; //update total price
            });

            break;
        case "RESET":
            //reset the cart
            cartItems.items = new Map();
            cartItems.size = 0;
            cartItems.totalPrice = 0;
            break;


    }


    return {
        items: new Map(cartItems.items),
        size: cartItems.size,
        totalPrice: cartItems.totalPrice
    };
}

