
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import { getCloseOrdersRemote, getOpenOrdersRemote } from "../../network/syncOrder";
import OrderDetailPreview from "./OrderDetailPreview";
import OrderSummary from "./OrderSummary"

export default function Orders() {

    // let { orderItems } = useContext(OrderContext);
    let [showOrders, setOrders] = useState("open");

    let openOrderQuery = useQuery(["openorders"], getOpenOrdersRemote, {staleTime : Infinity});
    let closeOrderQuery = useQuery(["closedorders"], getCloseOrdersRemote, { staleTime: Infinity });

    function getLocalDate(orderTime) {
        return new Date(orderTime).toLocaleDateString("en", { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function getLocalTime(orderTime) {
        return new Date(orderTime).toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit" });
    }

   

    return (
        <div className="order-summary bg-color1 min-h-[90vh]">
            <ul className="types-of-orders flex justify-around py-4 font-bold md:justify-end">
                <li className={showOrders==="open"? `text-color2 font-bold px-8 cursor-pointer`: `text-black font-bold px-8 cursor-pointer`}
                    onClick={() => setOrders("open")}>
                    Open Orders
                </li>
                <li className={showOrders==="close"? `text-color2 font-bold px-8 cursor-pointer`: `text-black font-bold px-8 cursor-pointer`}
                    onClick={() => setOrders("close")} >
                    Closed Orders
                </li>
            </ul>

            {showOrders === "open" ?
                <ul className="list-of-orders flex flex-wrap justify-between md:px-4">
                    {openOrderQuery.isSuccess ?
                        openOrderQuery.data.map((order) =>
                            <OrderSummary
                                orderId={order._id}
                                orderDate={getLocalDate(order.orderTime)}
                                orderTime={getLocalTime(order.orderTime)}
                                totalItems={order.totalItems}
                                orderStatus={order.orderStatus}
                                orderItems={order.orderItems}
                                address={order.address}
                                phone={order.phone}
                                orderPrice={order.orderPrice}
                            />
                        )
                        : ""
                    }
                </ul> : ""
            }

            {showOrders === "close" ?
                <ul className="list-of-orders flex flex-wrap justify-between md:px-4">
                    {closeOrderQuery.isSuccess ?
                        closeOrderQuery.data.map((order) =>
                            <OrderSummary
                                orderId={order._id}
                                orderDate={getLocalDate(order.orderTime)}
                                orderTime={getLocalTime(order.orderTime)}
                                totalItems={order.totalItems}
                            />
                        )
                        : ""
                    }
                </ul> : ""
            }
        </div>
    );
}