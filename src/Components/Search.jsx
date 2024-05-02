import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Categories } from "../Constant";



export default function Search() {
    // State to manage input visibility
    const [inputActive, setInputActive] = useState(false);

    // Function to toggle input visibility
    const ShowInputHandler = () => {
        setInputActive(!inputActive);
    };

    // for search input
    const [query, setQuery] = useState(true)


    return (
        <>
            {
                // Conditionally render input field and search icon based on inputActive state
                inputActive ? (
                    <div className="w-[40rem] relative bg-gray-100 px-4  rounded-t-lg ">
                        <input
                            type="text"
                            className='outline-none border-non bg-zinc-100 w-full py-2 text-zinc-900 '
                            placeholder='محصول مورد نظر خود را جست جو کنید'
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <CloseOutlinedIcon
                            onClick={ShowInputHandler}
                            className='absolute left-4 top-2 text-zinc-400 cursor-pointer'
                        />

                        <div className="absolute w-full p-4  z-50 bg-gray-100 left-0 ring-0 rounded-b-lg border-t-2 border-t-blue-500 shadow-lg">
                            <span className='flex items-center gap-x-2'>
                                <WhatshotOutlinedIcon className='text-zinc-400 ' />
                                <p>جستجوهای پرطرفدار</p>
                            </span>

                            {/* popular search list */}
                            <ul className='flex mt-4 gap-x-2'>

                                <li className='border-2 border-zinc-600 rounded-full py-1 px-4 flex items-center justify-center cursor-pointer transition-all'>
                                    تیشرت
                                    <KeyboardArrowLeftOutlinedIcon />
                                </li>
                                <li className='border-2 border-zinc-600 rounded-full py-2 px-5 flex items-center justify-center cursor-pointer transition-all'>
                                    کفش
                                    <KeyboardArrowLeftOutlinedIcon />
                                </li>
                            </ul>


                            {/* results search list */}
                            <ul className='mt-4 text-zinc-700 list-disc	 p-4 text-lg flex flex-col gap-y-2 '>
                                {
                                    query ? (
                                        Categories.filter(item => item.title.toLocaleLowerCase().includes(query)).map(item => (
                                            <li key={item.id} className='cursor-pointer hover:text-zinc-900 transition-all'>
                                                {item.title}
                                            </li>
                                        ))
                                    ) : (
                                        <li className='cursor-pointer hover:text-zinc-900 transition-all'>
                                            نتیجه‌ای یافت نشد
                                        </li>
                                    )
                                }
                            </ul>

                        </div>
                    </div>
                ) : (
                    <div className="relative w-[40rem]  bg-gray-100 px-4 hover:shadow rounded-lg" onClick={ShowInputHandler}>
                        <input
                            type="text"
                            className='outline-none border-non bg-zinc-100 w-full py-2 '
                            placeholder='محصول مورد نظر خود را جست جو کنید'
                        />
                        <SearchRoundedIcon
                            className='absolute left-4 top-2 text-zinc-400 cursor-pointer'
                        />
                    </div>
                )
            }
        </>
    );
}
