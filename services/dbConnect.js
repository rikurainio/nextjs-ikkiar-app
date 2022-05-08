const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

const dbConnect = async () => {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
}

export default dbConnect