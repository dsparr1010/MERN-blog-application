const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require('passport');

require('dotenv').config();

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/api/user'));
app.use('/api/posts', require('./routes/api/post'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('connected to DB'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
});