import orderLogo from "./order-logo.png"
import { ReactComponent as OrderConfirmed } from "./order-confirmed.svg"
import { ReactComponent as Delivered } from "./delivered.svg"
import { ReactComponent as OutForDelivery } from "./out-for-delivery.svg"
import { ReactComponent as Preparing } from "./preparing.svg"
import { useState } from "react"


export default function OrderSummary({orderId, orderDate, orderTime, totalItems}) {


    // Order status: 1. placed  2. preparing  3. out-for-delivery 4. delivered
    let [orderStatus, changeOrderStatus]  = useState(4);


    return (
        <li className="order-card mx-4 bg-white w-full md:w-fit my-8 shadow-lg">
            <h1 className="bg-color2 text-white p-1 font-bold cursor-pointer">ORDER ID - {orderId}</h1>

            <div className="details flex py-4 pr-4">
                <img src={orderLogo} className="w-[80px]  mx-4"></img>

                <div className="flex flex-col justify-between">
                    <h1 className="font-bold">Placed on {orderDate} at {orderTime} </h1>
                    <h1 className="font-extrabold text-sm text-gray-500">Total Items - {totalItems}</h1>
                    <h1 className="text-color2 underline underline-offset-2 font-bold cursor-pointer">Details</h1>
                </div>
            </div>

            <div className="status flex flex-col">

                <div className="order-placed flex justify-start">
                    <OrderConfirmed fill={orderStatus >=1 ? "#ff5818" : "gray"} className="w-[50px] mx-4" />
                    <div className={`${orderStatus >=1 ? "bg-color2" : "bg-gray-500"} h-[8px] w-[8px]  rounded-full self-center`}></div>
                    <p className={`${orderStatus >=1 ? "text-color2" : "text-gray-500"} font-bold self-center mx-4`}>Order Placed</p>
                </div>

                <div className={`${orderStatus >=2 ? "bg-color2" :  "bg-gray-500"  } vertical-line w-[2px] h-[40px]  ml-[84px]`}></div>

                <div className="preparing flex justify-start">
                    <Preparing fill={orderStatus >=2 ? "#ff5818" : "gray"} className="w-[50px] mx-4" />
                    <div className={`${orderStatus >=2 ? "bg-color2" : "bg-gray-500"} h-[8px] w-[8px]  rounded-full self-center`}></div>
                    <p className={`${orderStatus >=2 ? "text-color2" : "text-gray-500"} font-bold self-center mx-4`}>Preparing</p>
                </div>

                <div className={`${orderStatus >=3 ? "bg-color2" :  "bg-gray-500"  } vertical-line w-[2px] h-[40px]  ml-[84px]`}></div>

                <div className="out-for-delivery flex justify-start">
                    <OutForDelivery fill={orderStatus >=3 ? "#ff5818" : "gray"} className="w-[50px] mx-4" />
                    <div className={`${orderStatus >=3 ? "bg-color2" : "bg-gray-500"} h-[8px] w-[8px]  rounded-full self-center`}></div>
                    <p className={`${orderStatus >=3 ? "text-color2" : "text-gray-500"} font-bold self-center mx-4`}>Out for delivery</p>
                </div>

                <div className={`${orderStatus >=4 ? "bg-color2" :  "bg-gray-500"  } vertical-line w-[2px] h-[40px]  ml-[84px]`}></div>


                <div className="delivered flex justify-start mb-4">
                    <Delivered fill={orderStatus >=4 ? "#ff5818" : "gray"} className="w-[50px] mx-4" />
                    <div className={`${orderStatus >=4 ? "bg-color2" : "bg-gray-500"} h-[8px] w-[8px]  rounded-full self-center`}></div>
                    <p className={`${orderStatus >=4 ? "text-color2" : "text-gray-500"} font-bold self-center mx-4`}>Delivered</p>
                </div>
            </div>

        </li>

    );
}