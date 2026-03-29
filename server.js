const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const path = require('path')
const { MongoClient } = require('mongodb')

let dbConnection
const uri = 'mongodb+srv://liftingApp:password123!@lifting-app-db.o3bapio.mongodb.net/?appName=lifting-app-db'

app.use(cors())

MongoClient.connect(uri)
  .then(client => {
    dbConnection = client.db('lifting-app') // IMPORTANT
    app.listen(PORT, () => {
      console.log('Server running')
    })
  })
  .catch(err => console.log(err))

app.get('/api', (req, res) => {
    if (!dbConnection) {
        return res.status(500).send('DB not connected yet')
    }

    dbConnection.collection('lifts').find().toArray()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err)
        res.status(500).send('Error fetching data')
    })
})

app.get('/api/lifts', async (req, res) => {
    try{
        if (!dbConnection) {
            return res.status(500).send('DB not connected yet')
        }
        const liftsArray = await dbConnection.collection('lifts').find().toArray()

        const liftsObj = {}

        liftsArray.forEach(doc => {
            Object.entries(doc).forEach(([key, value]) => {
                if (key !== '_id') {
                    liftObj[key] = value
                }
            })
        })

        res.json(liftsObj)
    } catch (err) {
        console.error(err)
        res.status(500).send('Error fetching data')
    }
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/day1.html', (req, res)=>{
    res.sendFile(__dirname + '/day1.html')
})

app.get('/day2.html', (req, res)=>{
    res.sendFile(__dirname + '/day2.html')
})

app.get('/day3.html', (req, res)=>{
    res.sendFile(__dirname + '/day3.html')
})

app.get('/day4.html', (req, res)=>{
    res.sendFile(__dirname + '/day4.html')
})

app.get('/day5.html', (req, res)=>{
    res.sendFile(__dirname + '/day5.html')
})

app.get('/day6.html', (req, res)=>{
    res.sendFile(__dirname + '/day6.html')
})

app.get('/day7.html', (req, res)=>{
    res.sendFile(__dirname + '/day7.html')
})

app.get('/day8.html', (req, res)=>{
    res.sendFile(__dirname + '/day8.html')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})