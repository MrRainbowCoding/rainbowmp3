const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Main routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/market', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'market.html'))
})
// Routes for Downloads

// Odetari

app.get('/download/too-slow', function (req, res) {
  const file = `${__dirname}/public/mp3/songs/odetari/tooslow.mp3`;
  res.download(file); // Download the file.
});

// Kordhell

app.get('/download/fatality', function (req, res) {
  const file = `${__dirname}/public/mp3/songs/kordhell/fatality.mp3`;
  res.download(file); // Download the file.
});
// Various

app.get('/download/pista-toma', function (req, res) {
  const file = `${__dirname}/public/mp3/songs/various/RXDXVIL, DJ FKU, John Bis.T/pistatoma.mp3`;
  res.download(file); // Download the file.
});
app.get('/download/level-up', function (req, res) {
  const file = `${__dirname}/public/mp3/songs/various/Odetari & 6arelyhuman/levelup.mp3`;
  res.download(file); // Download the file.
});

// END OF DOWNLOAD ROUTES
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});