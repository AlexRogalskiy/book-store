"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from "react";
import BookCard from "@/app/components/BookCard";

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {

    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    const books = [
        {
            "_id": 1,
            "title": "Top 10 Fiction Books This Year",
            "description": "Learn the best strategies to grow your online store in today's competitive market.",
            "category": "business",
            "trending": true,
            "coverImage": "book-1.png",
            "oldPrice": 29.99,
            "newPrice": 19.99
        },
        {
            "_id": 1,
            "title": "Mastering SEO in 2024",
            "description": "Learn the best strategies to grow your online store in today's competitive market.",
            "category": "business",
            "trending": true,
            "coverImage": "book-1.png",
            "oldPrice": 29.99,
            "newPrice": 19.99
        },
    ];

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/* category filtering */}
            <div className='mb-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category"
                    className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default TopSellers