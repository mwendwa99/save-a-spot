const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const cors = require('cors');
const bodyParser = require('body-parser');

// mongoose promise
mongoose.Promise = global.Promise

const app = express();
const PORT = 5000;
uri = 'mongodb://127.0.0.1:27017/isprojectfinal';

// connect frontend to backend
app.use(cors());

// parse requests of content type application/json
app.use(bodyParser.json());

// user route middleware
app.use('/api', userRoutes);

// connect to local db with mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then((result) => app.listen(PORT, () => {
    console.log(`connected to ${uri} via port: ${PORT}`)
})).catch((err) => console.log(err))


// 404 page
app.use((req, res) => {
    res.send("page does not exist!");
});