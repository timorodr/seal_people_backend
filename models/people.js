const mongoose = require('./connection') // configuring to our connection mongoose 

const PeopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
})

const People = mongoose.model("People", PeopleSchema)

module.exports = People


// THE MODEL TALKS TO THE DB