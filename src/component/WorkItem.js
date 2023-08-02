import React from 'react'

export default function WorkItem({title,duration,year,details}) {
  return (
    <div>
     <ul className='flex flex-col md:flex-row relative border-l border-stone-200'>
     <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs'>
            <span className='bg-[#00165e] inline-block px-2 font-semibold text-white rounded-md p-1 '>{year}</span>
            <span className='text-lg font-semibold text-[#00165e]'>{title}</span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
        </p>
            <span className='my-2 text-base font-normal text-stone-500'>{details}</span>
     </li>

     </ul> 
    </div>
  )
}
