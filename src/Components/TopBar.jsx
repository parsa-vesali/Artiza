import React from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


export default function TopBar() {
    return (
        <div className='flex items-center justify-between py-5'>

            <div className="flex items-center gap-x-16">
                {/* LOGO */}
                <div className="text-center cursor-pointer">
                    <h2 className='font-Morabba text-3xl text-zinc-700'>آرتیزا استایل</h2>
                    <p className="tracking-wider text-gray-500">با ما بهترین باشید</p>
                </div>

                <div className="relative w-[30rem] bg-gray-100 px-4 hover:shadow rounded-lg">
                    <input type="text"
                        className='outline-none border-non bg-zinc-100 w-full py-2 '
                        placeholder='محصول مورد نظر خود را جست جو کنید' />
                    <SearchRoundedIcon className='absolute left-1 top-2 text-zinc-300 cursor-pointer' />
                </div>
            </div>

            {/* SEARCH INPUT */}



            <div className="flex items-center gap-x-8 ">
                <button className='flex items-center gap-x-2 hover:text-blue-500 transition-all'>
                    <span>
                        <PersonOutlinedIcon />
                    </span>
                    حساب کاربری
                </button>

                <button className='flex items-center gap-x-2 bg-zinc-700 text-gray-100 hover:bg-blue-500 py-2 px-4 rounded-lg transition-all'>
                    <span>
                        <LocalMallOutlinedIcon />
                    </span>
                    سبد خرید
                </button>
            </div>
        </div>
    )
}
