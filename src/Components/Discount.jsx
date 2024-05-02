import React, { useState, useEffect } from 'react';

export default function Discount() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isDiscountExtended, setIsDiscountExtended] = useState(false);

    useEffect(() => {
        const endDate = new Date('2024-05-10T00:00:00'); // تاریخ پایان تخفیف

        const countdown = setInterval(() => {
            const now = new Date().getTime();
            let difference = endDate - now;

            if (difference <= 0) {
                clearInterval(countdown);
                // مدت زمان تخفیف به پایان رسیده است
                if (!isDiscountExtended) {
                    // اگر تخفیف تمدید نشده است، متغیرهای زمان را به 24 ساعت تنظیم کنید و تخفیف را تمدید کنید
                    difference = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
                    setIsDiscountExtended(true);
                } else {
                    // اگر تخفیف تمدید شده است، اینجا می‌توانید اقدامات دیگری را انجام دهید
                }
            }

            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => clearInterval(countdown);
    }, [isDiscountExtended]);

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
                        <span className='w-10 h-10 bg-blue-500 rounded-md text-blue-50 flex items-center justify-center font-Dana-Bold text-lg'>{seconds}</span>
                        <p className='text-2xl'>:</p>
                        <span className='w-10 h-10 bg-blue-500 rounded-md text-blue-50 flex items-center justify-center font-Dana-Bold text-lg'>{minutes}</span>
                        <p className='text-2xl'>:</p>
                        <span className='w-10 h-10 bg-blue-500 rounded-md text-blue-50 flex items-center justify-center font-Dana-Bold text-lg'>{hours}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
