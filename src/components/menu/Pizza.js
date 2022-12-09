import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import  { addToCartRemote } from "../../network/syncCart";
import { Alert, Snackbar } from "@mui/material";


export default function Pizza(props) {

    const { image, name, prices, id } = props;
    const sizes = Object.keys(prices);

    let [pizzasize, setSize] = useState(sizes[0]);
    let [price, setPrice] = useState(prices[pizzasize]);
    let { dispatch } = useContext(CartContext);
    let [showSnack, setSnackVisibility] = useState(false);

    function selectSize(event) {
        const { value } = event.target;
        setSize(value);
        setPrice(prices[value]);
    }

    function handleCloseSnack() {
        setSnackVisibility(false);
    }

    function addToCart() {

        const orderItem = {
            _id: id + "_" + pizzasize,
            image: image,
            name: name,
            size: pizzasize,
            price: price,
            qty: 1
        }

        dispatch( // Add new item to cart - update local state
            {
                type: "ADD",
                value: orderItem
            }
        );


        //sync to remote server
        addToCartRemote(orderItem)
            .then((status) => {
                setSnackVisibility(true);
            }).catch((err) => {
                console.log(err + " Occured : Cart item cannot be added");
            });
    }

    return (


        <div className="pizza w-fit text-center shadow-md p-4 my-10 md:mx-10">
            <img className="pizza-img w-[264px]" src={image}></img>
            <h1 className="pizza-name mt-4 text-lg font-bold">{name}</h1>
            <select onChange={selectSize} value={pizzasize} className="size-select outline-none mt-4 p-1 bg-slate-100 rounded-2xl cursor-pointer">
                {sizes.map((size, index) => {
                    return (
                        <option value={size} className="border-none" key={index}>{size}</option>
                    );
                })}
            </select>

            <div className="flex justify-around mt-4">
                <span className="text-lg font-bold self-center">&#8377; {price} </span>
                <button className="py-1 px-4 text-color2 font-bold border-solid
                 border-color2 border-2 rounded-3xl hover:bg-color2 hover:text-white" onClick={addToCart}>
                    + Add
                </button>
            </div>

            <Snackbar
                autoHideDuration={1000}
                onClose={handleCloseSnack}
                open={showSnack}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}>
                <Alert severity="success">
                    New item added to cart
                </Alert>
            </Snackbar>
        </div>

    );
}    