import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

export default function Search() {
    // State to manage input visibility
    const [inputActive, setInputActive] = useState(false);

    // Function to toggle input visibility
    const ShowInputHandler = () => {
        setInputActive(!inputActive);
    };

    return (
        <>
            {
                // Conditionally render input field and search icon based on inputActive state
                inputActive ? (
                    <div className="w-[40rem] relative bg-gray-100 px-4  rounded-t-lg ">
                        <input
                            type="text"
                            className='outline-none border-non bg-zinc-100 w-full py-2 '
                            placeholder='محصول مورد نظر خود را جست جو کنید'
                        />
                        <CloseOutlinedIcon
                            onClick={ShowInputHandler}
                            className='absolute left-4 top-2 text-zinc-400 cursor-pointer'
                        />

                        <div className="absolute w-full p-4 h-28 bg-gray-100 left-0 ring-0 rounded-b-lg border-t-2 border-t-blue-500">
                            <span className='flex items-center gap-x-2'>
                                <WhatshotOutlinedIcon className='text-zinc-400 ' />
                                <p>جستجوهای پرطرفدار</p>
                            </span>

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
