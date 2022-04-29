const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()


app.use(
    express.urlencoded({
        extended: true,
    }),

)

app.use(express.json())


const calcRoutes = require('./routes/calcRoutes')

app.use('/calc', calcRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'Oi Express!' })

})


const DB_USER = 'root'
const DB_PASSWORD = encodeURIComponent('root')
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.cuy8h.mongodb.net/calc?retryWrites=true&w=majority`,)
    .then(() => {
        console.log('Conectado ao MongoDB')
        app.listen(3000)
    })
    .catch((error) => console.log(err))