import express from 'express';

const app = express();

app.use(express.static('api/web'));

app.get('/api', (_, res) => {
  res.send('Hello API!')
});

export { app };
