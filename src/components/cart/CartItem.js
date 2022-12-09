import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { deleteCartItemRemote, updateCartItemRemote } from "../../network/syncCart";


export default function CartItem(props) {

    let { id, image, name, size, qty, price } = props;
    let [quantity, setQuantity] = useState(qty);
    let { dispatch } = useContext(CartContext);

    function qtyChange(event) {
        let { value } = event.target;
        setQuantity(value);

        dispatch({ //update local state
            type: "CHANGE_QTY",
            qty: value,
            id: id
        })

        //sync to remote server
        updateCartItemRemote(id, value)
            .then((status) => {
                console.log("Cart item updated : " + status);
            })
            .catch((err) => {
                console.log("Cart item cannot be updated");
            });

    }


    function deleteCartItem(event) {
        dispatch( // update local state
            {
                type: "REMOVE",
                id: id
            }
        );

        //sync to remote server
        deleteCartItemRemote(id)
            .then((status) => {
                console.log("Cart item deleted : " + status);
            })
            .catch((err) => {
                console.log("Cart item cannot be deleted" + err);
            });

    }

    return (
        <div className="order flex justify-between pl-2 pr-4 py-4 mx-auto flex-wrap">

            <div className="flex justify-start w-2/3">
                <img src={image} className="w-[100px]"></img>
                <div className="name-and-size self-center ml-6">
                    <h1 className="font-bold">{name}</h1>
                    <h1 className="text-slate-500">{size}</h1>
                    <span className="text-color2 underline underline-offset-2 cursor-pointer font-bold" onClick={deleteCartItem}>Delete</span>
                </div>
            </div>


            <div className="quantity-delete self-center flex flex-col space-y-8">
                <div className="quantity p-1 bg-slate-100 rounded-lg">
                    <span>Qty</span>
                    <select className="outline-none bg-slate-100 font-bold" value={quantity} onChange={qtyChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
            </div>

            <span className="self-center font-extrabold w-1/6 text-right">&#8377; {qty * price}</span>
        </div>
    );
}