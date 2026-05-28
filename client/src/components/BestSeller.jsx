import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

    const BestSeller = () => {

        const {products} = useAppContext();
    return (
        <div className='mt-12'>

            {/* heading */}
            <p className='text-3xl font-medium mb-6'>
                Best Seller
            </p>
            
            <div >
                <ProductCard product={products[0]}></ProductCard>
            </div>
        </div>
    )
}

export default BestSeller
