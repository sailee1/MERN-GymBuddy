const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
   
    title: {
       type: String, 
       required: true,
   },
    reps:{
        type: String, 
        require: true
    },
    load:{
        type: Number, 
        require: true
    },
    user_id: {
        type: String,
        require: true
    }
},{
    timestamps: true 
})

module.exports = mongoose.model('Workout', workoutSchema)