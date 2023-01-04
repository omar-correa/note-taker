const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const uniqid = require('uniqid');
const notes = require('./Develop/db/db.json')
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
// adds a middleware for serving static files to Express app
app.use(express.static('public'));
app.use(express.json());

let parsedNotes = notes
// get route for notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api', (req, res) =>
  res.json(notes));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
