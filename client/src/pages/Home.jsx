import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BannerBottom from '../components/BannerBottom'
import NewsLetter from '../components/NewsLetter'
import FlashSale from '../components/FlashSale'

const Home = () => {
    return (
        <div className='mt-29'>
            <MainBanner></MainBanner>
            <Categories></Categories>
            <BestSeller></BestSeller>
            <FlashSale></FlashSale>
            <BannerBottom></BannerBottom>
            <NewsLetter></NewsLetter>
        </div>
    )
}

export default Home
