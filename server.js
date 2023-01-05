const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


const { request } = require('http');
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
// adds a middleware for serving static files to Express app
app.use(express.static('public'));
app.use(express.json());

const parsedNotes = JSON.parse(Notes);
console.info('parsed notes',parsedNotes)
// get route for notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
