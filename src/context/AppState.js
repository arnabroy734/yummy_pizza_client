import { orderReducer, OrderContext } from "./OrderContext";
import { CartContext, cartReducer } from "./CartContext";
import { useReducer } from "react";

export default function AppState({ children }) {
    let [orderItems, orderDispatch] = useReducer(orderReducer, []); //from OrderContext

    //Cart Context
    let [cartItems, dispatch] = useReducer(
        cartReducer,
        {
            items: new Map(),
            size: 0,
            totalPrice: 0
        }
    );

    return (
        <OrderContext.Provider value={{ orderItems, orderDispatch }}>
            <CartContext.Provider value={{ cartItems, dispatch }}>
                {children}
            </CartContext.Provider>
        </OrderContext.Provider>
    );
}