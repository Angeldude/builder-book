require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoSessionStore = require('connect-mongo');
const next = require('next');
const mongoose = require('mongoose');
const User = require('./models/User');

const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhost:${port}`;

const dev = process.env.NODE_ENV !== 'production';
const MONGO_URL = process.env.MONGO_URL_TEST;

mongoose.connect(MONGO_URL);

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    const sessionOptions = {
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET,
        store: mongoSessionStore.create({
            mongoUrl: MONGO_URL,
            ttl: 14 * 24 * 60 * 60,
        }),
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 14 * 24 * 60 * 60 * 1000,
            domain: 'localhost',
        },
    };

    server.use(session(sessionOptions));

    server.get('/', async (req, res) => {
        const user = JSON.stringify(await User.findOne({ slug: 'team-builder-book' }));        
        req.user = user;

        app.render(req, res, '/');
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
        console.log(`> Ready on  ${ROOT_URL}!`);
    })

});

