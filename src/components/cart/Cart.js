import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import cartEmpty from "./empty-cart.png";
import cartBlack from "./cart-black.png";
import vegpizzas from "../../temp_data/vegpizzas";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
import { OrderContext } from "../../context/OrderContext";



export default function Cart() {

    let { cartItems } = useContext(CartContext);
    let { orderDispatch } = useContext(OrderContext);

    let [orderDetails, setOrderDetails] = useState({address: "", phone: ""});

    //function to place order
    function placeOrder() {
        let order = {
            id : "testId232323",
            orderTime: new Date(),
            phone: orderDetails.phone,
            address: orderDetails.address,
            orderPrice: cartItems.totalPrice,
            totalItems: cartItems.size,
            orderItems: Array.from(cartItems.items.values()),
            orderStatus : 0
        }

        //Add to OrderState
        orderDispatch (
            {
                type: "ADD",
                value: order
            }
        );
    }

    //function to handle input
    function changeOrderDetails(event){
        let {id, value} = event.target;

        setOrderDetails((state) => {
            return ({...state, [id]: value})
        });
    }



    return (
        <div className="cart-page">

            {/* Empty Cart            */}
            <div className={cartItems.size == 0 ? `block cart-empty bg-color1 h-[90vh] text-center` : `hidden`}>
                <h1 className="text-4xl font-extrabold pt-14 pb-4">Cart Empty</h1>
                <p className="text-slate-400">You probably haven't ordered pizza yet</p>
                <p className="text-slate-400">To order a pizza go to the menu page</p>
                <img src={cartEmpty} className="w-[500px] mx-auto mt-20"></img>
                <button className="bg-color2 text-white text-base rounded-2xl py-2 px-6 mt-14">
                    <Link to="/menu">
                        Order Now
                    </Link>
                </button>
            </div>

            {/* Non Empty Cart */}
            <div className={cartItems.size != 0 ? `mx-auto md:w-3/4 lg:w-1/2` : `hidden`}>
                <div className="order-summary flex mt-2">
                    <img src={cartBlack} className="pl-4"></img>
                    <h1 className="px-4 self-center text-lg font-bold">Order Summary</h1>
                </div>
                <hr className="w-[99%] mx-auto mt-4"></hr>
                <ul className="ordered-items max-h-[55vh]  overflow-y-scroll">
                    {Array.from(cartItems.items.values()).map((cartItem, index) =>
                        <li key={cartItem.id}>
                            <CartItem
                                id={cartItem.id}
                                image={cartItem.image}
                                name={cartItem.name}
                                size={cartItem.size}
                                qty={cartItem.qty}
                                price={cartItem.price}
                            />
                        </li>
                    )}

                </ul>
                <span className="block text-right pt-6 pr-8">
                    <span className="text-2xl font-bold">Total Amount:</span>
                    <span className="pl-4 text-color2 font-extrabold text-2xl">&#8377;{cartItems.totalPrice}</span>
                </span>
                <div className="address-and-ph-number flex flex-col px-8">
                    <input placeholder="Your Address" type="text" className="p-2 mt-4 mb-2 rounded-md outline-1 self-end 
                    w-full md:w-1/2 outline-color2 border-[1px] border-slate-700"
                        id="address"
                        value={orderDetails.address}
                        onChange={changeOrderDetails}></input>
                    <input placeholder="Your Phoner Number" type="text" maxLength={10} className="p-2 outline-1 rounded-md self-end
                    w-full md:w-1/2 outline-color2 border-[1px] border-slate-700"
                        id="phone"
                        value={orderDetails.phone}
                        onChange={changeOrderDetails}></input>
                </div>
                <div className="text-end pr-8 pb-4">
                    <button className="bg-color2 text-white text-base rounded-2xl py-2 px-6 mt-4" onClick={placeOrder}>Place Order</button>
                </div>
            </div>
        </div >
    );
}