import logo from "./logo.png";
import cart from "./cart.png";
import hamburger from "./hamburger.svg";
import "./navbar.css";
import close from "./close.svg";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { getUserInfo } from "../../network/getUserInfo";
import { logOutUser } from "../../network/registerUser";
import { addToCartRemote, getFromCart } from "../../network/syncCart";
// import { getAllOrdersRemote } from "../../network/syncOrder";
import { OrderContext } from "../../context/OrderContext";
import { useMutation, useQuery } from "@tanstack/react-query";


export default function NavBar() {

    let { userState, userDispatch } = useContext(UserContext); //to get details of user
    let [menuExpanded, setMenuExpand] = useState(false);
    let { cartItems, dispatch } = useContext(CartContext); //cartItems is a Map object
    let { orderDispatch } = useContext(OrderContext);


    function menuOpenClose() {
        setMenuExpand(state => !state);
    }

    //after lodaing the app - 
    //Check user is loggin in or not
    //If logged in  - 
    //1. Update name and email
    let userQuery = useQuery(["user"], getUserInfo);

    useEffect(() => {
        //get user info
        if (userQuery.isSuccess) {
            userDispatch({
                type: "SET",
                user: { ...userQuery.data, loggedin: true }
            });
            
        }
    }, [userQuery.isSuccess]);

    //If the user is loggin in
    //2. Push items from cart if there are any
    //3. Update cart items from server 

    //It will push all existing cart items to user account  - wait  - and then get cartItems from remote 
    async function syncCartItems() {
        try {
            //Push cart items first
            let promiseList = [];
            let cartItemsArray = Array.from(cartItems.items.values());
            cartItemsArray.forEach((cartItem) => {
                let promise = addToCartRemote(cartItem);
                promiseList.push(promise);
            })
            await Promise.all(promiseList);

            //Now get cart from remote
            let items = await getFromCart();
            return items;
        }
        catch (err) {
            throw Error(err);
        }
    }

    let syncCartMutation = useMutation(
        {
            mutationFn: syncCartItems,
            onSuccess : (data, variables, context) => {
                console.log(data);
                dispatch(
                    {
                        type: "SYNC_FROM_REMOTE",
                        value: data
                    }
                )
            }
        }
    )

    useEffect(()=> {
        syncCartMutation.mutate(); // sync cart items
    }, [userState])


    //to logout current user
    function logout() {
        logOutUser()
            .then((status) => {
                if (status) {
                    userDispatch({ //set logged in status false
                        type: "SET",
                        user: {
                            email: "",
                            name: "",
                            loggedin: false
                        }
                    });
                    dispatch( //Reset the cart - local
                        {
                            type: "RESET"
                        }
                    );
                    orderDispatch({ //reset the orders - local
                        type: "RESET"
                    });
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="navbar-lg navbar">
            <img src={menuExpanded ? close : hamburger} className="hamburger" onClick={menuOpenClose}></img>
            <Link to="/" className="flex">
                <img src={logo} className="logo"></img>
                <span className="font-bold self-center pl-4">{userState.name}</span>
            </Link>
            <div className="flex">
                <ul className={`menubar-lg menubar ${menuExpanded ? "visible" : "invisible"}`}>
                    <li className="menu-item-lg menu-item"><Link to="/menu">Menu</Link></li>
                    <li className="menu-item-lg menu-item"><Link to="/orders">Orders</Link></li>
                    <li className={userState.loggedin ? `hidden` : `list-item ` + `menu-item-lg menu-item`}><Link to="/login">Login</Link></li>
                    <li className={!userState.loggedin ? `hidden` : `list-item ` + `menu-item-lg menu-item`} onClick={logout}>Logout</li>
                </ul>

                <Link to="/cart" className="cart">
                    <span>{cartItems.size}</span>
                    <img src={cart}></img>
                </Link>

            </div>
        </div>
    );
}