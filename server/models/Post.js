const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    media: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // concert: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Concert',
    //     required: true,
    // },
    votes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        defaultValue: Date.now()
    }
});

const Post = model('Post', postSchema)

module.exports = Post