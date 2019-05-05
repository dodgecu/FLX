const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const routes = require('./routes');

app.use(bodyparser.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));
