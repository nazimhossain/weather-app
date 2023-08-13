const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/api/history', require('./api/route'))

// app.get('/', (req, res) => {
//     res.send('<h1>Hello I Am Node Server. I am Running on PORT 4444</h1>')
// })


const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
    console.log('app is running on PORT '  +  PORT)
   mongoose.connect(`mongodb+srv://najim:spiderman55599@cluster0.204gyzv.mongodb.net/weather-api?retryWrites=true&w=majority`)
   console.log('database is connected')
   })
   
