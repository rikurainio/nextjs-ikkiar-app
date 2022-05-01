const mongoose = require('mongoose')

const schema = mongoose.Schema({
        gameData: { type: mongoose.Schema.Types.Mixed }
})

mongoose.promise = global.Promise

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.models.Match || mongoose.model('Match', schema)