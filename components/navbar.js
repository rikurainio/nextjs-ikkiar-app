import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-center space-x-10 mt-16'>

      <Link href='/leaderboard'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full w-52 h-8 shadow-sm border- text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all'>
          <h1 className="text-xl font-semibold">
            🐵 Leaderboard
          </h1>
        </div>
      </Link>
      <Link href='/'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full w-52 h-8 shadow-sm text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all'>
        <h1 className="text-xl font-bold">
            🐒 Home
          </h1>
        </div>
      </Link>
      <Link href='/history'>
        <div className='cursor-pointer bg-ikkiarBright rounded-full w-52 h-8 shadow-sm text-center hover:scale-105 hover:bg-ikkiarDark2 transition-all'>
        <h1 className="text-xl font-bold">
            🙈 Match history
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default Navbar