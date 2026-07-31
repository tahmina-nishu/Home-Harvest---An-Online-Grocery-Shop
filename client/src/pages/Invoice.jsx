import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Invoice = () => {

    const { orderId } = useParams();

    const { axios, currency, navigate } = useAppContext();

    const [order, setOrder] = useState(null);

    const getProductImage = (product) => {
        if (!product) return "/placeholder.png";

        if (Array.isArray(product.images) && product.images.length > 0) {
            return product.images[0];
        }

        if (Array.isArray(product.image) && product.image.length > 0) {
            return product.image[0];
        }

        if (typeof product.image === "string") {
            return product.image;
        }

        return "/placeholder.png";
    };

    const fetchInvoice = async () => {

        try {

            const { data } = await axios.get(
                `/api/order/invoice/${orderId}`
            );

            if (data.success) {
                setOrder(data.order);
            }

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchInvoice();
    }, [orderId]);

    if (!order) {
        return (
            <div className="mt-32 text-center text-xl">
                Loading Invoice...
            </div>
        );
    }

    const subtotal = order.items.reduce(
        (acc, item) => acc + item.product.offerPrice * item.quantity,
        0
    );

    const vat = order.amount - subtotal;

    return (

<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 mt-24">

<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

{/*===================== HEADER =====================*/}

<div className="flex justify-between items-center p-8 bg-gradient-to-r from-primary/10 to-white border-b">

    <div>

        <h1 className="text-4xl font-bold text-primary">
            HomeHarvest
        </h1>

        <p className="text-gray-500 mt-1">
            Fresh Grocery & Organic Store
        </p>

    </div>

    <div className="text-right">

        <h2 className="text-4xl font-bold text-gray-700">
            INVOICE
        </h2>

        <p className="mt-2 text-sm text-gray-500">
            #{order.invoiceNumber}
        </p>

    </div>

</div>

{/*===================== PAYMENT BOX =====================*/}

<div className="flex justify-end px-8 py-6">

<div className="w-96 border rounded-xl shadow-sm overflow-hidden bg-white">

<div className={`px-5 py-3 font-semibold text-sm tracking-wide ${
order.isPaid
? "bg-green-100 text-green-700"
: "bg-yellow-100 text-yellow-700"
}`}>

{order.isPaid ? "PAID" : "CASH ON DELIVERY"}

</div>

<div className="p-5 space-y-3 text-sm">

<div className="flex justify-between">

<span>Invoice Date</span>

<span>
{new Date(order.createdAt).toLocaleDateString()}
</span>

</div>

<div className="flex justify-between">

<span>Invoice No</span>

<span>{order.invoiceNumber}</span>

</div>

<div className="flex justify-between">

<span>Order ID</span>

<span>{order._id.slice(-8).toUpperCase()}</span>

</div>

<div className="flex justify-between font-semibold text-lg border-t pt-3">

<span>Total Payable</span>

<span className="text-primary">
{currency}{order.amount}
</span>

</div>

</div>

</div>

</div>

{/*===================== ADDRESS =====================*/}

<div className="grid md:grid-cols-3 border-y">

<div className="p-6 border-r">

<h3 className="font-semibold text-lg mb-3">
Business Address
</h3>

<p>HomeHarvest Ltd.</p>

<p>Dhaka, Bangladesh</p>

<p>support@homeharvest.com</p>

<p>+880 1712345678</p>

</div>

<div className="p-6 border-r">

<h3 className="font-semibold text-lg mb-3">
Delivery Address
</h3>

<p>{order.address.fullName}</p>

<p>{order.address.phoneNumber}</p>

<p>{order.address.area}</p>

<p>{order.address.city}</p>

<p>{order.address.state}</p>

</div>

<div className="p-6">

<h3 className="font-semibold text-lg mb-3">
Sold By
</h3>

<p>HomeHarvest Pvt. Ltd.</p>

<p>Organic Grocery Department</p>

<p>Bangladesh</p>

</div>

</div>

{/*===================== ORDER INFO =====================*/}

<div className="grid md:grid-cols-4 border-b">

<div className="p-5 border-r">

<p className="text-gray-500 text-sm">
Order Date
</p>

<p className="font-medium">
{new Date(order.createdAt).toLocaleDateString()}
</p>

</div>

<div className="p-5 border-r">

<p className="text-gray-500 text-sm">
Payment
</p>

<p className="font-medium">
{order.paymentType}
</p>

</div>

<div className="p-5 border-r">

<p className="text-gray-500 text-sm">
Status
</p>

<p className="font-medium">
{order.status}
</p>

</div>

<div className="p-5">

<p className="text-gray-500 text-sm">
Customer
</p>

<p className="font-medium">
{order.address.fullName}
</p>

</div>

</div>

{/*===================== PRODUCT TABLE =====================*/}

<div className="p-8">

<table className="w-full border text-sm">

<thead>

<tr className="bg-gray-100">

<th className="border p-3 text-left">
Description
</th>

<th className="border p-3">
Qty
</th>

<th className="border p-3">
Unit Price
</th>

<th className="border p-3">
VAT
</th>

<th className="border p-3">
Subtotal
</th>

</tr>

</thead>

<tbody>

{order.items.map((item)=>{

const lineTotal=item.product.offerPrice*item.quantity;

const lineVat=(lineTotal*0.02).toFixed(2);

return(

<tr key={item.product._id}>

<td className="border p-4">

<div className="flex items-center gap-3">

    <img
        src={getProductImage(item.product)}
        alt={item.product?.name}
        className="w-12 h-12 rounded-lg object-cover shadow"
    />

    <div>
        <div className="font-semibold">
            {item.product.name}
        </div>

        <div className="text-xs text-gray-500">
            {item.product.category}
        </div>
    </div>

</div>

</td>

<td className="border text-center">
{item.quantity}
</td>

<td className="border text-center">
{currency}{item.product.offerPrice}
</td>

<td className="border text-center">
{currency}{lineVat}
</td>

<td className="border text-center font-medium">
{currency}{lineTotal}
</td>

</tr>

)

})}

</tbody>

</table>

</div>
{/*===================== TOTAL =====================*/}

<div className="flex justify-end px-8 pb-10">

    <div className="w-96">

        <table className="w-full border text-sm">

            <thead className="bg-gray-100">

                <tr>

                    <th className="border p-2">
                        VAT Rate
                    </th>

                    <th className="border p-2">
                        Subtotal
                    </th>

                    <th className="border p-2">
                        VAT
                    </th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td className="border p-2 text-center">
                        2%
                    </td>

                    <td className="border p-2 text-center">
                        {currency}{subtotal.toFixed(2)}
                    </td>

                    <td className="border p-2 text-center">
                        {currency}{vat.toFixed(2)}
                    </td>

                </tr>

            </tbody>

        </table>

        <div className="border border-t-0 bg-gray-50 p-5">

            <div className="flex justify-between mb-3">

                <span>Item Subtotal</span>

                <span>
                    {currency}{subtotal.toFixed(2)}
                </span>

            </div>

            <div className="flex justify-between mb-3">

                <span>VAT (2%)</span>

                <span>
                    {currency}{vat.toFixed(2)}
                </span>

            </div>

            <div className="border-t pt-4 flex justify-between text-2xl font-bold">

                <span>Invoice Total</span>

                <span className="text-primary">
                    {currency}{order.amount}
                </span>

            </div>

        </div>

    </div>

</div>

{/*===================== FOOTER =====================*/}

<div className="border-t px-8 py-8">

    <div className="flex justify-between items-end">

        <div>

            <h3 className="text-xl font-semibold mb-2">
                Thank you for your purchase!
            </h3>

            <p className="text-gray-500">
                If you have any questions regarding this invoice,
                please contact our customer support.
            </p>

            <p className="text-primary mt-2">
                support@homeharvest.com
            </p>

            <p className="text-primary">
                +880 1712345678
            </p>

        </div>

        <div className="text-right">

            <h2 className="text-2xl font-bold text-primary">
                HomeHarvest
            </h2>

            <p className="text-gray-500">
                Fresh Grocery & Organic Store
            </p>

        </div>

    </div>

</div>

{/*===================== BUTTONS =====================*/}

<div className="flex justify-center gap-5 py-10">

    <button
        onClick={() => window.print()}
        className="px-8 py-3 rounded bg-primary text-white hover:bg-primary/90"
    >
        Print Invoice
    </button>

    <button
        onClick={() => navigate("/my-orders")}
        className="px-8 py-3 rounded border border-primary text-primary hover:bg-primary/10"
    >
        Back to Orders
    </button>

</div>

</div>

</div>

    );

};

export default Invoice;