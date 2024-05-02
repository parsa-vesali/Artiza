import React from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



export default function ShopingCart() {
    return (
        <div className='group relative '>
            <button className='  flex items-center gap-x-2 bg-zinc-700 text-gray-100 hover:bg-blue-500 py-2 px-4 rounded-lg transition-all'>
                <span>
                    <LocalMallOutlinedIcon />
                </span>
                سبد خرید
            </button>

            <div className="absolute left-0 px-5 duration-300  transition-all delay-100 ease-in-out  gap-y-2 w-[400px]  bg-white shadow-lg rounded-lg py-2 border-t-4 border-blue-500 opacity-0 invisible top-20  group-hover:opacity-100  group-hover:visible group-hover:top-12">
                <div className="flex items-center justify-between">
                    <p className='text-gray-400 text-xs'> 1 مورد</p>
                    <span className='text-xs text-blue-500 cursor-pointer'>
                        مشاهده سبد خرید
                        <KeyboardArrowLeftIcon style={{ fontSize: '20px' }} />
                    </span>
                </div>
                <div className="flex items-start mt-5 text-zinc-800 pb-5 border-b border-gray-300">
                    <img className=' w-28 h-28 object-cover' src="./image/products/p-1.jpg" alt="" />
                    <div className="flex flex-col gap-y-6">
                        <p className=''>
                            قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </p>

                        <div className="">
                            <p className='text-xs text-blue-500'>
                                <span className='font-Dana-bold'>12%</span>  تخفیف ویژه
                            </p>
                            <span className='flex items-center gap-x-1'>
                                <p className='font-Dana-Bold text-lg'>175,000</p>
                                <p className='text-base'> تومان</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-start mt-5 text-zinc-800 pb-5 border-b border-gray-300">
                    <img className=' w-28 h-28 object-cover' src="./image/products/p-1.jpg" alt="" />
                    <div className="flex flex-col gap-y-6">
                        <p className=''>
                            قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </p>

                        <div className="">
                            <p className='text-xs text-blue-500'>
                                <span className='font-Dana-bold'>12%</span>  تخفیف ویژه
                            </p>
                            <span className='flex items-center gap-x-1'>
                                <p className='font-Dana-Bold text-lg'>175,000</p>
                                <p className='text-base'> تومان</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <div>
                        <p className='text-xs text-gray-400'>مبلغ قابل پرداخت</p>
                        <span className='flex items-center gap-x-1 mt-1'>
                            <p className='font-Dana-Bold text-lg'>350,000</p>
                            <p className='text-base'> تومان</p>
                        </span>
                    </div>

                    <button className='text-lg py-2 px-5 bg-blue-600 text-blue-50 rounded-lg hover:bg-sky-400   transition-all ease-in-out  '>ثبت سفارش</button>
                </div>
            </div>

        </div>
    )
}
