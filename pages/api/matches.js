const Match = require('../../models/match')
const Summoner = require('../../models/summoner')
const Queuer = require('../../models/queuer')
const { default: dbConnect } = require('../../services/dbConnect.js')


const handler = async (req, res) => {
        await dbConnect()
        const matches = await Match.find({})
        res.status(200).json(matches)

        if(req.url === '/api/summoners'){
            const summoners = await Summoner.find({})
            res.json(summoners)
        }
}

export default handler

