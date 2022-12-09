export default function OrderItem( { name, image, size, price, qty} ) {
    return (
        <div className="order-item flex justify-between pl-2 pr-4 py-4 mx-auto flex-wrap">
            <div className="flex justify-start w-2/3">
                <img src={image} className="w-[100px]"></img>
                <div className="name-and-size self-center ml-6">
                    <h1 className="font-bold">{name}</h1>
                    <h1 className="text-slate-500">{size}</h1>
                </div>
            </div>


            <div className="quantity-delete self-center flex flex-col space-y-8">
                <div className="quantity p-1 bg-slate-100 rounded-lg">
                    <span>Qty&nbsp;-&nbsp;<span className="font-extrabold"> {qty}</span></span>
                </div>
            </div>
            <span className="self-center font-extrabold w-1/6 text-right">&#8377; {qty*price}</span>
        </div>
    );
}