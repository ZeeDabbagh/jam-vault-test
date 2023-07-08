const { Schema, model } = require('mongoose')

const concertSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        unique: true,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

const Concert = model('Concert', concertSchema)

module.exports = Concert;