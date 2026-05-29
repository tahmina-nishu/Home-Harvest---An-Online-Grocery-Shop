import React from 'react'
import { assets, features } from '../assets/assets'

const BannerBottom = () => {
    return (
        <div className='mt-24 bg-primary/5 rounded-2xl overflow-hidden'>

            <div className='flex flex-col md:flex-row items-center'>

                {/* left image */}
                <div className='md:w-1/2 w-full flex items-center justify-center'>
                    <img
                        className='w-100 h-80 md:w-130 md:h-95 object-cover'
                        src={assets.bottomBanner}
                        alt=""
                    />
                </div>

                {/* right content */}
                <div className='md:w-1/2 w-full flex flex-col justify-center px-6 md:px-12 py-8'>

                    {features.map((feature, index) => {

                        const Icon = feature.icon

                        return (
                            <div
                                key={index}
                                className='mb-6 text-center md:text-left'
                            >

                                {/* icon + title */}
                                <div className='flex items-center gap-3 justify-center md:justify-start'>

                                    <div className='text-primary text-2xl'>
                                        <Icon />
                                    </div>

                                    <h3 className='text-xl md:text-2xl font-semibold text-gray-800'>
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className='text-gray-500 mt-1 text-sm md:text-base'>
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default BannerBottom