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
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

app.get('/', (req, res) => {
  res.send('API fonctionnelle');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});