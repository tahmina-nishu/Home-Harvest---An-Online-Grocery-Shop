import logo from "./Logo.png";
import profile from "./profile.png"
import banner from "./banner1.jpg"

export const assets = {
    logo,
    profile,
    banner
}


// import category images 

import fruit_image from "./fruit_image.jpg"
import vegetable_image from "./category-images/vegetable_image.jpg"
import meat_image from "./category-images/meat_image.jpg"
import fish_image from "./category-images/fish_image.jpg"
import dairy_image from "./category-images/dairy_image.jpg"
import cooking_essentials_image from "./category-images/cooking_essentials_image.jpg"
import snacks_image from "./category-images/snacks_image.jpg"
import beverages_image from "./category-images/beverages_image.jpg"
import bakery_breakfast_image from "./category-images/bakery_breakfast_image.jpg"
import personal_care_image from "./category-images/personal_care_image.jpg"
import health_wellness_image from "./category-images/health_wellness_image.jpg"
import home_cleaning_image from "./category-images/home_cleaning_image.jpg"
import pest_control_image from "./category-images/pest_control_image.jpg"
import baby_care_image from "./category-images/baby_care_image.jpg"
import stationery_office_image from "./category-images/stationery_office_image.jpg"
import frozen_ready_food_image from "./category-images/frozen_ready_food_image.jpg"


// category objects

export const categories = [
{
    text: "Fruits",
    path: "fruits",
    image: fruit_image,
    bgColor: "#EEF8EC"
},
{
    text: "Vegetables",
    path: "vegetables",
    image: vegetable_image,
    bgColor: "#EAF7EC"
},
{
    text: "Meat",
    path: "meat",
    image: meat_image,
    bgColor: "#FAF1ED"
},
{
    text: "Fish",
    path: "fish",
    image: fish_image,
    bgColor: "#EAF7F9"
},
{
    text: "Dairy",
    path: "dairy",
    image: dairy_image,
    bgColor: "#FAF9ED"
},
{
    text: "Cooking Essentials",
    path: "cooking-essentials",
    image: cooking_essentials_image,
    bgColor: "#F1EDF9"
},
{
    text: "Snacks",
    path: "snacks",
    image: snacks_image,
    bgColor: "#FBF3EA"
},
{
    text: "Beverages",
    path: "beverages",
    image: beverages_image,
    bgColor: "#EAF9F5"
},
{
    text: "Bakery & Breakfast",
    path: "bakery-breakfast",
    image: bakery_breakfast_image,
    bgColor: "#FAEDF2"
},
{
    text: "Frozen & Ready Food",
    path: "frozen-ready-food",
    image: frozen_ready_food_image,
    bgColor: "#EEF2FA"
},
{
    text: "Personal Care",
    path: "personal-care",
    image: personal_care_image,
    bgColor: "#EDF8F1"
},
{
    text: "Health & Wellness",
    path: "health-wellness",
    image: health_wellness_image,
    bgColor: "#F3FAEC"
},
{
    text: "Home & Cleaning",
    path: "home-cleaning",
    image: home_cleaning_image,
    bgColor: "#F0EDFA"
},
{
    text: "Pest Control",
    path: "pest-control",
    image: pest_control_image,
    bgColor: "#FAF2EC"
},
{
    text: "Baby Care",
    path: "baby-care",
    image: baby_care_image,
    bgColor: "#ECF8F9"
},
{
    text: "Stationery & Office",
    path: "stationery-office",
    image: stationery_office_image,
    bgColor: "#F4FAED"
}
]


// import dummy product image

// vegetables
import potato_1 from "./product_images/vegetables/potato_1.jpg"
import potato_2 from "./product_images/vegetables/potato_2.jpg"
import potato_3 from "./product_images/vegetables/potato_3.jpg"
import potato_4 from "./product_images/vegetables/potato_4.jpg"


// dummy product objects

export const dummyProducts = [
    // vegetables
    {
        _id: "gd46g23h",
        name: "Potato",
        category: "Vegetables",
        price: 35,
        offerPrice: 30,
        image: [potato_1, potato_2, potato_3, potato_4],
        description: [
            "Fresh and organic",
            "Rich in carbohydrates",
            "Ideal for curries and fries"
        ],
        createdAt: "2026-05-25T07:17:46.018Z",
        updatedAt: "2026-05-25T07:18:13.103Z",
        inStock: true,
        rating: 4.5,
    },
]