const express = require('express');

const natureRoute = require('./routes/nature-route');
const techRoute = require('./routes/tech-route');
const festivalRoute = require('./routes/festival-route');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH');
    res.setHeader("Set-Cookie", "HttpOnly, Secure, SameSite=Lax");
    next();
});

app.use('/api/nature', natureRoute);
app.use('/api/tech', techRoute);
app.use('/api/festival', festivalRoute);


app.listen(process.env.PORT);