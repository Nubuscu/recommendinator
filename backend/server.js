const express = require('./config/express')
const PORT = 4941

const app = express()

app.listen(PORT, function() {
    console.log('listening on port ' + PORT)
})