"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "@/app/components/BookCard";

const Recommended: React.FC<any> = () => {
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
        {
            "_id": 10,
            "title": "Mastering SEO in 2024",
            "description": "Learn the best strategies to grow your online store in today's competitive market.",
            "category": "business",
            "trending": true,
            "coverImage": "book-1.png",
            "oldPrice": 29.99,
            "newPrice": 19.99
        },
    ];
    return (
        <div className="py-16">
            <h2 className="text-3xl font-semibold mb-6">Recommended for you </h2>

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
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    books.length > 0 &&
                    books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Recommended;
