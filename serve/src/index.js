const express = require ('express')
const app = express()

//Settings
app.set('port', 3000)

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api',require('./routes/budget.routes'))

//Server
app.listen(app.get('port'))
console.log('Server on port', app.get('port'))

