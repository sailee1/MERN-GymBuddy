require('dotenv').config()
const express = require ('express')
const colors = require('colors');
const connectDB = require('./config/db')

connectDB();

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})