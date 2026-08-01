import React from 'react'
import {useAppContext} from '../../context/AppContext'
import toast from 'react-hot-toast';

const ProductList = () => {
    
    const {products, currency, axios, fetchProducts} = useAppContext();

    const updateStock = async (id, currentStock) => {

        const newStock = prompt("Enter new stock quantity:", currentStock);

        if (newStock === null) return;

        try {

            const { data } = await axios.post("/api/product/update-stock", {
                id,
                stock: Number(newStock)
            });

            if (data.success) {
                toast.success(data.message);
                fetchProducts();
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between pb-14">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
                <div className="max-w-4xl w-full overflow-x-auto rounded-md bg-white border border-gray-500/20">
                    <table className="min-w-225 w-full">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold">Product</th>
                                <th className="px-4 py-3 font-semibold">Category</th>
                                <th className="px-4 py-3 font-semibold">Selling Price</th>
                                <th className="px-4 py-3 font-semibold">Quantity</th>
                                <th className="px-4 py-3 font-semibold">Status</th>
                                <th className="px-4 py-3 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {products.map((product) => (
                                <tr key={product._id} className="border-t border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded overflow-hidden">
                                            <img src={product.image[0]} alt="Product" className="w-24 h-10" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{product.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3">{currency}{product.offerPrice}</td>
                                    <td className="px-4 py-3 font-medium">
                                        {product.stock}
                                    </td>

                                    <td className="px-4 py-3">
                                        {product.stock === 0 ? (
                                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                Out of Stock
                                            </span>
                                        ) : product.stock <= 5 ? (
                                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                Low Stock
                                            </span>
                                        ) : (
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                                                In Stock
                                            </span>
                                        )}
                                    </td>                                    
                                    <td className="px-4 py-3">

                                        <button
                                            onClick={() => updateStock(product._id, product.stock)}
                                            className="px-3 py-1 bg-primary text-white rounded hover:opacity-90"
                                        >
                                            Edit
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductList
