import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
import { categories, assets } from '../assets/assets'

const AllProducts = () => {

    const { products, searchQuery } = useAppContext()

    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")

    useEffect(() => {

        let tempProducts = [...products]

        // Search filter
        if (searchQuery.length > 0) {
            tempProducts = tempProducts.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        // Category filter
        if (selectedCategory !== "all") {
            tempProducts = tempProducts.filter(
                product =>
                    product.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
            )
        }

        // Only in stock products
        tempProducts = tempProducts.filter(product => product.inStock)

        setFilteredProducts(tempProducts)

    }, [products, searchQuery, selectedCategory])

    return (
        <div className='mt-29 flex flex-col'>

            {/* ---------------- Category Buttons START ---------------------- */}
            <div className='flex flex-wrap gap-3 mb-6'>

                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-5 py-2 rounded-full border transition-all duration-300
                    ${
                        selectedCategory === "all"
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                    }`}
                >
                    All Products
                </button>

                {categories.map((category) => (
                    <button
                        key={category.path}
                        onClick={() =>
                            setSelectedCategory(category.path.toLowerCase())
                        }
                        className={`px-5 py-2 rounded-full border  transition-all duration-300
                        ${
                            selectedCategory ===
                            category.path.toLowerCase()
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                        }`}
                    >
                        {category.text}
                    </button>
                ))}
            </div>
            {/* ---------------- Category Buttons END ---------------------- */}

            {/* Title */}
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium'>
                    {selectedCategory === "all"
                        ? "All Products"
                        : categories.find(
                                item =>
                                    item.path.toLowerCase() ===
                                    selectedCategory
                            )?.text}
                </p>

                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
                <div className='grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6'>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className='flex justify-center items-center mt-10'>
                    <img
                        className='w-96'
                        src={assets.not_found}
                        alt="No Products Found"
                    />
                </div>
            )}
        </div>
    )
}

export default AllProducts