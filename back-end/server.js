const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes')
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const dbURI = 'mongodb+srv://user123:user123@capstonebackend.o78na.mongodb.net/?retryWrites=true&w=majority&appName=CapstoneBackend'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
                        .then((result) => console.log("Connection established"))
                        .catch((error) => console.log("Connection error"))

const port = 3000;

app.use('/api', routes)

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy!');
})

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server };