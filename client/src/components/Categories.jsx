import React, { useState } from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const Categories = () => {

    const { navigate } = useAppContext()

    const [startIndex, setStartIndex] = useState(0)

    // kotogulo category eksathe show hobe
    const visibleCards = 7

    // next slide
    const nextSlide = () => {
        if (startIndex + visibleCards < categories.length) {
            setStartIndex(startIndex + 1)
        }
    }

    // previous slide
    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1)
        }
    }

    return (
        <div className='mt-12 relative'>

            {/* heading */}
            <p className='text-3xl font-medium md:text-3xl mb-6'>
                Categories
            </p>

            {/* left arrow */}
            <button
                onClick={prevSlide}
                className='absolute left-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-primary bg-white rounded-full'
            >
                <FaCircleArrowLeft />
            </button>

            {/* right arrow */}
            <button
                onClick={nextSlide}
                className='absolute right-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-primary bg-white rounded-full'
            >
                <FaCircleArrowRight />
            </button>

            {/* slider container */}
            <div className='overflow-hidden'>

                <div
                    className='flex gap-5 transition-all duration-500'
                    style={{
                        transform: `translateX(-${startIndex * 170}px)`
                    }}
                >

                    {/* categories */}
                    {categories.map((category, index) => (

                        <div
                            key={index}
                            className='group  cursor-pointer py-8 px-4 rounded-full flex flex-col justify-center items-center text-center min-w-38'
                            style={{ backgroundColor: category.bgColor }}
                            onClick={() => {
                                navigate(`/products/${category.path.toLowerCase()}`);
                                scrollTo(0, 0)
                            }}
                        >

                            <img
                                className='rounded-full h-20 w-20 lg:h-24 lg:w-24 group-hover:scale-110 transition duration-300'
                                src={category.image}
                                alt={category.text}
                            />

                            <p className='mt-3 text-sm lg:text-base font-medium'>
                                {category.text}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Categories