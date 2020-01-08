'use strict';
require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const methodOverride = require('method-override');

const superagent = require('superagent');
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3000;


server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('_method'));
server.set('view engine', 'ejs')
server.use(express.static('./public'));


server.get('/', homePage);

let welecomMessage = 'Hello people';
function homePage (req,res){
    res.render('pages/index',{shiap:welecomMessage})
}




















function handleError(error, response) {
        response.render('pages/error', { error: error });
    }
    let message = "SORY YOU HAVE DO A MISTAKE"
    server.get('*', (req, res) => {
        res.status(404).render('./pages/error', { 'message': message })
    });
    
    client.connect()
        .then(() => {
        server.listen(PORT, () => console.log(`server listen to ${PORT} port`));
    }).catch(err => handleError(err));
