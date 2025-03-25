import express from 'express'
import movieRoute from '../movie/routes/movieRoute.js'

const app = express()

app.use(express.json())
app.use('/', movieRoute)

app.listen(3000, () => {
    console.log('Server runs')
})