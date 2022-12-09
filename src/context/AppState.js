import { orderReducer, OrderContext } from "./OrderContext";
import { CartContext, cartReducer } from "./CartContext";
import { useReducer } from "react";
import { UserContext, userReducer } from "./UserContext";

export default function AppState({ children }) {
    let [orderItems, orderDispatch] = useReducer(orderReducer, []); //from OrderContext

    let [userState, userDispatch] = useReducer(userReducer, { email : "", name : "", loggedin : false }); //from UserCOntext

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
        <UserContext.Provider value={ {userState, userDispatch} }>
            <OrderContext.Provider value={{ orderItems, orderDispatch }}>
                <CartContext.Provider value={{ cartItems, dispatch }}>
                    {children}
                </CartContext.Provider>
            </OrderContext.Provider>
        </UserContext.Provider>
    );
}