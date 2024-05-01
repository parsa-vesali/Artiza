import React from 'react'
import { Categories } from "../Constant";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
export default function NavBar() {
    return (
        <div className='container py-5 border-t-2 border-zinc-200 shadow-lg'>
            <ul className='flex items-center gap-x-6'>
                {
                    Categories.map(item => (
                        item.submenu ? (
                            <li key={item.id} className='text-lg group relative font-Morabba cursor-pointer transition-all'>
                                <span>
                                    {item.title}
                                    <KeyboardArrowDownOutlinedIcon />

                                    <div className='absolute transition-all duration-300 ease-in-out flex flex-col gap-y-2 w-64 top-24 bg-white shadow-lg rounded-lg py-2 px-4 border-t-4 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:top-10'>
                                        <a href="#">ساعت</a>
                                        <a href="#">ساعت</a>
                                        <a href="#">ساعت</a>
                                        <a href="#">ساعت</a>
                                        <a href="#">ساعت</a>
                                    </div>
                                </span>
                            </li>
                        ) : (
                            <li key={item.id} className='text-lg font-Morabba cursor-pointer hover:text-blue-500 transition-all'>
                                {item.title}
                            </li>
                        )
                    ))
                }
            </ul>
        </div>
    )
}
