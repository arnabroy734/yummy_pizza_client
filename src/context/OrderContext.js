import React, { useReducer } from "react";

export const OrderContext = React.createContext();


export function orderReducer(orderItems, action){
    switch(action.type) {
        case "ADD":
            let newOrder = action.value;
            orderItems.push(newOrder);
            return [...orderItems]
        case "RESET" : 
            return [];
    }
}

