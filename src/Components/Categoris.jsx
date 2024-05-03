import React from 'react'
import { Categories } from '../Constant/index'
import { Fade } from 'react-reveal'
export default function Categoris() {
    return (
        <div className='container flex items-center justify-between mt-8'>
            {
                Categories.map(item => (
                    <div key={item.id} className="w-32 h-32 shadow-lg p-4 flex flex-col gap-y-2 items-center justify-center  rounded-lg cursor-pointer hover:bg-zinc-300 hover:-translate-y-4 transition-all ease-in-out delay-75">
                        <img className='w-16 h-16' src={item.img} alt="" />
                        <p className='text-lg'>{item.title}</p>
                    </div>
                ))
            }
        </div>
    )
}