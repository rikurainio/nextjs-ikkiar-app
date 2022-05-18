import { useEffect, useState } from 'react'
import matchService from '../services/matches'
import { RiSwordFill } from 'react-icons/ri';
import { GiBrute, GiCornerExplosion } from 'react-icons/gi'
import { motion } from "framer-motion"
import { getChampionImageSource, getChampionNameById } from '../services/champion'
import RotateLoader from "react-spinners/RotateLoader";
import match from '../models/match';
import Togglable from '../components/toggleable';

const History = () => {
  const [loading, setLoading] = useState(true)
  const [matches, setMatches] = useState([{}])
  // true = blue win, false = red win
  const [winner, setWinner] = useState(true)

  useEffect(() => {
    matchService
      .getAll()
      .then((matches) => {
        setMatches(matches.data)
        setLoading(false)
      })


  }, [])

  console.log('matches: ', matches)

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

  const getTextRuleWin = (summoner) => {
    if(summoner.TEAM === '100' && summoner.WIN !== "Fail"){
      return 'Blue Win'
    }
    return 'Red Win'
  }

  const getCssRuleWin = (summoner) => {
    if(summoner.TEAM === '100' && summoner.WIN !== "Fail"){
      return ' text-blue'
    }
    return ' text-red'
  }

  const getBlueTeamSummoners = (statsJson) => {
    return statsJson.filter(summoner => summoner.TEAM === "100")
  }

  const getRedTeamSummoners = (statsJson) => {
    return statsJson.filter(summoner => summoner.TEAM === "200")
  }

  const getTeamKills = (teamSummonersArr) => {
    let teamKills = 0
    teamSummonersArr.forEach(summoner => {
      teamKills += parseInt(summoner.CHAMPIONS_KILLED)
    })
    return teamKills
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
      <div className='bg-ikkiarBgGray2 flex-col justify-center mt-10 rounded-md overflow-hidden h-full'>

          <h2 className='text-3xl font-bold text-center pt-5'>
            Match history
          </h2>

          <div className='flex justify-center sm:hidden'>
            asd
          </div>


          <div className='flex justify-center invisible sm:visible'>
                  <div className='flex-col'>
                    {matches.reverse().map((match, idx) => 
                      <motion.div whileHover={{ scale: 1.03 }} key={'leaderboard-summoner-' + idx} className={'flex-col justify-end border-l-8 border-green rounded-l py-1 my-8 bg-ikkiarBgGray1'}>

                        <div className='flex'>
                            <div className='flex-col pr-2 border-r border-grayDetailText mr-3 ml-3'>
                            <div className='truncate'>
                              {getTimeStamp(match.gameData.createdAt)}
                            </div>
                            <div className='truncate'>
                              {((match.gameData.gameLength) / 60000 ).toFixed(0)} minutes 
                            </div>
                            <div className='truncate text-grayDetailText text-xs font-thin'>
                              ver:{match.gameData.gameVersion}
                            </div>
                            <div className={getCssRuleWin(match.gameData.statsJson[0])}>
                              {getTextRuleWin(match.gameData.statsJson[0])}
                            </div>
                            </div>

                            {/*TEAMS' TOTAL KILLS*/}
                            <div className='flex-col pr-3'>
                              <p className='text-blue text-lg'>{getTeamKills(getBlueTeamSummoners(match.gameData.statsJson))}</p>
                              <RiSwordFill className='text-xl'></RiSwordFill>
                              <p className='text-red text-lg'>{getTeamKills(getRedTeamSummoners(match.gameData.statsJson))}</p>
                            </div>
                                
                            <div className='flex-col'>
                                  <div className='flex'>
                                    <div className='flex mr-4'>
                                      {match.gameData.statsJson.filter(p => p.TEAM === "100").map((participant, idx) =>
                                              <div key={'blue-summoner-'+idx} className='flex-row mr-1'>
                                                    <img className='object-scale-down w-14 rounded-none border-l-8 border-blue' src={getChampionImageSource(participant.SKIN)}></img>
                                                    <div className='w-14 text-left text-xs truncate'>
                                                      <p>{participant.NAME}</p>
                                                    </div>
                                              </div>
                                        )}
                                    </div>
                                    <div className='flex'>
                                      {match.gameData.statsJson.filter(p => p.TEAM === "200").map((participant, idx) =>
                                              <div key={'red-summoner-'+idx} className='flex-row mr-1'>
                                                    <img className='object-scale-down w-14 rounded-none border-r-8 border-red' src={getChampionImageSource(participant.SKIN)}></img>
                                                    <div className='w-14 text-left text-xs truncate'>
                                                      <p>{participant.NAME}</p>
                                                    </div>
                                              </div>
                                        )}
                                    </div>
                                  </div>
                            </div>
                        </div>
                      
                        <Togglable buttonLabel='show details'>
                            <hr className='mx-3 opacity-40'></hr>
                            <div className='flex-col justify-center content-center text-center w-auto h-auto'>
                              <div className='flex justify-center w-auto h-auto mt-5'>
                                <div className='w-full h-full'>
                                  {getBlueTeamSummoners(match.gameData.statsJson).map((bs => 
                                    <div>
                                      
                                      <div className='flex-col mt-4'>
                                        <div className='flex justify-center'>
                                          <p className='font-bold'>{bs.NAME}</p>
                                          <p className='ml-2'>LVL {bs.LEVEL}</p>
                                          <p className='ml-2'>{bs.CHAMPIONS_KILLED}/{bs.NUM_DEATHS}/{bs.ASSISTS}</p>
                                        </div>
                                        <div>({bs.MINIONS_KILLED} <GiBrute className='inline-block mb-1' />)  {(parseInt(bs.TOTAL_DAMAGE_DEALT_TO_CHAMPIONS)/1000).toFixed(1)}K <GiCornerExplosion className='inline-block mb-1 text-lg'/></div>
                                      </div>
                                    
                                    <div className='flex justify-center'>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM0 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM1 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM2 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM3 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM4 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM5 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM6 +'.png'}></img>
                                    </div>
                                    
                                    </div>
                                  ))}
                                </div>
                                <div className='w-full h-full'>
                                {getRedTeamSummoners(match.gameData.statsJson).map((bs => 
                                    <div>

                                      <div className='flex-col mt-4'>
                                        <div className='flex justify-center'>
                                          <p className='font-bold'>{bs.NAME}</p>
                                          <p className='ml-2'>LVL {bs.LEVEL}</p>
                                          <p className='ml-2'>{bs.CHAMPIONS_KILLED}/{bs.NUM_DEATHS}/{bs.ASSISTS}</p>
                                        </div>
                                        <div>({bs.MINIONS_KILLED} <GiBrute className='inline-block mb-1' />)  {(parseInt(bs.TOTAL_DAMAGE_DEALT_TO_CHAMPIONS)/1000).toFixed(1)}K <GiCornerExplosion className='inline-block mb-1 text-lg'/></div>
                                      </div>

                                    
                                    <div className='flex justify-center'>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM0 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM1 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM2 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM3 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM4 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM5 +'.png'}></img>
                                      <img className='object-contain w-12 border' alt='' src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/item/' + bs.ITEM6 +'.png'}></img>
                                    </div>
                                    
                                    </div>  
                                  ))}
                                </div>
                              </div>
                            </div>
                        </Togglable>

                    </motion.div>
                      
                    )}
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