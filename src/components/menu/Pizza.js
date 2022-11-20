import vegpizzas from "../../temp_data/vegpizzas";
import nonVegPizzas from "../../temp_data/non-veg";
import chickenLovers from "../../temp_data/chicken-lovers";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function Pizza(props) {

    const { image, name, prices, id } = props;
    const sizes = Object.keys(prices);

    let [pizzasize, setSize] = useState(sizes[0]);
    let [price, setPrice] = useState(prices[pizzasize]);
    let { dispatch } = useContext(CartContext);

    function selectSize(event) {
        const { value } = event.target;
        setSize(value);
        setPrice(prices[value]);
    }

    function addToCart(){

        const orderItem = {
            id: id+"_"+pizzasize,
            image: image, 
            name: name,
            size: pizzasize,
            price: price,
            qty: 1
        }

        dispatch ( // Add new item to cart
            {
                type: "ADD",
                value: orderItem
            }
        );
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
        </div>

    );
}    