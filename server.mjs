import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000;
let user= [];


app.post('/user', (req, res) => {
    console.log(req.body)
    user.push(req.body)
    res.send('user is created')
})


app.get('/user', (req, res) => {
    res.send(user)
})
app.put('/user', (req, res) => {
    res.send('Hello World!')
})
app.delete('/user', (req, res) => {
    res.send('Hello World!')
})
app.get('/user', (req, res) => {
    res.send('Hello World!')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})