import React from 'react'
import profile from '../farid.jpg';
import { TypeAnimation } from 'react-type-animation';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

export default function Main() {
  return (
    <>
      <div id='main'>
      <img src={profile} alt='' className='w-full h-screen object-cover object-left scale-x-[-1]'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
      <div className='max-w-[500px] mx-auto h-full flex flex-col lg:items-start items-center justify-center'>
      <h1 className='sm:text-5xl text-4xl font-bold text-gray-900'>I'm Awadhesh Yadav</h1>
      <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 font-semibold'>I'm a  <TypeAnimation
      sequence={[
       
        'Front-end Developer.',
        1000, 
        'Software Developer.',
        1000,
        'Coder.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px' }}
      repeat={Infinity}
    />
       </h2>
       <div className='flex justify-between pt-6 w-full max-w-[200px]'>
        <FaTwitter size={25} className='cursor-pointer'/>
        <FaFacebook size={25} className='cursor-pointer'/>
        <FaInstagram size={25} className='cursor-pointer'/>
        <FaLinkedin size={25} className='cursor-pointer'/>
       </div>
       </div>
      </div>

      </div>
    </>
  )
}
