import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.post('/graphql', (req, res) => {
  res.send('hello');
});

const server = app.listen(PORT, () => {
  const host = server.address().host;
  const port = server.address().port;
  console.log(`Graphql listening at http://${host}:${port}`);
});
