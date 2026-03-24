const express = require('express')
const app = express()
const PORT = 8000

const lifts = {
    'slight incline db press': {
        'Max': 0
    },
    'seated cable chest flyes': {
        'Max': 0
    },
    'dip machine': {
        'Max': 0
    },
    'high incline db press': {
        'Max': 0
    },
    'tricep pushdown': {
        'Max': 0
    },
    'lateral raises (db)': {
        'Max': 0
    },
    'single arm pulldown (lats)': {
        'Max': 0
    },
    'single arm Ccble row': {
        'Max': 0
    },
    'wide grip pulldowns': {
        'Max': 0
    },
    'chest-supported upper back rows': {
        'Max': 0
    },
    'dumbbell shrug': {
        'Max': 0
    },
    'rear delt flye machine': {
        'Max': 0
    },
    'db standing curls': {
        'Max': 0
    },
    'db hammer curls': {
        'Max': 0
    },
    'reverse grip ez bar curls': {
        'Max': 0
    },
    'ez bar wrist curls': {
        'Max': 0
    },
    'reverse wrist curls': {
        'Max': 0
    },
    'squat press': {
        'Max': 0
    },
    'barbell rdl': {
        'Max': 0
    },
    'hip thrust': {
        'Max': 0
    },
    'adductor machine': {
        'Max': 0
    },
    'abduction machine': {
        'Max': 0
    },
    'leg extensions': {
        'Max': 0
    },
    'seated leg curls': {
        'Max': 0
    },
    'preacher curl machine': {
        'Max': 0
    },
    'tricep pushdown': {
        'Max': 0
    },
    'concentration curls': {
        'Max': 0
    },
    'jm press (smith)': {
        'Max': 0
    },
    'db hammer curls': {
        'Max': 0
    },
    'tricep overhead extensions (cable)': {
        'Max': 0
    },
    'straight leg calf raise machine': {
        'Max': 0
    },
    'tibialis anterior raise': {
        'Max': 0
    },
    'seated calf raise': {
        'Max': 0
    },
    'incline press machine': {
        'Max': 0
    },
    'decline press machine': {
        'Max': 0
    },
    'db shoulder press': {
        'Max': 0
    },
    'dip machine': {
        'Max': 0
    },
    'chest flye machine': {
        'Max': 0
    },
    'cable lateral raises': {
        'Max': 0
    },
    'pulldown machine (supinated grip)': {
        'Max': 0
    },
    'chest-supported lat row': {
        'Max': 0
    },
    'chest-supported t-bar rows (upper back)': {
        'Max': 0
    },
    'straight arm pulldowns (cable)': {
        'Max': 0
    },
    'bent over rear delt flyes': {
        'Max': 0
    },
    'walked-out cable curls': {
        'Max': 0
    },
    'pendulum squat (quad version)': {
        'Max': 0
    },
    'db rdl': {
        'Max': 0
    },
    'laying leg curl': {
        'Max': 0
    },
    'hyperextension': {
        'Max': 0
    },
    'incline db curls': {
        'Max': 0
    },
    'unknown': {
        'Max': 'unknown'
    }
}

app.use(express.static(__dirname))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res)=> {
    res.json(lifts)
})

app.get('/api/:name',(req, res)=>{
    const liftName = req.params.name.toLowerCase()
    if (lifts[liftName]){
        res.json(lifts[liftName].Max)
    } else{
        res.json(lifts['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})