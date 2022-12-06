import React from 'react'
import { BsArrowRight } from 'react-icons/bs'


const Card = (props) => {
    return (
        <div className='bg-white p-6 md:p-12 rounded-lg group transition duration-500 hover:bg-primary-400'>
            <div className='p-4 bg-primary-400 text-5xl inline-block rounded-full transition duration-500 group-hover:bg-white'>
                <div className='text-white transition duration-500 group-hover:text-primary-400'>{props.icon}</div>
            </div>
            <h4 className='text-3xl text-stone-800 font-bold mt-7 mb-2 transition duration-500 group-hover:text-white'>{props.sname}</h4>
            <p className='text-gray-700 transition duration-500 group-hover:text-gray-200'>{props.content}</p>
            <div className='flex gap-2 items-center mt-4'>
                <a href='#' className='uppercase font-semibold transition duration-500 group-hover:text-white'>Read More</a>
                <BsArrowRight className='text-lg font-medium transition duration-500 group-hover:text-white' />
            </div>
        </div>
    )
}

export default Card