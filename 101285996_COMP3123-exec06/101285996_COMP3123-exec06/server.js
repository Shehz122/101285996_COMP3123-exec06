const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRouter = require("./routes/NoteRoutes");

const DB_URL = "mongodb+srv://shehzad:shehzad@comp3123.xcrku.mongodb.net/f2021_comp3123?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use(noteRouter);

app.listen(8081, () => {
    console.log("Listening on port 8081");
});