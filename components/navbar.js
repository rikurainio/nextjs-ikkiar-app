import React from 'react'
import Link from 'next/link'

import { IoSunnySharp } from 'react-icons/io'
import { RiMoonFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center w-auto h-auto mt-10 px-10 sm:space-x-6'>

      <Link href='/'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full h-8 shadow-sm text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all md:w-52 my-5'>
        <h1 className="inline-block text-xl font-bold">
            🐒 Home
          </h1>
        </div>
      </Link>

      <Link href='/rules'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full h-8 shadow-sm border- text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all md:w-52 my-5'
        >
          <h1 className="inline-block text-xl font-semibold">
            📘 Queue rules
          </h1>
        </div>
      </Link>

      <Link href='/leaderboard'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full h-8 shadow-sm border- text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all md:w-52 my-5'>
          <h1 className="inline-block text-xl font-semibold">
            👑 Leaderboard
          </h1>
        </div>
      </Link>
     
      <Link href='/history'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full h-8 shadow-sm text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all md:w-52 my-5'>
        <h1 className="inline-block text-xl font-bold">
            📃 Match history
          </h1>
        </div>
      </Link>

      <Link href='/apply'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full h-8 shadow-sm text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all md:w-52 my-5'>
        <h1 className="inline-block text-xl font-bold">
            👆 Apply
        </h1>
        </div>
      </Link>

    </div>
  )
}

export default Navbar