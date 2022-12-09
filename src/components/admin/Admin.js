import OrderDetailPreview from "../orders/OrderDetailPreview";

export default function Admin() {

    return (
        <div className=" bg-color1 h-[90vh]">
            <div className="w-3/4 flex mx-auto justify-around font-bold">
                <span className="p-4 cursor-pointer">All open orders</span>
                <span className="p-4 cursor-pointer">Order placed</span>
                <span className="p-4 cursor-pointer">Orders preparing</span>
                <span className="p-4 cursor-pointer">Out for delivery</span>
                <span className="p-4 cursor-pointer">Closed orders</span>
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