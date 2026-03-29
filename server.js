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
    dbConnection = client.db('lifts') // IMPORTANT
    app.listen(PORT, () => {
      console.log('Server running')
    })
  })
  .catch(err => console.log(err))

app.get('/api', (req, res) => {
    dbConnection.collection('lifting-app-db').find().toArray()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err)
        res.status(500).send('Error fetching data')
    })
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

// const lifts = {
//     'slight-incline-db-press': {
//         'Max': 0
//     },
//     'seated-cable-chest-flyes': {
//         'Max': 0
//     },
//     'dip-machine': {
//         'Max': 0
//     },
//     'high-incline-db-press': {
//         'Max': 0
//     },
//     'lateral-raises-(db)': {
//         'Max': 0
//     },
//     'around-the-world-superman-hold': {
//         'Max': 0
//     },
//     'single-arm-pulldown-(lats)': {
//         'Max': 0
//     },
//     'single-arm-cable-row': {
//         'Max': 0
//     },
//     'wide-grip-pulldowns': {
//         'Max': 0
//     },
//     'chest-supported-upper-back-rows': {
//         'Max': 0
//     },
//     'dumbbell-shrug': {
//         'Max': 0
//     },
//     'rear-delt-flye-machine': {
//         'Max': 0
//     },
//     'db-standing-curls': {
//         'Max': 0
//     },
//     'db-hammer-curls': {
//         'Max': 0
//     },
//     'reverse-grip-ez-bar-curls': {
//         'Max': 0
//     },
//     'ez-bar-wrist-curls': {
//         'Max': 0
//     },
//     'reverse-wrist-curls': {
//         'Max': 0
//     },
//     'squat-press': {
//         'Max': 0
//     },
//     'barbell-rdl': {
//         'Max': 0
//     },
//     'hip-thrust': {
//         'Max': 0
//     },
//     'adductor-machine': {
//         'Max': 0
//     },
//     'abduction-machine': {
//         'Max': 0
//     },
//     'leg-extensions': {
//         'Max': 0
//     },
//     'seated-leg-curls': {
//         'Max': 0
//     },
//     'preacher-curl-machine': {
//         'Max': 0
//     },
//     'tricep-pushdown': {
//         'Max': 0
//     },
//     'concentration-curls': {
//         'Max': 0
//     },
//     'jm-press-(smith)': {
//         'Max': 0
//     },
//     'db-hammer-curls': {
//         'Max': 0
//     },
//     'tricep-overhead-extensions-(cable)': {
//         'Max': 0
//     },
//     'straight-leg-calf-raise-machine': {
//         'Max': 0
//     },
//     'tibialis-anterior-raise': {
//         'Max': 0
//     },
//     'seated-calf-raise': {
//         'Max': 0
//     },
//     'incline-press-machine': {
//         'Max': 0
//     },
//     'decline-press-machine': {
//         'Max': 0
//     },
//     'db-shoulder-press': {
//         'Max': 0
//     },
//     'chest-flye-machine': {
//         'Max': 0
//     },
//     'cable-lateral-raises': {
//         'Max': 0
//     },
//     'pulldown-machine-(supinated-grip)': {
//         'Max': 0
//     },
//     'chest-supported-lat-row': {
//         'Max': 0
//     },
//     'chest-supported-t-bar-rows-(upper-back)': {
//         'Max': 0
//     },
//     'straight-arm-pulldowns-(cable)': {
//         'Max': 0
//     },
//     'bent-over-rear-delt-flyes': {
//         'Max': 0
//     },
//     'walked-out-cable-curls': {
//         'Max': 0
//     },
//     'pendulum-squat-(quad-version)': {
//         'Max': 0
//     },
//     'db-rdl': {
//         'Max': 0
//     },
//     'laying-leg-curl': {
//         'Max': 0
//     },
//     'hyperextension': {
//         'Max': 0
//     },
//     'incline-db-curls': {
//         'Max': 0
//     },
//     'unknown': {
//         'Max': 'unknown'
//     }
// }