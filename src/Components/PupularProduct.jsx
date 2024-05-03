import React from 'react'
import { Products } from '../Constant'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';


export default function PupularProduct() {
    return (
        <div className='container mt-8'>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}

                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    Products.map(product => (
                        <SwiperSlide key={product.id}>
                            <div className=" group w-72 cursor-pointer rounded-lg shadow-lg p-4 mx-4">
                                <div className="w-64 h-64  overflow-hidden rounded-lg">
                                    <img src={product.srcImage} className='group-hover:scale-110 transition-all' alt="product" />
                                </div>
                                <div className="mt-4">
                                    <h2 className='text-xl line-clamp-2 '>{product.title}</h2>
                                    <div className="font-Dana-Bold mt-4 w-full flex flex-col items-">
                                        <del className='text-red-500'>{product.mainPrice}</del>
                                        <h2 className='text-xl flex items-center gap-x-2 text-blue-500 font-bold'>  {product.price} <span className='text-sm'>تومان</span></h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}
