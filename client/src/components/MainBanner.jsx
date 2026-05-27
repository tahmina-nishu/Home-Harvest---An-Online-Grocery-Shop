import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaCircleArrowRight } from "react-icons/fa6";


const MainBanner = () => {
    return (
        <div className='relative'>
            <img className='w-full md:h-140 h-100 md:block' src={assets.banner} alt="banner" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/30 via-primary/15 to-transparent"></div>


            {/* ---- Content div ----  */}
            <div className='absolute inset-0 flex flex-col items-start justify-center px-4 md:pl-18 lg:pl-24'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You Can Trust, Savings You will Love!</h1>
            
                {/* ---- Link Div ----  */}
                <div className='flex items-center mt-6 font-medium'>
                    {/* ------------------ Shop Now Button ------------------  */}
                    <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
                        Shop Now 
                        <FaCircleArrowRight className='transition group-focus:translate-x-1' />
                    </Link>

                    {/* ------------------ Explore Button ------------------  */}
                    <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3  cursor-pointer font-semibold text-lg'>
                        Explore deals 
                        <FaCircleArrowRight className=' transition group-focus:translate-x-1' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
