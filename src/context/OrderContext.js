import React, { useReducer } from "react";

export const OrderContext = React.createContext();


export function orderReducer(orderItems, action){
    switch(action.type) {
        case "ADD":
            let newOrder = action.value;
            orderItems.push(newOrder);
            return [...orderItems]
    }
}

// export default function OrderState({ children }) {

//     let [orderItems, orderDispatch] = useReducer(
//         orderReducer, []
//     );

//     return (
//         <OrderContext.Provider value={{ orderItems, orderDispatch }}>
//             {children}
//         </OrderContext.Provider>
//     );
// }