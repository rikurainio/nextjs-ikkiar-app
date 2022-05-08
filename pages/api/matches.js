const Match = require('../../models/match')
const { default: dbConnect } = require('../../services/dbConnect.js')


const handler = async (req, res) => {
        await dbConnect()
        const matches = await Match.find({})
        res.status(200).json(matches)
}

export default handler

