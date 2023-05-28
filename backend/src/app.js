const express = require('express');
const appRoutes = require('./routes');

const app = express();

app.use(appRoutes);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
