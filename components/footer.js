import React from 'react'
import { SiTwitter } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='flex h-24 mt-16 w-full justify-center'> 
      <div className='flex-col'>
        <div className='flex justify-center'>
          <a className='cursor-pointer text-2xl'>
            <SiTwitter></SiTwitter>
          </a>
        </div>
        <div className='flex justify-center'>
          <a className='cursor-pointer'>
            <p>@RhanLoL</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer