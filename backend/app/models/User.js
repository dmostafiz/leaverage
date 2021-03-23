const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require:true,
        unique:true
    },
    email:{
        type: String,
        require:true,
        unique:true   
    },
    user_type:{
        type: String,
        require:true  
    },
    password:{
        type: String,
        require:true
    },
    profile:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
     },
})

userSchema.set('timestamps', true)

module.exports = mongoose.model('User', userSchema)