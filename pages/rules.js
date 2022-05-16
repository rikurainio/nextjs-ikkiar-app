import summonerService from '../services/summoners'
import { useState, useEffect } from 'react'
import RotateLoader from "react-spinners/RotateLoader";
import { motion } from "framer-motion"

const Rules = () => {
    return (
        <div className='bg-ikkiarBgGray2 flex-col justify-center mt-10 rounded-md overflow-hidden h-screen px-10'>
 
        <div className='flex justify-center'>
            <div className='flex-col justify-center'>
                <h1 className="text-3xl font-bold pt-5 text-center">
                    Rules
                </h1>
                <div className='flex justify-center pt-5 text-lg'>
                    Ikkiar queue was created with the intention to get good quality inhouse games
                    <br></br>
                    where every player is trying to win. To play in the queue one's values must
                    <br></br>
                    align with the following guidelines/ruleset:


                    

                </div>
                <div className='flex justify-center mt-10 text-lg px-4'>
                    <ul className='list-disc'>
                        <li>
                            Queue to your main role
                        </li>
                        <li>
                            Try your hardest in the games
                        </li>
                        <li>
                            Trolling, toxicity & unsportsmanlike behavior is not tolerated
                        </li>
                    </ul>
                </div>
            </div>
         </div>

        </div>
    )
}

export default Rules