const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send('testing root route')
// });

// app.post('/user', (req, res) => {
//     console.log(reg.body);
//     res.send(req.body);
// });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('connected to DB'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
});