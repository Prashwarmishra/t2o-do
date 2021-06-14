const mongoose = require('mongoose');

//schema for creating a user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    //array containing ids of the task created by respective user
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        }
    ]
}, 
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;