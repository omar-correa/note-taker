const express = require('express');

const PORT = process.env.PORT || 3001;
//server instantiation
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoutes);
app.use(htmlRoutes);

// chain the listen method to server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  })