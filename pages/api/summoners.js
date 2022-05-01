const Summoner = require('../../models/summoner')
const { default: dbConnect } = require('../../services/dbConnect.js')


const handler = async (req, res) => {
    if(req.method === 'GET'){

        await dbConnect()

        if(req.url === '/api/summoners'){
            console.log('going')
            const summoners = await Summoner.find({})
            res.send(summoners)
        }
    }
}

export default handler

