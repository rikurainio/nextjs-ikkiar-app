const Match = require('../../models/match')
const Summoner = require('../../models/summoner')
const Queuer = require('../../models/queuer')
const { default: dbConnect } = require('../../services/dbConnect.js')

const handler = async (req, res) => {
        await dbConnect()
        const summoners = await Summoner.find({})
        res.status(200).json(summoners)
}

export default handler

