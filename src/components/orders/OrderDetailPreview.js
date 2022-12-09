import { useState } from "react";
import { ReactComponent as CloseImg } from "./close.svg"
import OrderItem from "./OrderItem";

export default function OrderDetailPreview({ showPreview, orderItems, address, phone, orderPrice, orderId }) {

    let [visible, setVisible] = useState(true);

    function setVisibility() {
        // setVisible(!visible);
        showPreview(!visible);
    }

    return (
        <div className={!visible ? `hidden` : `flex fixed inset-0 bg-gray-400 bg-opacity-50 w-screen h-screen`}>
            <div className="order-detail bg-white w-full h-full md:w-3/4 md:h-3/4 self-center mx-auto p-8">
                <div className="flex justify-between">
                    <h1 className="font-extrabold text-lg text-color2 mb-2">Order Id - {orderId}</h1>
                    <CloseImg className="cursor-pointer" onClick={setVisibility} />
                </div>
                <hr></hr>

                <div className="overflow-y-scroll max-h-[75%]">
                    {orderItems.map((item) =>
                        <OrderItem
                            name={item.name}
                            image={item.image}
                            size={item.size}
                            price={item.price}
                            qty={item.qty}
                        />
                    )}

                </div>

                <div className="flex mt-4 justify-between flex-wrap">
                    <div className="address w-full pr-12s mb-4">
                        <p className="font-bold text-color2">Address</p>
                        <p className="font-bold">{address}</p>
                    </div>
                    <div className="phone-no">
                        <p className="font-bold text-color2">Phone No.</p>
                        <p className="font-bold">{phone}</p>
                    </div>

                    <div className="pr-8">
                        <span className="text-lg font-extrabold text-color2">
                            Total&nbsp;&nbsp;&nbsp;
                            <span>&#8377; {orderPrice}</span>
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}