import mongoose from 'mongoose'

const matchSchema = new mongoose.Schema({
        gameData: { type: mongoose.Schema.Types.Mixed }
})

mongoose.promise = global.Promise

matchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

console.log('M:', mongoose.models)
mongoose.models = {};

module.exports = mongoose.model('Match', matchSchema)