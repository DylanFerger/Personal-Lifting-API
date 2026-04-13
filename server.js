const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const path = require('path')
const { MongoClient } = require('mongodb')

let dbConnection
const uri = 'mongodb+srv://liftingApp:password123!@lifting-app-db.o3bapio.mongodb.net/?appName=lifting-app-db'

app.use(cors())
app.use(express.json())

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

app.post('/api/workout', async (req, res) => {
    try {
        if (!dbConnection) {
            return res.status(500).json({ error: 'DB not connected' });
        }

        const updates = req.body;

        const doc = await dbConnection.collection('lifts').findOne({});

        if (!doc) {
            return res.status(404).json({ error: 'No lift document found' });
        }

        const updateQuery = {};

        for (const [liftName, data] of Object.entries(updates)) {

            const currentLift = doc[liftName];

            if (!currentLift || typeof currentLift.Max === 'undefined') continue;

            const newMax = data.newMax;

            // 🔥 ONLY UPDATE IF HIGHER
            if (newMax > currentLift.Max) {
                updateQuery[liftName] = {
                    Max: newMax
                };
            }
        }

        if (Object.keys(updateQuery).length === 0) {
            return res.json({ message: 'No new PRs' });
        }

        await dbConnection.collection('lifts').updateOne(
            { _id: doc._id },
            { $set: updateQuery }
        );

        res.json({
            message: 'Workout updated',
            updated: updateQuery
        });


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

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