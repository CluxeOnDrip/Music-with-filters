const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Ateya YT is Alive!'));

app.listen(port, () => console.log(`Atreya Yt is listening to http://localhost:${port}`));
//Made By Atreya YT
