const app = require('express')();

app.get('/', (req, res) => res.send('Hello Digital Ocean!'));
app.listen(3000, () => console.log('Magic is happening on port 3000!'));
