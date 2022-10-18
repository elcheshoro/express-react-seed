import express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'web')));

app.get('/api', (_, res) => {
  res.send('Hello API!')
});

export { app };
