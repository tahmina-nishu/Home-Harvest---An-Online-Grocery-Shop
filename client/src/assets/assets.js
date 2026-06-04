import logo from "./Logo.png";
import profile from "./profile.png"
import banner from "./banner1.jpg"
import bottomBanner from "./bottom_banner.png"
import not_found from "./not_found.jpg"
import add_address_image from "./add_address_image.jpg"
import add_icon from "./add_icon.jpg"
import product_list_icon from "./product_list_icon.jpg"
import order_icon from "./order_icon.jpg"

export const assets = {
    logo,
    profile,
    banner,
    bottomBanner,
    not_found,
    add_address_image,
    product_list_icon,
    add_icon,
    order_icon,
}


// import feature icons

import {
    FaTruckFast,
    FaLeaf,
    FaTags
} from "react-icons/fa6";


// features object

export const features = [
    {
        title: "Fastest Delivery",
        description: "Groceries delivered in under 30 minutes",
        icon: FaTruckFast,
    },
    {
        title: "Freshness Guaranteed",
        description: "Fresh produce straight from the source",
        icon: FaLeaf,
    },
    {
        title: "Affordable Prices",
        description: "Quality groceries at unbeatable prices",
        icon: FaTags,
    },
]


// import social media icon

import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube
} from "react-icons/fa6";


// footerlink object

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            {
                text: "Home", 
                url: "#"
            },
            {
                text: "Best Sellers", 
                url: "#"
            },
            {
                text: "Offers & Deals", 
                url: "#"
            },
            {
                text: "Contact Us", 
                url: "#"
            },
            {
                text: "FAQs", 
                url: "#"
            },
        ]
    },
    {
        title: "Need Help?",
        links: [
            {
                text: "Delivery Information", 
                url: "#"
            },
            {
                text: "Return & Refund Policy", 
                url: "#"
            },
            {
                text: "Payment Methods", 
                url: "#"
            },
            {
                text: "Track your Order", 
                url: "#"
            },
        ]
    },
    {
        title: "Follow Us on",
        links: [
            {
                icon: FaFacebookF,
                url: "#"
            },
            {
                icon: FaInstagram,
                url: "#"
            },
            {
                icon: FaXTwitter,
                url: "#"
            },
            {
                icon: FaYoutube,
                url: "#"
            },
        ]
    },
]


// dummy address objects

export const dummyAddresses = [
    {
        _id: "addr1",
        firstName: "Rahim",
        lastName: "Ahmed",
        street: "House 12, Road 5, Dhanmondi",
        city: "Dhaka",
        state: "Dhaka",
        country: "Bangladesh",
        zipCode: "1209"
    },
    {
        _id: "addr2",
        firstName: "Karim",
        lastName: "Chowdhury",
        street: "House 45, CDA Avenue",
        city: "Chattogram",
        state: "Chattogram",
        country: "Bangladesh",
        zipCode: "4000"
    },
    {
        _id: "addr3",
        firstName: "Nusrat",
        lastName: "Jahan",
        street: "House 18, Zindabazar",
        city: "Sylhet",
        state: "Sylhet",
        country: "Bangladesh",
        zipCode: "3100"
    },
    {
        _id: "addr4",
        firstName: "Sabbir",
        lastName: "Hossain",
        street: "House 27, Sonadanga",
        city: "Khulna",
        state: "Khulna",
        country: "Bangladesh",
        zipCode: "9100"
    },
    {
        _id: "addr5",
        firstName: "Tanvir",
        lastName: "Hasan",
        street: "House 33, Lalkhan Bazar",
        city: "Chattogram",
        state: "Chattogram",
        country: "Bangladesh",
        zipCode: "4203"
    }
]


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

// Fruits
import apple_1 from "./product_images/fruits/apple_1.jpg"
import apple_2 from "./product_images/fruits/apple_2.jpg"
import apple_3 from "./product_images/fruits/apple_3.jpg"
import apple_4 from "./product_images/fruits/apple_4.jpg"

import banana_1 from "./product_images/fruits/banana_1.jpg"
import banana_2 from "./product_images/fruits/banana_2.jpg"
import banana_3 from "./product_images/fruits/banana_3.jpg"
import banana_4 from "./product_images/fruits/banana_4.jpg"

import orange_1 from "./product_images/fruits/orange_1.jpg"
import orange_2 from "./product_images/fruits/orange_2.jpg"
import orange_3 from "./product_images/fruits/orange_3.jpg"
import orange_4 from "./product_images/fruits/orange_4.jpg"

import mango_1 from "./product_images/fruits/mango_1.jpg"
import mango_2 from "./product_images/fruits/mango_2.jpg"
import mango_3 from "./product_images/fruits/mango_3.jpg"
import mango_4 from "./product_images/fruits/mango_4.jpg"

import guava_1 from "./product_images/fruits/guava_1.jpg"
import guava_2 from "./product_images/fruits/guava_2.jpg"
import guava_3 from "./product_images/fruits/guava_3.jpg"
import guava_4 from "./product_images/fruits/guava_4.jpg"


// Vegetables
import potato_1 from "./product_images/vegetables/potato_1.jpg"
import potato_2 from "./product_images/vegetables/potato_2.jpg"
import potato_3 from "./product_images/vegetables/potato_3.jpg"
import potato_4 from "./product_images/vegetables/potato_4.jpg"

import tomato_1 from "./product_images/vegetables/tomato_1.jpg"
import tomato_2 from "./product_images/vegetables/tomato_2.jpg"
import tomato_3 from "./product_images/vegetables/tomato_3.jpg"
import tomato_4 from "./product_images/vegetables/tomato_4.jpg"

import carrot_1 from "./product_images/vegetables/carrot_1.jpg"
import carrot_2 from "./product_images/vegetables/carrot_2.jpg"
import carrot_3 from "./product_images/vegetables/carrot_3.jpg"
import carrot_4 from "./product_images/vegetables/carrot_4.jpg"

import onion_1 from "./product_images/vegetables/onion_1.jpg"
import onion_2 from "./product_images/vegetables/onion_2.jpg"
import onion_3 from "./product_images/vegetables/onion_3.jpg"
import onion_4 from "./product_images/vegetables/onion_4.jpg"

import cucumber_1 from "./product_images/vegetables/cucumber_1.jpg"
import cucumber_2 from "./product_images/vegetables/cucumber_2.jpg"
import cucumber_3 from "./product_images/vegetables/cucumber_3.jpg"
import cucumber_4 from "./product_images/vegetables/cucumber_4.jpg"


// // Meat
// import chicken_1 from "./product_images/meat/chicken_1.jpg"
// import chicken_2 from "./product_images/meat/chicken_2.jpg"
// import chicken_3 from "./product_images/meat/chicken_3.jpg"
// import chicken_4 from "./product_images/meat/chicken_4.jpg"

// import beef_1 from "./product_images/meat/beef_1.jpg"
// import beef_2 from "./product_images/meat/beef_2.jpg"
// import beef_3 from "./product_images/meat/beef_3.jpg"
// import beef_4 from "./product_images/meat/beef_4.jpg"

// import mutton_1 from "./product_images/meat/mutton_1.jpg"
// import mutton_2 from "./product_images/meat/mutton_2.jpg"
// import mutton_3 from "./product_images/meat/mutton_3.jpg"
// import mutton_4 from "./product_images/meat/mutton_4.jpg"

// import duck_1 from "./product_images/meat/duck_1.jpg"
// import duck_2 from "./product_images/meat/duck_2.jpg"
// import duck_3 from "./product_images/meat/duck_3.jpg"
// import duck_4 from "./product_images/meat/duck_4.jpg"

// import minced_1 from "./product_images/meat/minced_1.jpg"
// import minced_2 from "./product_images/meat/minced_2.jpg"
// import minced_3 from "./product_images/meat/minced_3.jpg"
// import minced_4 from "./product_images/meat/minced_4.jpg"


// // Fish
// import fish_1 from "./product_images/fish/fish_1.jpg"
// import fish_2 from "./product_images/fish/fish_2.jpg"
// import fish_3 from "./product_images/fish/fish_3.jpg"
// import fish_4 from "./product_images/fish/fish_4.jpg"

// import hilsa_1 from "./product_images/fish/hilsa_1.jpg"
// import hilsa_2 from "./product_images/fish/hilsa_2.jpg"
// import hilsa_3 from "./product_images/fish/hilsa_3.jpg"
// import hilsa_4 from "./product_images/fish/hilsa_4.jpg"

// import tilapia_1 from "./product_images/fish/tilapia_1.jpg"
// import tilapia_2 from "./product_images/fish/tilapia_2.jpg"
// import tilapia_3 from "./product_images/fish/tilapia_3.jpg"
// import tilapia_4 from "./product_images/fish/tilapia_4.jpg"

// import shrimp_1 from "./product_images/fish/shrimp_1.jpg"
// import shrimp_2 from "./product_images/fish/shrimp_2.jpg"
// import shrimp_3 from "./product_images/fish/shrimp_3.jpg"
// import shrimp_4 from "./product_images/fish/shrimp_4.jpg"

// import catla_1 from "./product_images/fish/catla_1.jpg"
// import catla_2 from "./product_images/fish/catla_2.jpg"
// import catla_3 from "./product_images/fish/catla_3.jpg"
// import catla_4 from "./product_images/fish/catla_4.jpg"


// // Dairy
// import milk_1 from "./product_images/dairy/milk_1.jpg"
// import milk_2 from "./product_images/dairy/milk_2.jpg"
// import milk_3 from "./product_images/dairy/milk_3.jpg"
// import milk_4 from "./product_images/dairy/milk_4.jpg"

// import cheese_1 from "./product_images/dairy/cheese_1.jpg"
// import cheese_2 from "./product_images/dairy/cheese_2.jpg"
// import cheese_3 from "./product_images/dairy/cheese_3.jpg"
// import cheese_4 from "./product_images/dairy/cheese_4.jpg"

// import butter_1 from "./product_images/dairy/butter_1.jpg"
// import butter_2 from "./product_images/dairy/butter_2.jpg"
// import butter_3 from "./product_images/dairy/butter_3.jpg"
// import butter_4 from "./product_images/dairy/butter_4.jpg"

// import yogurt_1 from "./product_images/dairy/yogurt_1.jpg"
// import yogurt_2 from "./product_images/dairy/yogurt_2.jpg"
// import yogurt_3 from "./product_images/dairy/yogurt_3.jpg"
// import yogurt_4 from "./product_images/dairy/yogurt_4.jpg"

// import ghee_1 from "./product_images/dairy/ghee_1.jpg"
// import ghee_2 from "./product_images/dairy/ghee_2.jpg"
// import ghee_3 from "./product_images/dairy/ghee_3.jpg"
// import ghee_4 from "./product_images/dairy/ghee_4.jpg"


// dummy product objects

export const dummyProducts = [
    // Fruits
{
    _id: "fr1",
    name: "Apple",
    category: "Fruits",
    price: 220,
    offerPrice: 190,
    image: [apple_1, apple_2, apple_3, apple_4],
    description: [
        "Fresh and sweet",
        "Rich in fiber",
        "Healthy daily fruit"
    ],
    inStock: true,
    rating: 4.8,
},
{
    _id: "fr2",
    name: "Banana",
    category: "Fruits",
    price: 90,
    offerPrice: 75,
    image: [banana_1, banana_2, banana_3, banana_4],
    description: [
        "Naturally sweet",
        "Rich in potassium",
        "Perfect energy source"
    ],
    inStock: true,
    rating: 4.5,
},
{
    _id: "fr3",
    name: "Orange",
    category: "Fruits",
    price: 180,
    offerPrice: 150,
    image: [orange_1, orange_2, orange_3, orange_4],
    description: [
        "Juicy and fresh",
        "Vitamin C rich",
        "Refreshing taste"
    ],
    inStock: true,
    rating: 4.7,
},
{
    _id: "fr4",
    name: "Mango",
    category: "Fruits",
    price: 260,
    offerPrice: 230,
    image: [mango_1, mango_2, mango_3, mango_4],
    description: [
        "Seasonal favorite",
        "Sweet and delicious",
        "Premium quality"
    ],
    inStock: true,
    rating: 4.9,
},
{
    _id: "fr5",
    name: "Guava",
    category: "Fruits",
    price: 120,
    offerPrice: 100,
    image: [guava_1, guava_2, guava_3, guava_4],
    description: [
        "Fresh farm guava",
        "High vitamin content",
        "Healthy snack"
    ],
    inStock: true,
    rating: 4.4,
},

// Vegetables
{
    _id: "vg1",
    name: "Potato",
    category: "Vegetables",
    price: 35,
    offerPrice: 30,
    image: [potato_1, potato_2, potato_3, potato_4],
    description: [
        "Fresh and organic",
        "Rich in carbohydrates",
        "Ideal for curries"
    ],
    inStock: true,
    rating: 4.5,
},
{
    _id: "vg2",
    name: "Tomato",
    category: "Vegetables",
    price: 60,
    offerPrice: 50,
    image: [tomato_1, tomato_2, tomato_3, tomato_4],
    description: [
        "Fresh and juicy",
        "Rich in antioxidants",
        "Perfect for salads"
    ],
    inStock: true,
    rating: 4.7,
},
{
    _id: "vg3",
    name: "Carrot",
    category: "Vegetables",
    price: 70,
    offerPrice: 60,
    image: [carrot_1, carrot_2, carrot_3, carrot_4],
    description: [
        "Crunchy texture",
        "Good for eyesight",
        "Fresh farm product"
    ],
    inStock: true,
    rating: 4.4,
},
{
    _id: "vg4",
    name: "Onion",
    category: "Vegetables",
    price: 80,
    offerPrice: 68,
    image: [onion_1, onion_2, onion_3, onion_4],
    description: [
        "Daily cooking essential",
        "Fresh quality",
        "Strong flavor"
    ],
    inStock: true,
    rating: 4.3,
},
{
    _id: "vg5",
    name: "Cucumber",
    category: "Vegetables",
    price: 55,
    offerPrice: 45,
    image: [cucumber_1, cucumber_2, cucumber_3, cucumber_4],
    description: [
        "Cool and fresh",
        "Perfect for salad",
        "Hydrating vegetable"
    ],
    inStock: true,
    rating: 4.5,
},

// Meat
// {
//     _id: "mt1",
//     name: "Chicken Breast",
//     category: "Meat",
//     price: 320,
//     offerPrice: 290,
//     image: [chicken_1, chicken_2, chicken_3, chicken_4],
//     description: [
//         "Fresh chicken",
//         "High protein",
//         "Healthy choice"
//     ],
//     inStock: true,
//     rating: 4.7,
// },
// {
//     _id: "mt2",
//     name: "Beef",
//     category: "Meat",
//     price: 850,
//     offerPrice: 790,
//     image: [beef_1, beef_2, beef_3, beef_4],
//     description: [
//         "Premium beef",
//         "Fresh cut",
//         "Perfect for curry"
//     ],
//     inStock: true,
//     rating: 4.8,
// },
// {
//     _id: "mt3",
//     name: "Mutton",
//     category: "Meat",
//     price: 1100,
//     offerPrice: 1020,
//     image: [mutton_1, mutton_2, mutton_3, mutton_4],
//     description: [
//         "Tender meat",
//         "Premium quality",
//         "Rich flavor"
//     ],
//     inStock: true,
//     rating: 4.9,
// },
// {
//     _id: "mt4",
//     name: "Duck Meat",
//     category: "Meat",
//     price: 650,
//     offerPrice: 590,
//     image: [duck_1, duck_2, duck_3, duck_4],
//     description: [
//         "Traditional favorite",
//         "Fresh and tasty",
//         "Farm fresh"
//     ],
//     inStock: true,
//     rating: 4.4,
// },
// {
//     _id: "mt5",
//     name: "Minced Meat",
//     category: "Meat",
//     price: 420,
//     offerPrice: 390,
//     image: [minced_1, minced_2, minced_3, minced_4],
//     description: [
//         "Fine minced",
//         "Easy cooking",
//         "Fresh preparation"
//     ],
//     inStock: true,
//     rating: 4.5,
// },

// // Fish
// {
//     _id: "fs1",
//     name: "Rui Fish",
//     category: "Fish",
//     price: 450,
//     offerPrice: 410,
//     image: [fish_1, fish_2, fish_3, fish_4],
//     description: [
//         "Fresh river fish",
//         "Rich in omega-3",
//         "Healthy and tasty"
//     ],
//     inStock: true,
//     rating: 4.6,
// },
// {
//     _id: "fs2",
//     name: "Hilsa Fish",
//     category: "Fish",
//     price: 1600,
//     offerPrice: 1490,
//     image: [hilsa_1, hilsa_2, hilsa_3, hilsa_4],
//     description: [
//         "Premium quality hilsa",
//         "Traditional favorite",
//         "Fresh catch"
//     ],
//     inStock: true,
//     rating: 4.9,
// },
// {
//     _id: "fs3",
//     name: "Tilapia Fish",
//     category: "Fish",
//     price: 280,
//     offerPrice: 250,
//     image: [tilapia_1, tilapia_2, tilapia_3, tilapia_4],
//     description: [
//         "Farm fresh fish",
//         "Healthy protein",
//         "Affordable choice"
//     ],
//     inStock: true,
//     rating: 4.4,
// },
// {
//     _id: "fs4",
//     name: "Shrimp",
//     category: "Fish",
//     price: 780,
//     offerPrice: 720,
//     image: [shrimp_1, shrimp_2, shrimp_3, shrimp_4],
//     description: [
//         "Fresh shrimp",
//         "Seafood favorite",
//         "Perfect for curry"
//     ],
//     inStock: true,
//     rating: 4.8,
// },
// {
//     _id: "fs5",
//     name: "Catla Fish",
//     category: "Fish",
//     price: 390,
//     offerPrice: 350,
//     image: [catla_1, catla_2, catla_3, catla_4],
//     description: [
//         "Freshwater fish",
//         "Rich taste",
//         "Daily meal favorite"
//     ],
//     inStock: true,
//     rating: 4.5,
// },

// // Dairy
// {
//     _id: "dr1",
//     name: "Fresh Milk",
//     category: "Dairy",
//     price: 90,
//     offerPrice: 80,
//     image: [milk_1, milk_2, milk_3, milk_4],
//     description: [
//         "Pure dairy milk",
//         "Rich in calcium",
//         "Healthy for all ages"
//     ],
//     inStock: true,
//     rating: 4.4,
// },
// {
//     _id: "dr2",
//     name: "Cheese",
//     category: "Dairy",
//     price: 320,
//     offerPrice: 290,
//     image: [cheese_1, cheese_2, cheese_3, cheese_4],
//     description: [
//         "Creamy texture",
//         "Perfect for pizza",
//         "Premium quality"
//     ],
//     inStock: true,
//     rating: 4.7,
// },
// {
//     _id: "dr3",
//     name: "Butter",
//     category: "Dairy",
//     price: 180,
//     offerPrice: 160,
//     image: [butter_1, butter_2, butter_3, butter_4],
//     description: [
//         "Smooth and creamy",
//         "Ideal for breakfast",
//         "Rich flavor"
//     ],
//     inStock: true,
//     rating: 4.5,
// },
// {
//     _id: "dr4",
//     name: "Yogurt",
//     category: "Dairy",
//     price: 120,
//     offerPrice: 100,
//     image: [yogurt_1, yogurt_2, yogurt_3, yogurt_4],
//     description: [
//         "Fresh yogurt",
//         "Healthy probiotic",
//         "Refreshing taste"
//     ],
//     inStock: true,
//     rating: 4.3,
// },
// {
//     _id: "dr5",
//     name: "Ghee",
//     category: "Dairy",
//     price: 650,
//     offerPrice: 590,
//     image: [ghee_1, ghee_2, ghee_3, ghee_4],
//     description: [
//         "Pure cow ghee",
//         "Traditional cooking",
//         "Rich aroma"
//     ],
//     inStock: true,
//     rating: 4.8,
// },

]

// dummy orders object
export const dummyOrders = [
    {
        _id: "ORD001",
        userId: "USR001",

        items: [
            {
                product: dummyProducts[0],
                quantity: 2,
                _id: "ITM001"
            },
            {
                product: dummyProducts[1],
                quantity: 1,
                _id: "ITM002"
            }
        ],

        amount: 0,

        address: dummyAddresses[0],
        phone: "01821326687",
        status: "Processing",
        paymentType: "COD",
        isPaid: false,

        createdAt: "2026-06-01T10:00:00.000Z",
        updatedAt: "2026-06-01T10:10:00.000Z"
    },

    {
        _id: "ORD002",
        userId: "USR001",

        items: [
            {
                product: dummyProducts[2],
                quantity: 1,
                _id: "ITM003"
            }
        ],

        amount: 0,

        address: dummyAddresses[1],
        phone: "01821314687",
        status: "Shipped",
        paymentType: "Online",
        isPaid: true,

        createdAt: "2026-05-28T09:30:00.000Z",
        updatedAt: "2026-05-29T12:00:00.000Z"
    },

    {
        _id: "ORD003",
        userId: "USR001",

        items: [
            {
                product: dummyProducts[3],
                quantity: 1,
                _id: "ITM004"
            },
            {
                product: dummyProducts[4],
                quantity: 3,
                _id: "ITM005"
            }
        ],

        amount: 0,

        address: dummyAddresses[2],
        phone: "01821325678",
        status: "Delivered",
        paymentType: "COD",
        isPaid: false,

        createdAt: "2026-05-20T14:15:00.000Z",
        updatedAt: "2026-05-21T16:45:00.000Z"
    }
];