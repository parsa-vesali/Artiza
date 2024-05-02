import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function Header() {
    return (
        <div className='container mt-4 flex items-center justify-between gap-x-8'>
            <div className="w-[65%] h-[450px] rounded-lg overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper h-[450px]"
                >
                    <SwiperSlide className='hover:scale-100'>
                        <img src="./image/header-1.jpg" className='h-[100%] object-cover ' />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="./image/header-2.jpg" className='h-[100%] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="./image/header-3.jpg" className='h-[100%] object-cover' />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="./image/header-6.jpg" className='h-[100%] object-cover' />
                    </SwiperSlide>
                </Swiper>


            </div>

            <div className="w-[45%] h-[450px] flex flex-col justify-between items-center gap-y-8 overflow-hidden  ">


                <div className="h-[100%] overflow-hidden rounded-lg cursor-pointer ">
                    <img src="./image/header-5.jpg" className='h-[100%] object-cover  hover:scale-125 transition-all duration-300' />

                </div>
                <div className="h-[100%] overflow-hidden rounded-lg cursor-pointer ">
                    <img src="./image/header-4.jpg" className='h-[100%] object-cover  hover:scale-125 transition-all duration-300' />

                </div>

            </div>
        </div>
    )
}
