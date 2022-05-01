const Match = require('../../models/match')
const Summoner = require('../../models/summoner')
const Queuer = require('../../models/queuer')
const { default: dbConnect } = require('../../services/dbConnect.js')


const handler = async (req, res) => {
        await dbConnect()
        const queuers = await Queuer.find({})
        res.status(200).json(queuers)
}

export default handler

