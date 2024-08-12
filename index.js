const express = require('express')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()


//rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 60, //15 mins
    max: 5,
  });

app.use(limiter)
app.set('trust proxy', 1)

//static folder
app.use(express.static('public'))

//Routes
app.use('/api', require('./routes'))

//enabble cors

app.use(cors())

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))

