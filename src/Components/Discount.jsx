import React from 'react'

export default function Discount() {
    return (
        <div className='mt-8 border-y-2 py-5 border-zinc-200 shadow-lg'>
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <img src="./image/svg/discount.png" className='w-12 h-12' alt="" />
                    <h2 className='text-3xl'>تخفیفات ویژه به مناسبت تولد <span className='text-blue-500 font-semibold'>آرتیزا</span> </h2>
                </div>
                <div className="flex items-center gap-x-4">
                    <p className='text-lg'>مانده به پایان تخفیف : </p>
                    <div className="flex items-center gap-x-2">
                        <span className='w-10 h-10 bg-blue-500 rounded-md text-blue-50 flex items-center justify-center font-Dana-Bold text-lg'>43</span>
                        <p className='text-2xl'>:</p>
                        <span className='w-10 h-10 bg-blue-500 rounded-md text-blue-50 flex items-center justify-center font-Dana-Bold text-lg'>0</span>
                        <p className='text-2xl'>:</p>
                        <span className='w-10 h-10 bg-blue-500 rounded-md text-blue-50 flex items-center justify-center font-Dana-Bold text-lg'>3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
