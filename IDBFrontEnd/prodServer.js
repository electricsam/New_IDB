const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8181;
const app = express();

app.use(express.static(path.join(__dirname, './dist')))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
});
