import { useQuery } from "@tanstack/react-query";
import { useEffect, useReducer, useState } from "react";
import { getAllOrdersOpenRemote } from "../../network/syncOrder";
import OrderDetailPreview from "../orders/OrderDetailPreview";

function orderReducer(selection, action) {
    console.log(action);
}

export default function Admin() {

    let { data: openOrders, isSuccess: openOrdersFetched } = useQuery(["allorders"], getAllOrdersOpenRemote);
    let [selection, setSelection] = useState({ status: "123", selectedOrders: [] }); //to show orders based on selection

    let [allorders, ordersDispatch] = useReducer(orderReducer,
        {
            ordersPlaced: new Map(),
            ordersPreparing: new Map(),
            ordersOutForDelivery: new Map()
        }
    )

    //do after getting openorders from server
    useEffect(() => {
        if (openOrdersFetched) {
            openOrders.forEach((openorder) => {
                let action = { type: "ADD", value: openorder };
                ordersDispatch(action);
            });
        }
    }, [openOrdersFetched])

    function handleSelection(event) {
        let { id } = event.target;
        switch (id) {
            case "123":
                setSelection({ status: "123" });
                return;
            case "1":
                setSelection({ status: "1" });
                return;
            case "2":
                setSelection({ status: "2" });
                return;
            case "3":
                setSelection({ status: "3" });
                return;
            case "4":
                setSelection({ status: "4" });
                return;
        }
    }

    return (
        <div className=" bg-color1 h-[90vh]">
            <div className="w-3/4 flex mx-auto justify-around font-bold">
                <span className={selection.status === "123" ? `text-color2 p-4 cursor-pointer` : `text-black p-4 cursor-pointer`}
                    id="123" onClick={handleSelection}>All open orders</span>
                <span className={selection.status === "1" ? `text-color2 p-4 cursor-pointer` : `text-black p-4 cursor-pointer`}
                    id="1" onClick={handleSelection}>Order placed</span>
                <span className={selection.status === "2" ? `text-color2 p-4 cursor-pointer` : `text-black p-4 cursor-pointer`}
                    id="2" onClick={handleSelection}>Orders preparing</span>
                <span className={selection.status === "3" ? `text-color2 p-4 cursor-pointer` : `text-black p-4 cursor-pointer`}
                    id="3" onClick={handleSelection}>Out for delivery</span>
                <span className={selection.status === "4" ? `text-color2 p-4 cursor-pointer` : `text-black p-4 cursor-pointer`}
                    id="4" onClick={handleSelection}>Closed orders</span>
            </div>
            <div className="h-[80vh] overflow-y-scroll">
                <table className="ordertable mx-auto w-3/4 table-fixed">
                    <tr className="heading bg-color2 font-bold text-white sticky top-0">
                        <td className="p-2 w-[10%] border-[1px] border-white border-l-color2">Order Date</td>
                        <td className="p-2 w-[10%] border-[1px] border-white">Placed At</td>
                        <td className="p-2 w-[10%] border-[1px] border-white">Order Id</td>
                        <td className="p-2 w-[10%] border-[1px] border-white">Customer</td>
                        <td className="p-2 w-[10%] border-[1px] border-white">Phone No</td>
                        <td className="p-2 w-[20%] border-[1px] border-white">Address</td>
                        <td className="p-2 w-[10%] border-[1px] border-white border-r-color2">Status</td>
                    </tr>
                </table>
            </div>


        </div>
    );
}