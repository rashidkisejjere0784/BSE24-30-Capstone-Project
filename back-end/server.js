const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
app.use(express.json());
mongoose.set('debug', true);

// Define the port variable
const port = 3000;

// MongoDB connection URI
const dbURI = 'mongodb+srv://user123:user123@capstonebackend.o78na.mongodb.net/capstone-backend?retryWrites=true&w=majority';

let server; // Initialize server variable outside of the connection promise

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Start the server after successful connection
    server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log("Connection error:", error));

// Define API routes
app.use('/api', routes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy!');
});

// Function to close the mongoose connection
const closeDatabase = async () => {
  await mongoose.connection.close();
};

// Export the app, server, and close function
module.exports = { app, server, closeDatabase };
