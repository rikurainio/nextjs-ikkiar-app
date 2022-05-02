import { useEffect, useState } from 'react'
import matchService from '../services/matches'
import { RiSwordFill } from 'react-icons/ri';
import { motion } from "framer-motion"
import { getChampionImageSource, getChampionNameById } from '../services/champion'
import RotateLoader from "react-spinners/RotateLoader";

const History = () => {
  const [loading, setLoading] = useState(true)
  const [matches, setMatches] = useState([])
  const [winner, setWinner] = useState(0)

  useEffect(async () => {
    const matches = await matchService.getAll()
    setMatches(matches)
    setLoading(false)
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

  const getWinnerText = (team) => {
    if(team.teamId === 100 && team.win === true){
      return 'Blue'
    }
    return 'Red'
  }

  const getCssRuleWin = (team) => {
    if(team.teamId === 100 && team.win === true){
      return ' text-blue'
    }
    else{
      return ' text-red'
    }
  }

  const getCssRuleWinBorder = (team) => {
    if(team.teamId === 100 && team.win === true){
      return ' border-blue'
    }
    else{
      return ' border-red'
    }
  }

  if(!loading){

    if(matches.length < 1){
      return (
        <div className='bg-ikkiarBgGray2 flex-col justify-center h-screen mt-10 rounded-md overflow-hidden'>
          <div className='flex justify-center pt-52'>
            <h1 className='text-2xl font-bold'>No matches played yet</h1>
          </div>
        </div>
      )
    }
    return (
      <div className='bg-ikkiarBgGray2 flex-col justify-center mt-10 rounded-md overflow-hidden'>

        <div className=''>
          <h2 className='text-2xl text-center pt-5'>
            Match history
          </h2>

          <div className='flex justify-center'>
                  <div className='flex-col p-6'>
                    {matches.map((match, idx) => 
                      <motion.div whileHover={{ scale: 1.03 }}  key={'leaderboard-summoner-' + idx} className={'flex justify-end border-l-8 border-green rounded-l py-2 my-10 bg-ikkiarBgGray1'}>

                      <div className='flex-col pr-2 border-r border-grayDetailText mr-3 ml-3'>
                        <div className='truncate'>
                          {getTimeStamp(match.gameData.info.gameCreation)}
                        </div>
                        <div className='truncate'>
                          {(match.gameData.info.gameDuration / 60).toFixed()} minutes 
                        </div>
                        <div className={'truncate font-extralight' + getCssRuleWin(match.gameData.info.teams[0])}>
                          {getWinnerText(match.gameData.info.teams[0])} Win 
                        </div>
                        <div className='truncate text-grayDetailText text-xs font-thin'>
                          ver:{match.gameData.info.gameVersion}
                        </div>
                      </div>

                      <div className='flex-col pr-3'>
                        <p className='text-blue text-lg'>{match.gameData.info.teams[0].objectives.champion.kills}</p>
                        <RiSwordFill className='text-xl'></RiSwordFill>
                        <p className='text-red text-lg'>{match.gameData.info.teams[0].objectives.champion.kills}</p>
                      </div>
                    
                      <div className='flex-col'>
                            <div className='flex'>
                              <div className='flex mr-4'>
                                {match.gameData.info.participants.filter(p => p.teamId === 100).map((participant, idx) =>
                                        <div key={'blue-summoner-'+idx} className='flex-row mr-1'>
                                              <img className='object-scale-down w-14 rounded-none border-l-8 border-blue' src={getChampionImageSource(participant.championName)}></img>
                                              <div className='w-14 text-left text-xs truncate'>
                                                <p>{participant.summonerName}</p>
                                              </div>
                                        </div>
                                  )}
                              </div>
                              <div className='flex'>
                                {match.gameData.info.participants.filter(p => p.teamId === 200).map((participant, idx) =>
                                        <div key={'red-summoner-'+idx} className='flex-row mr-1'>
                                              <img className='object-scale-down w-14 rounded-none border-r-8 border-red' src={getChampionImageSource(participant.championName)}></img>
                                              <div className='w-14 text-left text-xs truncate'>
                                                <p>{participant.summonerName}</p>
                                              </div>
                                        </div>
                                  )}
                              </div>
                            </div>
                        <div className='flex justify-between'>
                              <div className='flex m-1'>
                                {match.gameData.info.teams['0'].bans.map((ban, idx) => 
                                  <div key={'blue-ban-'+idx}>
                                    <img className='object-scale-down w-6 rounded-none' src={getChampionImageSource(getChampionNameById(ban.championId))}></img>
                                  </div>
                                  )}
                              </div>
                              <div className='flex m-1'>
                                {match.gameData.info.teams['1'].bans.map((ban, idx) => 
                                  <div key={'red-ban-'+idx} >
                                    <img className='object-scale-down w-6 rounded-none' src={getChampionImageSource(getChampionNameById(ban.championId))}></img>
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
      </div>
    )
  }
  return (
    <div className='bg-ikkiarBgGray2 flex-col justify-center h-screen mt-10 rounded-md overflow-hidden'>
      <div className='flex justify-center pt-52'>
        <RotateLoader></RotateLoader>
      </div>
    </div>
  )
}

export default History