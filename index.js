const app = require('express')();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello Digital Ocean!'));
app.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`));
