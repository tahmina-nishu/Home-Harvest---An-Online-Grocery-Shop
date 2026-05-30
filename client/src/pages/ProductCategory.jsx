import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets, categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {

    const {products} = useAppContext()
    const {category} = useParams()

    const searchCategory = categories.find((item)=> item.path.toLowerCase() === category)

    // filter product for particular category
    const filteredProducts = products.filter((product)=>product.category.toLowerCase() === category)


    return (
        <div className='mt-29'>
            {searchCategory && (
                <div className='flex flex-col items-end w-max'>
                    {/* category title  */}
                    <p className='text-2xl font-medium'>{searchCategory.text}</p>

                    {/* title er nicher underline ta  */}
                    <div className='mb-3 w-16 h-0.5 bg-primary rounded-full'></div>                   
                </div>
            )}

            {/* show category wise products  */}
            {filteredProducts.length > 0 ?(
                <div className='grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6'>
                    {filteredProducts.map((product)=>(
                        <ProductCard key={product._id} product={ product}></ProductCard>
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center'><img className='w-96' src={assets.not_found} alt="" /></div>
            )}
        </div>
    )
}

export default ProductCategory
