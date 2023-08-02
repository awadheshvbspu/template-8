import React from 'react'

export default function Contact() {
  return (
    <>
        <div id='contact' className='max-w-[1040px] mx-auto md:pl-20 py-16 md:px-0 px-4'>
         <h1 className='text-4xl py-4 font-bold text-center text-[#001b5e]'>Contact</h1>
         <form action='https://getform.io/f/64f6a30b-dbd9-4439-afa7-ec454aef6853' method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input type='text' name='name' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input type='number' name='phone number' className='border-2 rounded-lg p-3 flex border-gray-300' />
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input type='email' name='email' className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input type='text' name='subject' className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea rows='10'  name='message' className='border-2 rounded-lg p-3 flex border-gray-300'></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Send Message</button>
         </form>
        </div>
    </>
  )
}
