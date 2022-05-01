const Match = require('../../models/match')
const { default: dbConnect } = require('../../services/dbConnect.js')


const handler = async (req, res) => {
    if(req.method === 'GET'){

        await dbConnect()

        if(req.url === '/api/matches'){
            console.log('going')
            const matches = await Match.find({})
            res.send(matches)
        }
    }
}

export default handler

