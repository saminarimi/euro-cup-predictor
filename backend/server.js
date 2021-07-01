const express = require('express');
const mongoose = require('mongoose');

const app = express();

try {
    mongoose.connect(
        'mongodb+srv://saminarose:BZAbBYzyyg6g3fCU@cluster0.4gy21.mongodb.net/my-test-db',
        { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to database.');
} catch (err) {
    console.error(err)
}

app.use('', require('./routes/prediction.route'))

app.listen(8000, () => console.log('app running on http://localhost:8000'))