const { Router } = require('express');
const { uuid } = require('crypto');


app.get('/notes/:id', (req, res) => {
    const note = parsedNotes[req.params.id]
})

app.get('/api', (req, res) =>
    res.json(notes));
