const express = require('express');
const router = require('./routers/router');
const port = process.env.port || 9527;

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(router);
app.listen(port);