import React from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Search from './Search';
import ShopingCart from './ShopingCart';


export default function TopBar() {
    return (
        <div className='flex items-center justify-between py-5 container'>

            <div className="flex items-center gap-x-16">
                {/* LOGO */}
                <div className="text-center cursor-pointer">
                    <h2 className='font-Morabba text-3xl text-zinc-700'>آرتیزا استایل</h2>
                    <p className="tracking-wider text-gray-500">با ما بهترین باشید</p>
                </div>

                {/* SEARCH INPUT */}
                <Search />
            </div>




            <div className="flex items-center gap-x-8 font-Morabba ">
                <button className='flex items-center gap-x-2 hover:text-blue-500 transition-all'>
                    <span>
                        <PersonOutlinedIcon />
                    </span>
                    حساب کاربری
                </button>

                <ShopingCart />
            </div>
        </div>
    )
}
