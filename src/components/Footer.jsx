import React from 'react'
import logo from '../assets/images/Logo.svg'

function Footer() {
  return (
    <div className='mx-auto container'>
      <div className='ml-16'>
        <hr />
       <div className='mt-10 mb-10'>
       <img src={logo} alt="" />
       <p className='mt-2'>Copyright © 2021 BRIX Templates | All Rights Reserved</p>
       <div className="flex w-full max-w-md -mt-14 ml-[800px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 h-16 border border-gray-300 rounded-full bg-white text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white p-3 w-32 absolute ml-[300px] mt-[7px] rounded-full hover:bg-blue-700">
            Subscribe
          </button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Footer