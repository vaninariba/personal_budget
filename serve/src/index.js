const express = require ('express')
const app = express()
const cors = require('cors')

//Settings
app.set('port', 3000)

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api',require('./routes/budget.routes'))

//Server
app.listen(app.get('port'))
console.log('Server on port', app.get('port'))

