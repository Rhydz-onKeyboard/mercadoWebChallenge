const express = require('express');
const cors = require('cors');
require('dotenv').config();

const hbsConfig = {
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components/",
};

const hbs = require('express-handlebars').create(hbsConfig);

const Server = require('./models/server');

const server = new Server(express, process.env.PORT, cors, hbs);

server.listen();