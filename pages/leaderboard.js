import summonerService from '../services/summoners'
import { useState, useEffect } from 'react'

import { motion } from "framer-motion"

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    summonerService
      .getBest25()
      .then((leadingSummoners) => {
        console.log(leadingSummoners.data)
        setLeaderboard(leadingSummoners.data)
      })
  }, [])

  return (
    <div className='bg-ikkiarBgGray2 flex-col justify-center h-screen mx-128 mt-10 rounded-md overflow-hidden'>

      <h2 className='text-2xl text-center'>
        Leaderboard
      </h2>

      <div className='flex-col w-auto p-10'>
        {leaderboard.map((s, idx) =>


            <motion.div whileHover={{ scale: 1.06 }} key={'leaderboard-summoner-' + idx} className='flex justify-center border-l-8 border-green rounded-l my-4 bg-ikkiarBgGray1'>

                {idx === 0 ? 
                <div className='flex py-1 my-1'>
                  <div className='flex'>
                    <div className='w-96'>
                      <h2 className='text-xl'>🥇{s.username} (MEGAMONKE 🐒👑)</h2>
                    </div>
                    <div className='w-40'>
                      <p className='text-xl text-center font-bold'>&nbsp;{s.points}💠&nbsp;</p>
                    </div>
                    <div className='w-24'>
                      <p className='text-xl text-center font-normal'>{s.wins}W&nbsp;{s.losses}L</p>
                    </div>
                  </div>
                </div>

                : 
                
                <div className='flex py-1 my-1'>
                    <div className='w-96'>
                      { idx === 1 || idx === 2 ? <h2 className='text-xl'>{idx ===1 ? '🥈' : '🥉'}{s.username} {idx === 1 ? '(APE APE 🐵)' : idx===2 ? '(SUPER APE 🐵)' : null}</h2> : <h2 className='text-xl'>🏅{s.username}</h2>}
                    </div>
                    <div className='w-40'>
                      <p className='text-xl text-center font-bold'>&nbsp;{s.points}💠&nbsp;</p>
                    </div>
                    <div className='w-24'>
                      <p className='text-xl text-center font-normal'>{s.wins}W&nbsp;{s.losses}L</p>
                    </div>
                  </div>
                }
            </motion.div>

        )}
      </div>
    </div>
  )
}

export default Leaderboard