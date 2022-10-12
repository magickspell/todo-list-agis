// @ts-ignore
const {MongoClient} = require("mongodb");
const cors = require('cors')
const express = require('express')
const app = express()

// подключаемся к БД mongoDB
//const uri = 'mongodb+srv://magic:<YouShallNotPass>@cluster0.wh26qcf.mongodb.net/?retryWrites=true&w=majority' // TODO password
const uri = 'mongodb+srv://magic:magic431323@cluster0.wh26qcf.mongodb.net/?retryWrites=true&w=majority' // TODO password
const client = new MongoClient(uri);
const database = client.db('agis-todolist');
const promosCollection = database.collection('agis-todolist');

app.use(cors())
app.use(express.json())

//методы
app.get('/items', async function (req, res) {
    try {
        const items = await promosCollection.find().toArray();
        console.log(items);
        res.status(200).send(items);
    } catch (e) {
        console.warn(e);
        res.send('error');
    }
})
app.post('/new-item', async function (req, res) {
    const item = {
        id: req.body.id,
        title: req.body.title,
        text: req.body.text,
    }
    try {
        const result = await promosCollection.insertOne(item)
        res.status(200).send();
    } catch (e) {
        console.warn(e);
        res.send('error');
    }
})
app.post('/drop-item', async function (req, res) {
    console.log(req.body)
    try {
        const result = await promosCollection.deleteOne({ "id" : req.body.id })
        res.status(200).send();
    } catch (e) {
        console.warn(e);
        res.send('error');
    }
})
app.post('/update-item', async function (req, res) {
    console.log(req.body)
    const item = {
        id: req.body.id,
        title: req.body.title,
        text: req.body.text,
    }
    try {
        const result = await promosCollection.updateOne({ "id" : req.body.id }, {$set: { ...item }})
        res.status(200).send();
    } catch (e) {
        console.warn(e);
        res.send('error');
    }
})

app.listen(3001, () => console.log(`app started on port ${3001}`))