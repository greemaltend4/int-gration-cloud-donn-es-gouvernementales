const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connection to MongoDB
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/donnees?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err.message));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});