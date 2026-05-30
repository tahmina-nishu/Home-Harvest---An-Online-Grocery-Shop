import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {

    const {products, searchQuery} = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{

        if(searchQuery.length > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        }

        else{
            setFilteredProducts(products)
        }

    }, [products, searchQuery])

    return (
        <div className='mt-29 flex flex-col'>

            {/* title div  */}
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium'>All Products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            {/* card div  */}
            <div className='grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6'>
                {filteredProducts.filter((product)=> product.inStock).map((product, index)=>(
                    <ProductCard key={index} product={product}></ProductCard>
                ))}
            </div>
        </div>
    )
}

export default AllProducts
