import { useEffect, useState } from 'react'
import matchService from '../services/matches'

import { motion } from "framer-motion"
import { getChampionImageSource, getChampionNameById } from '../services/champion'

const History = () => {
  const [matches, setMatches] = useState([])






  useEffect(async () => {
    const matches = await matchService.getAll()
    setMatches(matches)
  }, [])


  const getTimeStamp = (asd) => {
    const time = new Date(asd)
    let month = time.getMonth() + 1
    let day = time.getDate()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    
    day = day.toString().length < 2 ? "0" + day.toString() : day.toString()
    month = month.toString().length < 2 ? "0" + month.toString() : month.toString()
    hour = hour.toString().length < 2 ? "0" + hour.toString() : hour.toString()
    minute = minute.toString().length < 2 ? "0" + minute.toString() : minute.toString()
    second = second.toString().length < 2 ? "0" + second.toString() : second.toString()

    const timeStamp = day + '/' + month + ' ' + hour + ':' + minute
    const returnText = timeStamp.toString()
    return returnText
}

  console.log('setmatches',matches)

  return (
    <div className='bg-ikkiarBgGray2 flex-col justify-center h-screen mx-128 mt-10 rounded-md overflow-hidden'>
      <div className=''>
        <h2 className='text-2xl text-center'>
          Match history
        </h2>

        <div className='flex-col'>
          {matches.map((match, idx) => 
            <motion.div whileHover={{ scale: 1.00 }}  key={'leaderboard-summoner-' + idx} className='flex justify-end w-auto h-auto border-l-8  border-green rounded-l py-2 my-3 bg-ikkiarBgGray1'>

            <div className='flex-col'>
              <div>
                {getTimeStamp(match.gameData.info.gameCreation)}
              </div>
              <div>
                {(match.gameData.info.gameDuration / 60).toFixed()} minutes 
              </div>
            </div>

           
            <div className='flex-col shadow-sm'>
                <div className='flex justify-between mx-1'>
                  <div className='flex'>
                    {match.gameData.info.teams['0'].bans.map(ban => 
                      <div className=''>
                        <img className='object-scale-down w-6 rounded-none' src={getChampionImageSource(getChampionNameById(ban.championId))}></img>
                      </div>
                      )}
                  </div>
                  <div className='flex'>
                    {match.gameData.info.teams['1'].bans.map(ban => 
                      <div>
                        <img className='object-scale-down w-6 rounded-none' src={getChampionImageSource(getChampionNameById(ban.championId))}></img>
                      </div>
                      )}
                  </div>
                </div>

                <div className='flex'>
                  <div>
                    {match.gameData.info.participants.filter(p => p.teamId === 100).map(participant =>
                      <div className='flex p-1'>
                            <img className='object-scale-down w-14 rounded-none border-l-8 border-blue' src={getChampionImageSource(participant.championName)}></img>
                            <div className='w-32 text-center'>
                              <p>{participant.summonerName}</p>
                            </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {match.gameData.info.participants.filter(p => p.teamId === 200).map(participant =>
                      <div className='flex p-1'>
                            <div className='w-32 text-center'>
                              <p>{participant.summonerName}</p>
                            </div>
                            <img className='object-scale-down w-14 rounded-none border-r-8 border-red' src={getChampionImageSource(participant.championName)}></img>
                      </div>
                    )}
                  </div>
                </div>
            </div>

           
           
          </motion.div>

          
            
          )}
        </div>

      </div>
    
    
    </div>
  )
}

export default History