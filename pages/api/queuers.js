const Queuer = require('../../models/queuer')
const { default: dbConnect } = require('../../services/dbConnect.js')


const handler = async (req, res) => {
    if(req.method === 'GET'){

        await dbConnect()

        if(req.url === '/api/queuers'){
            console.log('going')
            const queuers = await Queuer.find({})
            res.send(queuers)
        }
    }
}

export default handler

