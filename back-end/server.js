const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes')
const mongoose = require('mongoose');

dotenv.config();

const app = express();
app.use(express.json());

const dbURI = 'mongodb+srv://user123:user123@capstonebackend.o78na.mongodb.net/capstone-backend?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((result) => {console.log("Connection established")})
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