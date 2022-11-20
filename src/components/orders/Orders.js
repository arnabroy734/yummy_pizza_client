
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import OrderSummary from "./OrderSummary"

export default function Orders() {

    let { orderItems } = useContext(OrderContext);
    console.log(orderItems)

    return (
        <div className="order-summary bg-color1 min-h-[90vh]">
            <ul className="types-of-orders flex justify-around py-4 font-bold md:justify-end">
                <li className=" active:underline active:underline-offset-2 active:text-color2 px-8 cursor-pointer">Open Orders</li>
                <li className=" active:underline active:underline-offset-2 active:text-color2 px-8 cursor-pointer">Closed Orders</li>
            </ul>

            <ul className="list-of-orders flex flex-wrap justify-between md:px-4">

                {orderItems.map((order) =>
                    <OrderSummary
                        orderId={order.id}
                        orderDate={order.orderTime.toDateString()}
                        orderTime={order.orderTime.toLocaleTimeString()}
                        totalItems={order.totalItems}
                    />
                )}


            </ul>
        </div>
    );
}