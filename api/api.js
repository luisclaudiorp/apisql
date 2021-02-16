const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('../routes/routes')
const { json } = require('body-parser')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

const port = 5000

app.listen(process.env.PORT || port, (err) => {
    if (err)
        console.log('Unable to start the server!')
    else
        console.log('Server started running on: ' + port)
})