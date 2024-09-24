const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes')

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use('/api', routes)

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy!');
})

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server };