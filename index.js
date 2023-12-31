require('dotenv').config()
const express = require('express')
const UserRoute = require('./routes/users')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/Users',UserRoute)

app.get('/',(req,res)=>{
    res.send('<h1>Welcome</h1>')
})

app.listen(PORT, ()=>console.log(`App is running in port ${PORT}`))