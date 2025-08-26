const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Cria cliente Redis (nome do serviço definido no compose: 'redis')
const client = redis.createClient({ url: 'redis://redis:6379' });

client.connect();

app.get('/', async (req, res) => {
  await client.incr('counter');
  const counter = await client.get('counter');
  res.send(`Página visitada ${counter} vezes`);
});

app.listen(port, () => console.log(`App rodando em http://localhost:${port}`));
